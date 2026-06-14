/* ─── BEING ZETETIC · LOCAL-FIRST ANALYTICS ───
 * No third-party trackers. All data stays in this browser's localStorage.
 * Useful for the maker to see which prompts get copied, which pages get visited.
 * On request, can be wired to a self-hosted endpoint (Plausible, Umami, or a
 * simple /collect POST).
 */
(function () {
  var STORAGE_KEY = 'bz_analytics_v1';
  var ENABLED = true; // flip to false to disable globally

  function load() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{"events":[],"views":{},"copies":{}}');
    } catch (e) {
      return { events: [], views: {}, copies: {} };
    }
  }
  function save(d) { try { localStorage.setItem(STORAGE_KEY, JSON.stringify(d)); } catch (e) {} }

  function track(type, data) {
    if (!ENABLED) return;
    var d = load();
    var ev = { type: type, ts: new Date().toISOString(), path: location.pathname, ref: document.referrer || null };
    if (data) for (var k in data) ev[k] = data[k];
    d.events.push(ev);
    if (d.events.length > 500) d.events = d.events.slice(-500);
    if (type === 'pageview') {
      var key = location.pathname;
      d.views[key] = (d.views[key] || 0) + 1;
    } else if (type === 'copy') {
      var k2 = data.key || 'unknown';
      d.copies[k2] = (d.copies[k2] || 0) + 1;
    }
    save(d);
  }

  // Page view
  track('pageview');

  // Copy events (re-uses [data-copy] delegation)
  document.addEventListener('click', function (e) {
    var btn = e.target.closest('[data-copy]');
    if (!btn) return;
    track('copy', { key: btn.getAttribute('data-copy') });
  });

  // Outbound link clicks
  document.addEventListener('click', function (e) {
    var a = e.target.closest('a[href^="http"]');
    if (!a) return;
    track('outbound', { url: a.href });
  });

  // Expose a tiny API for the maker to inspect
  window.BZ_ANALYTICS = {
    get: load,
    dump: function () {
      var d = load();
      var blob = new Blob([JSON.stringify(d, null, 2)], { type: 'application/json' });
      var url = URL.createObjectURL(blob);
      var a = document.createElement('a');
      a.href = url; a.download = 'being-zetetic-analytics.json';
      a.click();
      setTimeout(function () { URL.revokeObjectURL(url); }, 1000);
    },
    summary: function () {
      var d = load();
      console.log('[BZ Analytics]', {
        totalEvents: d.events.length,
        pageviews: d.views,
        copies: d.copies,
      });
    },
    reset: function () { localStorage.removeItem(STORAGE_KEY); },
  };
})();
