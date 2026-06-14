/* ─── BEING ZETETIC · HEAD META INJECTION ─── */
(function () {
  // Per-page overrides
  const pageMeta = {
    'index.html':         { title: 'Being Zetetic — Become the Being that inquires', desc: 'A learning protocol that forces zero-to-mastery depth. Give any AI a syllabus + one of three modes — every concept arises as a question from the previous one.' },
    'thread.html':        { title: 'Zetetic Thread — Pure thought-map flow · Being Zetetic', desc: 'Mode 01 of the Being Zetetic protocol. A thought-map where every concept arises as a question from the previous one.' },
    'sift.html':          { title: 'Zetetic Sift — MCQ-based active recall · Being Zetetic', desc: 'Mode 02 of the Being Zetetic protocol. A stream of MCQs with one-liner explanations, designed to surface what you actually own.' },
    'hybrid.html':        { title: 'Zetetic-Socratic Hybrid — Complete mastery · Being Zetetic', desc: 'Mode 03 of the Being Zetetic protocol. Build, test, build, test — for complete mastery with retention.' },
    'machine.html':       { title: 'Machine Hub — Raw prompts for AI agents · Being Zetetic', desc: 'The machine interface. Raw Zetetic Thread, Sift, and Hybrid prompts optimized for AI agents to ingest directly.' },
    'machine-thread.html':{ title: '/machine/thread — Zetetic Thread prompt · Being Zetetic', desc: 'Raw Zetetic Thread prompt. Copy, append a syllabus, execute.' },
    'machine-sift.html':  { title: '/machine/sift — Zetetic Sift prompt · Being Zetetic', desc: 'Raw Zetetic Sift prompt. Copy, append a syllabus, execute.' },
    'machine-hybrid.html':{ title: '/machine/hybrid — Hybrid prompt · Being Zetetic', desc: 'Raw Zetetic-Socratic Hybrid prompt. Copy, append a syllabus, execute.' },
    'mnemethos.html':     { title: 'Mnemethos — The philosophy behind the protocol · Being Zetetic', desc: 'The Greek root behind the name: μνήμη (memory) and the craft of making knowledge that survives you.' },
    '404.html':           { title: 'Not found · Being Zetetic', desc: 'That page was never asked, or was lost.' },
    'examples/operating-systems.html': { title: 'What is an OS? — A Being Zetetic example · Thread mode', desc: 'A complete Zetetic Thread output on operating systems. Every concept arises as a question from the previous one.' },
    'examples/javascript-closures.html': { title: 'JavaScript Closures — A Being Zetetic example · Thread mode', desc: 'A complete Zetetic Thread output on JavaScript closures, built one question at a time.' },
    'examples/blockchain-basics.html': { title: 'Blockchain Basics — A Being Zetetic example · Thread mode', desc: 'A complete Zetetic Thread output on blockchain fundamentals, built one question at a time.' },
  };

  const here = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  const m = pageMeta[here] || pageMeta['index.html'];
  const url = 'https://{{SITE_URL}}' + (here === 'index.html' ? '/' : '/' + here);
  const og  = 'https://{{SITE_URL}}/assets/og-card.png';

  function setMeta(attr, key, content) {
    let el = document.head.querySelector(`meta[${attr}="${key}"]`);
    if (!el) { el = document.createElement('meta'); el.setAttribute(attr, key); document.head.appendChild(el); }
    el.setAttribute('content', content);
  }

  document.addEventListener('DOMContentLoaded', function () {
    // Title
    if (m.title) document.title = m.title;
    // Description
    setMeta('name', 'description', m.desc);
    // Open Graph
    setMeta('property', 'og:type', 'website');
    setMeta('property', 'og:url', url);
    setMeta('property', 'og:title', m.title);
    setMeta('property', 'og:description', m.desc);
    setMeta('property', 'og:image', og);
    setMeta('property', 'og:image:width', '1200');
    setMeta('property', 'og:image:height', '630');
    setMeta('property', 'og:image:alt', 'Being Zetetic — Become the Being that inquires');
    setMeta('property', 'og:site_name', 'Being Zetetic');
    setMeta('property', 'og:locale', 'en');
    // Twitter
    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', m.title);
    setMeta('name', 'twitter:description', m.desc);
    setMeta('name', 'twitter:image', og);
    setMeta('name', 'twitter:site', '@BeingSeight');
    setMeta('name', 'twitter:creator', '@BeingSeight');
    // Theme
    setMeta('name', 'theme-color', '#07151a');
    // Canonical
    let link = document.head.querySelector('link[rel="canonical"]');
    if (!link) { link = document.createElement('link'); link.rel = 'canonical'; document.head.appendChild(link); }
    link.href = url;
  });
})();
