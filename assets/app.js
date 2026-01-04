/* ─── BEING ZETETIC · APP (router + copy buttons) ─── */

(function () {
  // ── Copy buttons (event delegation) ──
  document.addEventListener('click', function (e) {
    const btn = e.target.closest('[data-copy]');
    if (!btn) return;
    e.preventDefault();
    const key = btn.getAttribute('data-copy');
    const text = (window.BZ_PROMPTS && window.BZ_PROMPTS[key]) || btn.getAttribute('data-copy-text') || '';
    if (!text) return;
    copyText(text).then(function () { flashCopied(btn); });
  });

  function copyText(text) {
    if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(text);
    }
    return new Promise(function (resolve) {
      const ta = document.createElement('textarea');
      ta.value = text; ta.style.position = 'fixed'; ta.style.opacity = '0';
      document.body.appendChild(ta); ta.select();
      try { document.execCommand('copy'); } catch (_) {}
      document.body.removeChild(ta);
      resolve();
    });
  }

  function flashCopied(btn) {
    const original = btn.innerHTML;
    btn.innerHTML = '<span class="copied">✓ Copied</span>';
    btn.classList.add('copied');
    setTimeout(function () {
      btn.innerHTML = original;
      btn.classList.remove('copied');
    }, 1600);
  }

  // ── Active nav link ──
  // Pick the basename of the current page; on /, default to index.html
  const here = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  document.querySelectorAll('nav.top a[data-path]').forEach(function (a) {
    if (a.getAttribute('data-path').toLowerCase() === here) a.classList.add('active');
  });
})();
