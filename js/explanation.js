/**
 * Tartil — Explanation Page Logic (Chapter-Based)
 * Displays tajweed material organized by chapters with CTA to quiz
 */

(function () {
  'use strict';

  let currentChapterIndex = 0;

  const topicNavContainer = document.getElementById('topicNavContainer');
  const explanationContent = document.getElementById('explanationContent');
  const breadcrumb = document.getElementById('breadcrumb');

  /**
   * Initialize the page
   */
  function init() {
    // Get chapter from URL parameter
    const urlParams = new URLSearchParams(window.location.search);
    const chapterParam = urlParams.get('chapter');

    if (chapterParam) {
      const idx = chapters.findIndex(c => c.id === chapterParam);
      if (idx >= 0) currentChapterIndex = idx;
    }

    // Also support old ?id= parameter — map question id to its chapter
    const idParam = urlParams.get('id');
    if (idParam && !chapterParam) {
      const qId = parseInt(idParam, 10);
      const q = questions.find(item => item.id === qId);
      if (q) {
        const idx = chapters.findIndex(c => c.id === q.category);
        if (idx >= 0) currentChapterIndex = idx;
      }
    }

    buildNavigation();
    showChapter(currentChapterIndex);
  }

  /**
   * Build the horizontal chapter navigation
   */
  function buildNavigation() {
    topicNavContainer.innerHTML = '';

    chapters.forEach((ch, index) => {
      const btn = document.createElement('button');
      btn.className = 'exp-nav-btn';
      btn.textContent = ch.title;
      btn.setAttribute('data-index', index);
      btn.addEventListener('click', () => {
        navigateToChapter(index);
      });
      topicNavContainer.appendChild(btn);
    });
  }

  /**
   * Navigate to a specific chapter
   */
  function navigateToChapter(index) {
    showChapter(index);
    history.replaceState(null, '', `?chapter=${chapters[index].id}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  /**
   * Show a specific chapter
   */
  function showChapter(index) {
    currentChapterIndex = index;
    const chapter = chapters[index];
    if (!chapter) return;

    // Update breadcrumb
    breadcrumb.textContent = `Bab ${index + 1} dari ${chapters.length}`;

    // Update active nav button
    const navBtns = topicNavContainer.querySelectorAll('.exp-nav-btn');
    navBtns.forEach(btn => {
      btn.classList.toggle('active', parseInt(btn.getAttribute('data-index'), 10) === index);
    });

    // Scroll active nav button into view
    const activeBtn = topicNavContainer.querySelector('.exp-nav-btn.active');
    if (activeBtn) {
      activeBtn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }

    // Get questions for this chapter
    const chapterQuestions = questions.filter(q => q.category === chapter.id);
    const questionCount = chapterQuestions.length;

    // Build materi list HTML
    let materiHtml = '';
    if (chapter.materi && chapter.materi.length > 0) {
      materiHtml = `
        <div class="exp-materi-list">
          ${chapter.materi.map((item, i) => `
            <div class="exp-materi-item" style="animation-delay: ${i * 0.08}s">
              <div class="exp-materi-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="M22 4L12 14.01l-3-3"/>
                </svg>
              </div>
              <div class="exp-materi-text">${formatMateri(item)}</div>
            </div>
          `).join('')}
        </div>
      `;
    }

    // Build example cards HTML
    let examplesHtml = '';
    if (chapter.examples && chapter.examples.length > 0) {
      examplesHtml = `
        <div class="exp-section">
          <div class="exp-section-label">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/>
            </svg>
            Contoh & Penjelasan Lengkap
          </div>
          <div class="exp-examples-grid">
            ${chapter.examples.map(ex => `
              <div class="exp-example-card">
                <div class="exp-example-arabic" dir="rtl">${buildHighlightedArabic(ex.arabic, ex.highlight)}</div>
                <div class="exp-example-title">${ex.title}</div>
                <div class="exp-example-desc">${ex.explanation}</div>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    }

    // Navigation buttons
    const prevDisabled = index <= 0 ? 'disabled' : '';
    const nextDisabled = index >= chapters.length - 1 ? 'disabled' : '';

    // Build content
    explanationContent.innerHTML = `
      <div class="exp-card">
        <!-- Chapter Badge -->


        <!-- Title -->
        <h2 class="exp-rule-name">${chapter.title}</h2>

        <!-- Gold divider -->
        <div class="exp-gold-divider"></div>

        <!-- Description -->
        <div class="exp-section">
          <div class="exp-section-label">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/>
            </svg>
            Pendahuluan
          </div>
          <div class="exp-description">${chapter.longDescription || chapter.description}</div>
        </div>

        <!-- Materi Points -->
        <div class="exp-section">
          <div class="exp-section-label">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"/><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"/>
            </svg>
            Ringkasan Aturan
          </div>
          ${materiHtml}
        </div>

        <!-- Examples Section -->
        ${examplesHtml}

        <!-- Info Box -->
        <div class="exp-definition-box">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/>
          </svg>
          <span>Bab ini memiliki <strong>${questionCount} soal</strong> yang siap diuji. Pelajari materinya, lalu uji pemahamanmu!</span>
        </div>

        <!-- CTA: Learn This Chapter -->
        <div class="exp-cta-section">
          <a href="quiz.html?chapter=${chapter.id}" class="btn btn-accent btn-block exp-cta-btn" id="startQuizBtn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/>
            </svg>
            Pelajari Bab Ini Sekarang — Mulai Kuis!
          </a>
          <p class="exp-cta-subtitle">${questionCount} soal acak • Pilihan jawaban diacak setiap sesi</p>
        </div>

        <!-- Navigation Between Chapters -->
        <div class="exp-bottom-nav">
          <div class="exp-prev-next">
            <button class="btn btn-outline exp-nav-arrow" id="prevChapterBtn" ${prevDisabled}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5"/><path d="M12 19l-7-7 7-7"/></svg>
              Sebelumnya
            </button>
            <button class="btn btn-primary exp-nav-arrow" id="nextChapterBtn" ${nextDisabled}>
              Berikutnya
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg>
            </button>
          </div>
          <a href="select-materi.html" class="btn btn-secondary btn-block exp-retry-btn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/>
            </svg>
            Kuis Semua Bab
          </a>
        </div>
      </div>
    `;

    // Bind prev/next buttons
    const prevBtn = document.getElementById('prevChapterBtn');
    const nextBtn = document.getElementById('nextChapterBtn');

    if (prevBtn && !prevBtn.disabled) {
      prevBtn.addEventListener('click', () => {
        navigateToChapter(index - 1);
      });
    }

    if (nextBtn && !nextBtn.disabled) {
      nextBtn.addEventListener('click', () => {
        navigateToChapter(index + 1);
      });
    }
  }

  /**
   * Format materi text — convert **bold** markers to <strong>
   */
  function formatMateri(text) {
    return text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  }

  /**
   * Build Arabic text with highlighted portion
   */
  function buildHighlightedArabic(example, highlight) {
    if (!highlight || !example || !example.includes(highlight)) {
      return example || '';
    }
    const parts = example.split(highlight);
    return parts.join(`<span class="tajwid-highlight">${highlight}</span>`);
  }

  // Init on DOM ready
  document.addEventListener('DOMContentLoaded', init);
})();
