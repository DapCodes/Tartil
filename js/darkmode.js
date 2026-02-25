/**
 * Tartil — Dark Mode Module
 * Saves preference to localStorage key "tartil_theme"
 */

(function () {
  'use strict';

  const STORAGE_KEY = 'tartil_theme';

  function applyTheme(theme) {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    updateToggleIcons(theme);
  }

  function updateToggleIcons(theme) {
    document.querySelectorAll('.dark-mode-toggle').forEach(toggle => {
      const moon = toggle.querySelector('.icon-moon');
      const sun = toggle.querySelector('.icon-sun');
      if (moon && sun) {
        if (theme === 'dark') {
          moon.style.display = 'none';
          sun.style.display = 'block';
        } else {
          moon.style.display = 'block';
          sun.style.display = 'none';
        }
      }
    });
  }

  function getPreference() {
    return localStorage.getItem(STORAGE_KEY) || 'light';
  }

  function toggleTheme() {
    const current = getPreference();
    const next = current === 'dark' ? 'light' : 'dark';
    localStorage.setItem(STORAGE_KEY, next);
    applyTheme(next);
  }

  // Apply saved theme immediately
  applyTheme(getPreference());

  // Bind toggle buttons
  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.dark-mode-toggle').forEach(btn => {
      btn.addEventListener('click', toggleTheme);
    });
    // Re-apply in case DOM was ready
    updateToggleIcons(getPreference());
  });
})();
