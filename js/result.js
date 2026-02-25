/**
 * Tartil — Result Page Logic
 * Score display, animated ring, per-question review cards, sharing
 */

(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', () => {
    // ═══ Read data from localStorage ═══
    const answersRaw = localStorage.getItem('tartil_answers');
    const questionIdsRaw = localStorage.getItem('tartil_question_ids');
    const scoreRaw = localStorage.getItem('tartil_score');
    const timeRaw = localStorage.getItem('tartil_time');
    const dateStr = localStorage.getItem('tartil_date');

    // If no data, redirect to home
    if (!answersRaw || scoreRaw === null) {
      window.location.href = 'index.html';
      return;
    }

    const userAnswers = JSON.parse(answersRaw);
    const score = parseInt(scoreRaw, 10);
    const totalSeconds = parseInt(timeRaw || '0', 10);
    const quizQuestionIds = questionIdsRaw ? JSON.parse(questionIdsRaw) : null;
    
    // Determine the set of questions to display based on what was actually in the quiz session
    let sessionQuestions = [];
    if (quizQuestionIds && quizQuestionIds.length > 0) {
      // Map stored IDs back to the actual question objects from questions.js
      sessionQuestions = quizQuestionIds.map(id => questions.find(q => q.id === id));
    } else {
      // Fallback for legacy support
      sessionQuestions = questions;
    }

    const total = sessionQuestions.length;

    // ═══ Format time ═══
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    const timeFormatted = `${minutes}:${seconds.toString().padStart(2, '0')}`;

    // ═══ Compute stats ═══
    let correctCount = 0;
    for (let i = 0; i < total; i++) {
        if (userAnswers[i] !== null && sessionQuestions[i] && userAnswers[i] === sessionQuestions[i].answer) {
            correctCount++;
        }
    }
    const wrongCount = total - correctCount;
    const percentage = total > 0 ? Math.round((correctCount / total) * 100) : 0;

    // ═══ Update Header Safely ═══
    const totalTimeEl = document.getElementById('totalTime');
    if (totalTimeEl) totalTimeEl.textContent = timeFormatted;

    const quizDateEl = document.getElementById('quizDate');
    if (quizDateEl) quizDateEl.textContent = dateStr || '-';
    
    const scoreLabel = document.querySelector('.score-label');
    if (scoreLabel) scoreLabel.textContent = `dari ${total}`;

    // ═══ Grade / Greeting Safely ═══
    const emojiEl = document.getElementById('resultEmoji');
    const greetingEl = document.getElementById('resultGreeting');
    const subtitleEl = document.getElementById('resultSubtitle');

    if (emojiEl) emojiEl.textContent = ''; // UI Cleanup (no more emojis)

    if (greetingEl) {
        if (percentage >= 90) greetingEl.textContent = 'Luar Biasa!';
        else if (percentage >= 70) greetingEl.textContent = 'Bagus Sekali!';
        else if (percentage >= 40) greetingEl.textContent = 'Cukup Baik';
        else greetingEl.textContent = 'Semangat!';
    }

    if (subtitleEl) {
        if (percentage >= 90) subtitleEl.textContent = 'Kamu Hafidz Tajwid!';
        else if (percentage >= 70) subtitleEl.textContent = 'Terus Belajar!';
        else if (percentage >= 40) subtitleEl.textContent = 'Perlu Latihan Lagi';
        else subtitleEl.textContent = 'Pelajari Kembali Materinya';
    }

    // ═══ Animated Score Ring ═══
    const ringFill = document.getElementById('scoreRingFill');
    if (ringFill) {
        const circumference = 2 * Math.PI * 65; // r=65
        ringFill.classList.remove('gold', 'green', 'red');
        if (percentage >= 90) ringFill.classList.add('gold');
        else if (percentage >= 50) ringFill.classList.add('green');
        else ringFill.classList.add('red');

        const offset = circumference - (percentage / 100) * circumference;
        ringFill.style.strokeDasharray = circumference;
        ringFill.style.strokeDashoffset = circumference;

        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                ringFill.style.strokeDashoffset = offset;
            });
        });
    }

    // ═══ Animate Numbers Safely ═══
    animateNumber(document.getElementById('scoreNum'), 0, correctCount, 1200);
    animateNumber(document.getElementById('correctCount'), 0, correctCount, 1000);
    animateNumber(document.getElementById('wrongCount'), 0, wrongCount, 1000);

    // ═══ Build Review Cards ═══
    buildReviewSection(userAnswers, sessionQuestions);

    // ═══ Retry Button ═══
    const retryBtn = document.getElementById('retryBtn');
    retryBtn.addEventListener('click', (e) => {
      e.preventDefault();
      
      const currentChapter = localStorage.getItem('tartil_chapter');
      let retryUrl = 'quiz.html';
      if (currentChapter) {
        retryUrl += `?chapter=${currentChapter}`;
      }

      // Clear quiz results but retain chapter context
      const keysToRemove = [
        'tartil_answers', 'tartil_score', 'tartil_time', 
        'tartil_date', 'tartil_answers_progress', 
        'tartil_question_ids', 'tartil_total'
      ];
      keysToRemove.forEach(k => localStorage.removeItem(k));
      
      window.location.href = retryUrl;
    });

    // ═══ Share Button ═══
    const shareBtn = document.getElementById('shareBtn');
    shareBtn.addEventListener('click', () => {
      const shareText = `Aku dapat nilai ${correctCount}/${total} di Tartil! 🌟 Cobain juga untuk asah tajwidmu!`;
      const shareUrl = window.location.origin + window.location.pathname.replace('result.html', 'index.html');

      if (navigator.share) {
        navigator.share({ title: 'Hasil Kuis Tartil', text: shareText, url: shareUrl }).catch(() => copyToClipboard(shareText + ' ' + shareUrl));
      } else {
        copyToClipboard(shareText + ' ' + shareUrl);
      }
    });
  });

  // ═══ Build Review Section ═══
  function buildReviewSection(userAnswers, sessionQuestions) {
    const reviewList = document.getElementById('reviewList');
    reviewList.innerHTML = '';

    sessionQuestions.forEach((q, i) => {
      if (!q) return; // Guard against missing question data

      const isCorrect = userAnswers[i] === q.answer;
      const card = document.createElement('div');
      card.className = `review-card ${isCorrect ? 'review-correct' : 'review-wrong'}`;
      card.style.animationDelay = `${i * 0.05}s`;

      const truncatedQ = q.question.length > 60 ? q.question.substring(0, 60) + '...' : q.question;
      const userAnswerText = (userAnswers[i] !== null && q.options[userAnswers[i]]) ? q.options[userAnswers[i]] : 'Tidak dijawab';

      let answerDetail = '';
      if (!isCorrect) {
        answerDetail = `
          <div class="review-answers">
            <div class="review-answer ${userAnswers[i] !== null ? 'wrong-answer' : ''}">
              <span class="review-answer-label">Jawabanmu:</span>
              <span class="review-answer-value">${userAnswerText}</span>
            </div>
            <div class="review-answer correct-answer">
              <span class="review-answer-label">Jawaban Benar:</span>
              <span class="review-answer-value">${q.options[q.answer]}</span>
            </div>
          </div>
        `;
      }

      card.innerHTML = `
        <div class="review-card-header">
          <div class="review-num">${i + 1}</div>
          <div class="review-question">${truncatedQ}</div>
          <div class="review-status">${isCorrect ? 'Benar' : 'Salah'}</div>
        </div>
        ${answerDetail}
        <a href="explanation.html?chapter=${q.category}&id=${q.id}" class="review-explain-btn">
          Lihat Penjelasan
        </a>
      `;

      reviewList.appendChild(card);
    });
  }

  // ═══ Animate Number ═══
  function animateNumber(el, start, end, duration) {
    if (!el) return;
    if (end === 0) {
      el.textContent = '0';
      return;
    }
    const startTime = performance.now();
    function update(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(start + (end - start) * eased);
      if (progress < 1) requestAnimationFrame(update);
    }
    requestAnimationFrame(update);
  }

  // ═══ Copy to Clipboard ═══
  function copyToClipboard(text) {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text).then(() => alert('Hasil disalin! 📋')).catch(() => fallbackCopy(text));
    } else {
      fallbackCopy(text);
    }
  }

  function fallbackCopy(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    try {
      document.execCommand('copy');
      alert('Hasil disalin! 📋');
    } catch (e) {
      alert('Gagal menyalin.');
    }
    document.body.removeChild(textarea);
  }
})();
