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
    // Check for existing active session in localStorage
    const savedActiveQuestions = localStorage.getItem('tartil_active_questions_ids');
    const savedShuffledMap = localStorage.getItem('tartil_shuffled_map');
    const savedIndex = localStorage.getItem('tartil_current_index');
    const savedAnswers = localStorage.getItem('tartil_answers_progress');
    const savedStartTime = localStorage.getItem('tartil_start_time');

    if (savedActiveQuestions && savedShuffledMap) {
      // Restore session
      const qIds = JSON.parse(savedActiveQuestions);
      activeQuestions = qIds.map(id => questions.find(q => q.id === id));
      shuffledOptionsMap = JSON.parse(savedShuffledMap);
      currentIndex = savedIndex ? parseInt(savedIndex, 10) : 0;
      userAnswers = savedAnswers ? JSON.parse(savedAnswers) : new Array(activeQuestions.length).fill(null);
      isRevealed = userAnswers.map(ans => ans !== null);
      startTime = savedStartTime ? parseInt(savedStartTime, 10) : Date.now();
      
      const savedChapterId = localStorage.getItem('tartil_chapter');
      currentChapter = savedChapterId || null;
    } else {
      // Create new session
      localStorage.removeItem('tartil_answers');
      localStorage.removeItem('tartil_score');
      localStorage.removeItem('tartil_time');
      localStorage.removeItem('tartil_date');

      const savedChapters = localStorage.getItem('tartil_selected_chapters');
      let selectedChapters = [];
      if (savedChapters) {
        try {
          selectedChapters = JSON.parse(savedChapters);
        } catch (e) {
          console.error("Error parsing selected chapters", e);
        }
      }

      const urlParams = new URLSearchParams(window.location.search);
      currentChapter = urlParams.get('chapter');

      if (currentChapter) {
        activeQuestions = questions.filter(q => q.category === currentChapter);
        if (activeQuestions.length === 0) {
          activeQuestions = questions.slice();
          currentChapter = null;
        }
        activeQuestions = shuffleArray(activeQuestions);
      } else if (selectedChapters.length > 0) {
        const chapterQuestionsMap = {};
        selectedChapters.forEach(chId => {
          chapterQuestionsMap[chId] = shuffleArray(questions.filter(q => q.category === chId));
        });

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
      } else {
        activeQuestions = shuffleArray(questions.slice());
      }

      shuffledOptionsMap = activeQuestions.map(q => createShuffledOptions(q));
      currentIndex = 0;
      userAnswers = new Array(activeQuestions.length).fill(null);
      isRevealed = new Array(activeQuestions.length).fill(false);
      startTime = Date.now();

      // Save initial session
      localStorage.setItem('tartil_active_questions_ids', JSON.stringify(activeQuestions.map(q => q.id)));
      localStorage.setItem('tartil_shuffled_map', JSON.stringify(shuffledOptionsMap));
      localStorage.setItem('tartil_start_time', startTime.toString());
      if (currentChapter) localStorage.setItem('tartil_chapter', currentChapter);
    }

    if (currentChapter) {
      const ch = chapters.find(c => c.id === currentChapter);
      if (ch) {
        const topbarTitle = document.querySelector('.quiz-topbar-title');
        if (topbarTitle) topbarTitle.textContent = ch.title;
      }
    }

    startTimer();
    loadQuestion(currentIndex);

    prevBtn.addEventListener('click', prevQuestion);
    nextBtn.addEventListener('click', nextQuestion);
    document.addEventListener('keydown', handleKeyboard);
  }

  function createShuffledOptions(q) {
    const optionEntries = q.options.map((opt, i) => ({ text: opt, originalIndex: i }));
    const shuffled = shuffleArray(optionEntries);
    const correctIndex = shuffled.findIndex(entry => entry.originalIndex === q.answer);
    return {
      options: shuffled.map(e => e.text),
      correctIndex: correctIndex,
      shuffledToOriginal: shuffled.map(e => e.originalIndex)
    };
  }

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

  function loadQuestion(index) {
    const q = activeQuestions[index];
    const shuffledOpts = shuffledOptionsMap[index];
    currentIndex = index;
    localStorage.setItem('tartil_current_index', currentIndex.toString());

    updateProgressBar();
    typeBadge.textContent = q.type === 'ayat' ? 'Soal Ayat' : 'Soal Teori';

    if (q.arabic && q.arabic.trim() !== '') {
      arabicDisplay.textContent = q.arabic;
      arabicDisplay.style.display = 'block';
    } else {
      arabicDisplay.style.display = 'none';
    }

    questionText.textContent = q.question;
    buildOptions(q, index, shuffledOpts);
    updateNavButtons();

    quizCard.style.animation = 'none';
    quizCard.offsetHeight; 
    quizCard.style.animation = 'fadeInUp 0.35s ease-out';
  }

  function buildOptions(q, qIndex, shuffledOpts) {
    optionsList.innerHTML = '';
    shuffledOpts.options.forEach((optText, optIndex) => {
      const btn = document.createElement('button');
      btn.className = 'option-btn';
      btn.setAttribute('data-index', optIndex);
      btn.innerHTML = `<span class="option-letter">${letters[optIndex]}</span><span class="option-text">${optText}</span>`;

      if (userAnswers[qIndex] !== null) {
        if (isRevealed[qIndex]) {
          applyRevealedState(btn, optIndex, shuffledOpts.correctIndex, userAnswers[qIndex]);
        } else {
          if (userAnswers[qIndex] === optIndex) btn.classList.add('selected');
          btn.addEventListener('click', () => selectAnswer(optIndex));
        }
      } else {
        btn.addEventListener('click', () => selectAnswer(optIndex));
      }
      optionsList.appendChild(btn);
    });
  }

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

  function selectAnswer(optionIndex) {
    if (isRevealed[currentIndex]) return;
    userAnswers[currentIndex] = optionIndex;
    
    // Auto reveal and auto advance
    revealAnswer(currentIndex);
    saveToLocalStorage();

    if (currentIndex < activeQuestions.length - 1) {
      setTimeout(() => {
        currentIndex++;
        loadQuestion(currentIndex);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 800);
    } else {
      // Last question - stay on current view to show Selesai button
      updateNavButtons();
    }
  }

  function revealAnswer(qIndex) {
    if (isRevealed[qIndex]) return;
    isRevealed[qIndex] = true;
    if (qIndex === currentIndex) {
      const shuffledOpts = shuffledOptionsMap[qIndex];
      const allBtns = optionsList.querySelectorAll('.option-btn');
      allBtns.forEach((btn, i) => {
        btn.classList.remove('selected');
        applyRevealedState(btn, i, shuffledOpts.correctIndex, userAnswers[qIndex]);
      });
    }
  }

  function nextQuestion() {
    if (userAnswers[currentIndex] === null) {
      showToast('Pilih jawaban terlebih dahulu!');
      return;
    }
    revealAnswer(currentIndex);
    if (currentIndex === activeQuestions.length - 1) {
      finishQuiz();
      return;
    }
    currentIndex++;
    loadQuestion(currentIndex);
  }

  function prevQuestion() {
    if (currentIndex > 0) {
      currentIndex--;
      loadQuestion(currentIndex);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  function handleKeyboard(e) {
    if (e.key === 'Enter') {
      if (currentIndex === activeQuestions.length - 1 && userAnswers[currentIndex] !== null) {
        finishQuiz();
      }
    } else if (e.key >= '1' && e.key <= '4') {
      const idx = parseInt(e.key) - 1;
      if (idx < activeQuestions[currentIndex].options.length && !isRevealed[currentIndex]) {
        selectAnswer(idx);
      }
    }
  }

  function updateProgressBar() {
    const progress = ((currentIndex + 1) / activeQuestions.length) * 100;
    progressFill.style.width = `${progress}%`;
    questionNum.textContent = `Soal ${currentIndex + 1} / ${activeQuestions.length}`;
  }

  function updateNavButtons() {
    // Hide Prev/Next during normal auto-flow
    prevBtn.style.display = 'none';

    if (currentIndex === activeQuestions.length - 1) {
      // Last question
      nextBtn.style.display = 'flex';
      nextBtn.textContent = 'Selesai';
      nextBtn.classList.remove('btn-primary');
      nextBtn.classList.add('btn-accent');
      if (userAnswers[currentIndex] === null) {
        nextBtn.style.opacity = '0.5';
        nextBtn.disabled = true;
      } else {
        nextBtn.style.opacity = '1';
        nextBtn.disabled = false;
      }
    } else {
      // Not last question, hide Next button because we use auto-advance
      nextBtn.style.display = 'none';
    }
  }

  function showToast(message) {
    toastText.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 2500);
  }

  function finishQuiz() {
    stopTimer();
    let score = 0;
    const originalAnswers = [];

    for (let i = 0; i < activeQuestions.length; i++) {
      const shuffledOpts = shuffledOptionsMap[i];
      const isCorrect = userAnswers[i] === shuffledOpts.correctIndex;
      if (isCorrect) score++;
      originalAnswers.push(userAnswers[i] !== null ? shuffledOpts.shuffledToOriginal[userAnswers[i]] : null);
    }

    const totalSeconds = getTotalSeconds();
    const dateStr = new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });

    localStorage.setItem('tartil_answers', JSON.stringify(originalAnswers));
    localStorage.setItem('tartil_question_ids', JSON.stringify(activeQuestions.map(q => q.id)));
    localStorage.setItem('tartil_score', score.toString());
    localStorage.setItem('tartil_total', activeQuestions.length.toString());
    localStorage.setItem('tartil_time', totalSeconds.toString());
    localStorage.setItem('tartil_date', dateStr);
    localStorage.setItem('tartilScore', score.toString());

    // Clean up session persistence
    const keysToRemove = [
      'tartil_active_questions_ids', 'tartil_shuffled_map', 
      'tartil_current_index', 'tartil_answers_progress', 
      'tartil_start_time', 'tartil_selected_chapters'
    ];
    keysToRemove.forEach(k => localStorage.removeItem(k));

    setTimeout(() => { window.location.href = 'result.html'; }, 400);
  }

  function saveToLocalStorage() {
    localStorage.setItem('tartil_answers_progress', JSON.stringify(userAnswers));
  }

  document.addEventListener('DOMContentLoaded', init);
})();
