/**
 * Tartil — Quiz Engine
 * Full quiz logic: navigation, timer, answer selection, validation, persistence
 * Supports chapter filtering via URL param & dynamic option randomization
 */

(function () {
  'use strict';

  // ═══ State ═══
  let activeQuestions = [];    // The filtered & shuffled questions for this session
  let currentIndex = 0;
  let userAnswers = [];
  let startTime = Date.now();
  let timerInterval = null;
  let isRevealed = [];
  let shuffledOptionsMap = []; // Stores shuffled option data per question
  let currentChapter = null;   // Active chapter filter (null = all)

  // ═══ DOM Elements ═══
  const arabicDisplay = document.getElementById('arabicDisplay');
  const questionText = document.getElementById('questionText');
  const optionsList = document.getElementById('optionsList');
  const progressFill = document.getElementById('progressFill');
  const questionNum = document.getElementById('questionNum');
  const typeBadge = document.getElementById('typeBadge');
  const quizCard = document.getElementById('quizCard');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const timerDisplay = document.getElementById('timerDisplay');
  const toast = document.getElementById('toast');
  const toastText = document.getElementById('toastText');

  // Option letters
  const letters = ['A', 'B', 'C', 'D'];

  // ═══ Fisher-Yates Shuffle ═══
  function shuffleArray(arr) {
    const shuffled = arr.slice();
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }

  // ═══ Initialize ═══
  function init() {
    // Clear previous session data
    localStorage.removeItem('tartil_answers');
    localStorage.removeItem('tartil_score');
    localStorage.removeItem('tartil_time');
    localStorage.removeItem('tartil_date');

    // Check for selected chapters from localStorage
    const savedChapters = localStorage.getItem('tartil_selected_chapters');
    let selectedChapters = [];
    if (savedChapters) {
      try {
        selectedChapters = JSON.parse(savedChapters);
      } catch (e) {
        console.error("Error parsing selected chapters", e);
      }
    }

    // Check for chapter filter from URL
    const urlParams = new URLSearchParams(window.location.search);
    currentChapter = urlParams.get('chapter');

    // Determine active questions
    if (currentChapter) {
      // Coming from explanation page for specific chapter
      activeQuestions = questions.filter(q => q.category === currentChapter);
      if (activeQuestions.length === 0) {
        activeQuestions = questions.slice();
        currentChapter = null;
      }
      activeQuestions = shuffleArray(activeQuestions);
    } else if (selectedChapters.length > 0) {
      // Coming from material selection page
      const chapterQuestionsMap = {};
      selectedChapters.forEach(chId => {
        // Collect, filter and shuffle per chapter
        chapterQuestionsMap[chId] = shuffleArray(questions.filter(q => q.category === chId));
      });

      // Proportional sampling: take 1 question per chapter in round-robin until limit
      const totalQuestionsLimit = 20;
      let activeQuestionsPool = [];
      let addedInRound = 0;
      
      do {
        addedInRound = 0;
        for (let i = 0; i < selectedChapters.length; i++) {
          if (activeQuestionsPool.length >= totalQuestionsLimit) break;
          
          const chId = selectedChapters[i];
          const chQuestions = chapterQuestionsMap[chId];
          
          if (chQuestions && chQuestions.length > 0) {
            activeQuestionsPool.push(chQuestions.shift());
            addedInRound++;
          }
        }
      } while (addedInRound > 0 && activeQuestionsPool.length < totalQuestionsLimit);

      activeQuestions = shuffleArray(activeQuestionsPool);
      
      // Cleanup localStorage
      localStorage.removeItem('tartil_selected_chapters');
    } else {
      // Fallback: Use all questions
      activeQuestions = questions.slice();
      activeQuestions = shuffleArray(activeQuestions);
    }

    // Prepare shuffled options for each question
    shuffledOptionsMap = activeQuestions.map(q => {
      return createShuffledOptions(q);
    });

    // Reset state
    currentIndex = 0;
    userAnswers = new Array(activeQuestions.length).fill(null);
    isRevealed = new Array(activeQuestions.length).fill(false);
    startTime = Date.now();

    // Update topbar title if chapter-specific
    if (currentChapter) {
      const ch = chapters.find(c => c.id === currentChapter);
      if (ch) {
        const topbarTitle = document.querySelector('.quiz-topbar-title');
        if (topbarTitle) {
          topbarTitle.textContent = ch.title;
        }
      }
    }

    // Start timer
    startTimer();

    // Load first question
    loadQuestion(currentIndex);

    // Button events
    prevBtn.addEventListener('click', prevQuestion);
    nextBtn.addEventListener('click', nextQuestion);

    // Keyboard navigation
    document.addEventListener('keydown', handleKeyboard);
  }

  /**
   * Create shuffled options for a question.
   * Returns { options: [...], correctIndex: number, originalToShuffled: Map }
   */
  function createShuffledOptions(q) {
    // Create an array of { text, originalIndex }
    const optionEntries = q.options.map((opt, i) => ({
      text: opt,
      originalIndex: i
    }));

    // Shuffle
    const shuffled = shuffleArray(optionEntries);

    // Find where the correct answer ended up
    const correctIndex = shuffled.findIndex(
      entry => entry.originalIndex === q.answer
    );

    return {
      options: shuffled.map(e => e.text),
      correctIndex: correctIndex,
      // Map from shuffled index to original index
      shuffledToOriginal: shuffled.map(e => e.originalIndex)
    };
  }

  // ═══ Timer ═══
  function startTimer() {
    updateTimerDisplay();
    timerInterval = setInterval(updateTimerDisplay, 1000);
  }

  function updateTimerDisplay() {
    const elapsed = Math.floor((Date.now() - startTime) / 1000);
    const minutes = Math.floor(elapsed / 60);
    const seconds = elapsed % 60;
    timerDisplay.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
  }

  function stopTimer() {
    if (timerInterval) {
      clearInterval(timerInterval);
      timerInterval = null;
    }
  }

  function getTotalSeconds() {
    return Math.floor((Date.now() - startTime) / 1000);
  }

  // ═══ Question Loading ═══
  function loadQuestion(index) {
    const q = activeQuestions[index];
    const shuffledOpts = shuffledOptionsMap[index];
    currentIndex = index;

    // Update progress bar
    updateProgressBar();

    // Type badge
    const typeIcon = q.type === 'ayat' ? '📖' : '📝';
    const typeLabel = q.type === 'ayat' ? 'Soal Ayat' : 'Soal Teori';
    typeBadge.innerHTML = `${typeIcon} ${typeLabel}`;

    // Arabic display
    if (q.arabic && q.arabic.trim() !== '') {
      arabicDisplay.textContent = q.arabic;
      arabicDisplay.style.display = 'block';
    } else {
      arabicDisplay.style.display = 'none';
    }

    // Question text
    questionText.textContent = q.question;

    // Build options (using shuffled order)
    buildOptions(q, index, shuffledOpts);

    // Update navigation buttons
    updateNavButtons();

    // Animate card entrance
    quizCard.style.animation = 'none';
    quizCard.offsetHeight; // force reflow
    quizCard.style.animation = 'fadeInUp 0.35s ease-out';
  }

  // ═══ Build Options ═══
  function buildOptions(q, qIndex, shuffledOpts) {
    optionsList.innerHTML = '';

    shuffledOpts.options.forEach((optText, optIndex) => {
      const btn = document.createElement('button');
      btn.className = 'option-btn';
      btn.setAttribute('data-index', optIndex);

      // Option letter circle + text
      btn.innerHTML = `
        <span class="option-letter">${letters[optIndex]}</span>
        <span class="option-text">${optText}</span>
      `;

      // If this question was already answered
      if (userAnswers[qIndex] !== null) {
        if (isRevealed[qIndex]) {
          // Show revealed state (correct/wrong)
          applyRevealedState(btn, optIndex, shuffledOpts.correctIndex, userAnswers[qIndex]);
        } else {
          // Show selected state (gold)
          if (userAnswers[qIndex] === optIndex) {
            btn.classList.add('selected');
          }
          btn.addEventListener('click', () => selectAnswer(optIndex));
        }
      } else {
        btn.addEventListener('click', () => selectAnswer(optIndex));
      }

      optionsList.appendChild(btn);
    });
  }

  // ═══ Apply Revealed State to Option ═══
  function applyRevealedState(btn, optIndex, correctIndex, selectedIndex) {
    if (optIndex === correctIndex) {
      btn.classList.add('correct');
    } else if (optIndex === selectedIndex && selectedIndex !== correctIndex) {
      btn.classList.add('wrong');
      btn.classList.add('shake');
    } else {
      btn.classList.add('disabled');
    }
    btn.disabled = true;
  }

  // ═══ Answer Selection ═══
  function selectAnswer(optionIndex) {
    // If already revealed for this question, do nothing
    if (isRevealed[currentIndex]) return;

    // Save the answer (shuffled index)
    userAnswers[currentIndex] = optionIndex;

    // Update visual — mark selected (gold) state
    const allBtns = optionsList.querySelectorAll('.option-btn');
    allBtns.forEach((btn, i) => {
      btn.classList.remove('selected');
      if (i === optionIndex) {
        btn.classList.add('selected');
      }
    });

    // Auto-save answers to localStorage
    saveToLocalStorage();
  }

  // ═══ Reveal Answer (on proceeding to next or finishing) ═══
  function revealAnswer(qIndex) {
    if (isRevealed[qIndex]) return;

    isRevealed[qIndex] = true;

    // If we're currently viewing this question, update the UI
    if (qIndex === currentIndex) {
      const shuffledOpts = shuffledOptionsMap[qIndex];
      const allBtns = optionsList.querySelectorAll('.option-btn');

      allBtns.forEach((btn, i) => {
        btn.classList.remove('selected');
        applyRevealedState(btn, i, shuffledOpts.correctIndex, userAnswers[qIndex]);
      });
    }
  }

  // ═══ Navigation ═══
  function nextQuestion() {
    // Validate: must select an answer before proceeding
    if (userAnswers[currentIndex] === null) {
      showToast('Pilih jawaban terlebih dahulu!');
      return;
    }

    // Reveal the answer for current question
    revealAnswer(currentIndex);

    // Check if last question
    if (currentIndex === activeQuestions.length - 1) {
      finishQuiz();
      return;
    }

    // Wait a moment to show the reveal, then move
    setTimeout(() => {
      currentIndex++;
      loadQuestion(currentIndex);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 600);
  }

  function prevQuestion() {
    if (currentIndex > 0) {
      currentIndex--;
      loadQuestion(currentIndex);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  function handleKeyboard(e) {
    if (e.key === 'ArrowRight' || e.key === 'Enter') {
      nextQuestion();
    } else if (e.key === 'ArrowLeft') {
      prevQuestion();
    } else if (e.key >= '1' && e.key <= '4') {
      const idx = parseInt(e.key) - 1;
      if (idx < activeQuestions[currentIndex].options.length && !isRevealed[currentIndex]) {
        selectAnswer(idx);
      }
    }
  }

  // ═══ Update UI Elements ═══
  function updateProgressBar() {
    const progress = ((currentIndex + 1) / activeQuestions.length) * 100;
    progressFill.style.width = `${progress}%`;
    questionNum.textContent = `Soal ${currentIndex + 1} / ${activeQuestions.length}`;
  }

  function updateNavButtons() {
    // Previous button
    prevBtn.disabled = currentIndex === 0;
    prevBtn.style.opacity = currentIndex === 0 ? '0.4' : '1';

    // Next/Finish button
    if (currentIndex === activeQuestions.length - 1) {
      nextBtn.innerHTML = `
        🏁 Selesai
      `;
      nextBtn.classList.remove('btn-primary');
      nextBtn.classList.add('btn-accent');
    } else {
      nextBtn.innerHTML = `
        Selanjutnya
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg>
      `;
      nextBtn.classList.remove('btn-accent');
      nextBtn.classList.add('btn-primary');
    }
  }

  // ═══ Toast Notification ═══
  function showToast(message) {
    toastText.textContent = message;
    toast.classList.add('show');

    setTimeout(() => {
      toast.classList.remove('show');
    }, 2500);
  }

  // ═══ Finish Quiz ═══
  function finishQuiz() {
    stopTimer();

    // Reveal all
    for (let i = 0; i < activeQuestions.length; i++) {
      isRevealed[i] = true;
    }

    // Calculate score — compare user's shuffled answer with shuffled correct index
    let score = 0;
    const originalAnswers = []; // For result page compatibility

    for (let i = 0; i < activeQuestions.length; i++) {
      const shuffledOpts = shuffledOptionsMap[i];
      const isCorrect = userAnswers[i] === shuffledOpts.correctIndex;
      if (isCorrect) score++;

      // Map user's selected shuffled index back to original index for result page
      if (userAnswers[i] !== null) {
        originalAnswers.push(shuffledOpts.shuffledToOriginal[userAnswers[i]]);
      } else {
        originalAnswers.push(null);
      }
    }

    const totalSeconds = getTotalSeconds();
    const dateStr = new Date().toLocaleDateString('id-ID', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });

    // Save to localStorage — store original question IDs for result page
    const questionIds = activeQuestions.map(q => q.id);
    localStorage.setItem('tartil_answers', JSON.stringify(originalAnswers));
    localStorage.setItem('tartil_question_ids', JSON.stringify(questionIds));
    localStorage.setItem('tartil_score', score.toString());
    localStorage.setItem('tartil_total', activeQuestions.length.toString());
    localStorage.setItem('tartil_time', totalSeconds.toString());
    localStorage.setItem('tartil_date', dateStr);
    if (currentChapter) {
      localStorage.setItem('tartil_chapter', currentChapter);
    } else {
      localStorage.removeItem('tartil_chapter');
    }

    // Also save score for home page banner
    localStorage.setItem('tartilScore', score.toString());

    // Redirect to result page
    setTimeout(() => {
      window.location.href = 'result.html';
    }, 400);
  }

  // ═══ Save Progress ═══
  function saveToLocalStorage() {
    localStorage.setItem('tartil_answers_progress', JSON.stringify(userAnswers));
  }

  // ═══ Start ═══
  document.addEventListener('DOMContentLoaded', init);
})();
