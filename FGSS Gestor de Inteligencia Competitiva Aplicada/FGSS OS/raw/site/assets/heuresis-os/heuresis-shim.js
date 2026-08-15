// heuresis-shim.js — serve the baked fixtures.json in place of the live /api.
(function () {
  var realFetch = window.fetch.bind(window);
  var fixturesP = realFetch('fixtures.json', { cache: 'no-store' })
    .then(function (r) { return r.ok ? r.json() : {}; })
    .catch(function () { return {}; });
  function json(data) {
    return new Response(JSON.stringify(data), { status: 200, headers: { 'Content-Type': 'application/json' } });
  }
  window.fetch = function (input, init) {
    var url = typeof input === 'string' ? input : (input && input.url) || String(input);
    var i = url.indexOf('/api/');
    if (i === -1) return realFetch(input, init); // real asset (fixtures.json, css…)
    var method = ((init && init.method) || (typeof input === 'object' && input && input.method) || 'GET').toUpperCase();
    var full = url.slice(i);
    var pathname = full.split('?')[0];
    return fixturesP.then(function (fx) {
      if (method !== 'GET') return json({ ok: true }); // mutations no-op in the snapshot
      if (Object.prototype.hasOwnProperty.call(fx, full)) return json(fx[full]);
      for (var k in fx) if (k.split('?')[0] === pathname) return json(fx[k]);
      return json([]); // safe universal fallback (array property access returns undefined, never throws)
    });
  };
})();
