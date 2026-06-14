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
    copyText(text).then(function () { flashCopied(btn); }).catch(function () { flashError(btn); });
  });

  function copyText(text) {
    if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(text);
    }
    return new Promise(function (resolve, reject) {
      const ta = document.createElement('textarea');
      ta.value = text; ta.style.position = 'fixed'; ta.style.opacity = '0';
      document.body.appendChild(ta); ta.select();
      try {
        const ok = document.execCommand('copy');
        document.body.removeChild(ta);
        ok ? resolve() : reject();
      } catch (e) {
        document.body.removeChild(ta);
        reject();
      }
    });
  }

  function flashCopied(btn) {
    // Find the first text node or the .label child to swap, or fall back to a child span
    const label = btn.querySelector('[data-label]') || btn;
    if (!btn.dataset.origLabel) btn.dataset.origLabel = label.innerHTML;
    label.innerHTML = '✓ Copied';
    btn.classList.add('is-copied');

    // Ripple
    const ripple = document.createElement('span');
    ripple.className = 'ripple';
    btn.appendChild(ripple);
    setTimeout(function () { ripple.remove(); }, 700);

    clearTimeout(btn._copiedTimer);
    btn._copiedTimer = setTimeout(function () {
      label.innerHTML = btn.dataset.origLabel;
      btn.classList.remove('is-copied');
    }, 1800);
  }

  function flashError(btn) {
    const label = btn.querySelector('[data-label]') || btn;
    if (!btn.dataset.origLabel) btn.dataset.origLabel = label.innerHTML;
    label.innerHTML = '✕ Press ⌘C';
    btn.classList.add('is-error');
    clearTimeout(btn._copiedTimer);
    btn._copiedTimer = setTimeout(function () {
      label.innerHTML = btn.dataset.origLabel;
      btn.classList.remove('is-error');
    }, 1800);
  }

  // ── Active nav link ──
  const here = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  document.querySelectorAll('nav.top a[data-path]').forEach(function (a) {
    if (a.getAttribute('data-path').toLowerCase() === here) a.classList.add('active');
  });
})();
