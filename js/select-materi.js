document.addEventListener('DOMContentLoaded', () => {
  const chapterGrid = document.getElementById('chapterGrid');
  const selectAllBtn = document.getElementById('selectAllBtn');
  const deselectAllBtn = document.getElementById('deselectAllBtn');
  const startQuizBtn = document.getElementById('startQuizBtn');
  const startQuizCount = startQuizBtn.querySelector('span');

  // Count questions per chapter
  const chapterQuestionsCount = {};
  chapters.forEach(ch => chapterQuestionsCount[ch.id] = 0);
  questions.forEach(q => {
    if (chapterQuestionsCount[q.category] !== undefined) {
      chapterQuestionsCount[q.category]++;
    }
  });

  // Render chapter cards
  chapters.forEach(ch => {
    const qCount = chapterQuestionsCount[ch.id] || 0;
    if (qCount === 0) return; // Skip chapters without questions

    const card = document.createElement('label');
    card.className = 'chapter-card selected'; // Default selected
    card.innerHTML = `
      <input type="checkbox" class="chapter-checkbox" value="${ch.id}" checked>
      <div class="chapter-card-content">
        <div class="chapter-card-header">
          <h3>${ch.title}</h3>
          <div class="checkbox-mock">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </div>
        </div>
        <p class="chapter-card-desc">${ch.description}</p>
        <div class="chapter-card-count">Tersedia ${qCount} soal</div>
      </div>
    `;

    // Toggle selected class on change
    const checkbox = card.querySelector('input');
    checkbox.addEventListener('change', () => {
      if (checkbox.checked) {
        card.classList.add('selected');
      } else {
        card.classList.remove('selected');
      }
      updateStartButton();
    });

    chapterGrid.appendChild(card);
  });

  // Top actions
  selectAllBtn.addEventListener('click', () => {
    document.querySelectorAll('.chapter-checkbox').forEach(cb => {
      cb.checked = true;
      cb.closest('.chapter-card').classList.add('selected');
    });
    updateStartButton();
  });

  deselectAllBtn.addEventListener('click', () => {
    document.querySelectorAll('.chapter-checkbox').forEach(cb => {
      cb.checked = false;
      cb.closest('.chapter-card').classList.remove('selected');
    });
    updateStartButton();
  });

  // Calculate selected questions
  function updateStartButton() {
    const selectedBoxes = Array.from(document.querySelectorAll('.chapter-checkbox:checked'));
    if (selectedBoxes.length === 0) {
      startQuizCount.textContent = '(0 soal)';
      startQuizBtn.disabled = true;
      return;
    }

    startQuizBtn.disabled = false;
    
    // Total questions from selected chapters
    let totalAvailable = 0;
    selectedBoxes.forEach(cb => {
      totalAvailable += chapterQuestionsCount[cb.value];
    });

    const finalCount = Math.min(20, totalAvailable);
    startQuizCount.textContent = `(${finalCount} soal)`;
  }

  // Initial update
  updateStartButton();

  // Start quiz action
  startQuizBtn.addEventListener('click', () => {
    const selectedChapters = Array.from(document.querySelectorAll('.chapter-checkbox:checked'))
      .map(cb => cb.value);
    
    if (selectedChapters.length > 0) {
      // Save selected chapters to localStorage
      localStorage.setItem('tartil_selected_chapters', JSON.stringify(selectedChapters));
      window.location.href = 'quiz.html';
    }
  });
});
