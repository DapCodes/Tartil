/**
 * Tartil — History Page Logic
 * Display quiz history with filter options (newest, best score)
 */

(function () {
  'use strict';

  const historyContent = document.getElementById('historyContent');
  const filterBtns = document.querySelectorAll('.history-filter-btn');
  let currentFilter = 'terbaru';

  function init() {
    // Bind filter buttons
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentFilter = btn.getAttribute('data-filter');
        renderHistory();
      });
    });

    renderHistory();
  }

  function getHistory() {
    try {
      return JSON.parse(localStorage.getItem('tartil_history') || '[]');
    } catch (e) {
      return [];
    }
  }

  function renderHistory() {
    let history = getHistory();

    if (history.length === 0) {
      historyContent.innerHTML = `
        <div class="history-empty">
          <div class="history-empty-icon">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
              <polyline points="14 2 14 8 20 8"/>
              <line x1="16" y1="13" x2="8" y2="13"/>
              <line x1="16" y1="17" x2="8" y2="17"/>
              <polyline points="10 9 9 9 8 9"/>
            </svg>
          </div>
          <h3>Belum Ada Riwayat</h3>
          <p>Kamu belum pernah mengerjakan kuis. Mulai belajar dan uji pemahamanmu sekarang!</p>
          <a href="select-materi.html" class="btn btn-primary" style="margin-top: 1rem;">Mulai Kuis</a>
        </div>
      `;
      return;
    }

    // Sort based on filter
    if (currentFilter === 'terbaru') {
      history.sort((a, b) => (b.timestamp || 0) - (a.timestamp || 0));
    } else if (currentFilter === 'terbaik') {
      history.sort((a, b) => (b.percentage || 0) - (a.percentage || 0));
    }

    // Update breadcrumb with count
    const breadcrumb = document.getElementById('breadcrumb');
    if (breadcrumb) {
      breadcrumb.textContent = `${history.length} hasil kuis tersimpan`;
    }

    let cardsHtml = history.map((entry, i) => {
      const percentage = entry.percentage || Math.round((entry.score / entry.total) * 100);
      const minutes = Math.floor((entry.time || 0) / 60);
      const seconds = (entry.time || 0) % 60;
      const timeStr = `${minutes}:${seconds.toString().padStart(2, '0')}`;

      // Grade color
      let gradeClass = 'history-grade-red';
      let gradeLabel = 'Perlu Belajar';
      if (percentage >= 90) { gradeClass = 'history-grade-gold'; gradeLabel = 'Luar Biasa!'; }
      else if (percentage >= 70) { gradeClass = 'history-grade-green'; gradeLabel = 'Bagus!'; }
      else if (percentage >= 40) { gradeClass = 'history-grade-yellow'; gradeLabel = 'Cukup'; }

      return `
        <div class="history-card" style="animation-delay: ${i * 0.06}s">
          <div class="history-card-top">
            <div class="history-card-score ${gradeClass}">
              <span class="history-score-num">${entry.score}</span>
              <span class="history-score-divider">/</span>
              <span class="history-score-total">${entry.total}</span>
            </div>
            <div class="history-card-badge ${gradeClass}">
              ${gradeLabel}
            </div>
          </div>

          <div class="history-card-percentage">
            <div class="history-percentage-bar">
              <div class="history-percentage-fill ${gradeClass}" style="width: ${percentage}%"></div>
            </div>
            <span class="history-percentage-text">${percentage}%</span>
          </div>

          <div class="history-card-details">
            <div class="history-detail">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/>
              </svg>
              <span>${entry.chapters || 'Semua Bab'}</span>
            </div>
            <div class="history-detail">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
              </svg>
              <span>${timeStr}</span>
            </div>
            <div class="history-detail">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
              <span>${entry.date || '-'}</span>
            </div>
          </div>
        </div>
      `;
    }).join('');

    // Clear history button
    cardsHtml += `
      <div class="history-clear-section">
        <button class="btn btn-ghost history-clear-btn" id="clearHistoryBtn">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"/>
          </svg>
          Hapus Semua Riwayat
        </button>
      </div>
    `;

    historyContent.innerHTML = cardsHtml;

    // Bind clear button
    const clearBtn = document.getElementById('clearHistoryBtn');
    if (clearBtn) {
      clearBtn.addEventListener('click', () => {
        if (confirm('Hapus semua riwayat test? Tindakan ini tidak bisa dibatalkan.')) {
          localStorage.removeItem('tartil_history');
          renderHistory();
        }
      });
    }
  }

  document.addEventListener('DOMContentLoaded', init);
})();
