/* ============================================================
   Sincronización opcional entre dispositivos vía GitHub Gist.
   Sin servidores ni cuentas nuevas: el progreso (el mismo blob
   de localStorage) se guarda en un gist SECRETO del usuario.

   Fusión "grow-only": las lecciones completadas se unen y de cada
   evaluación se conserva la mejor nota. Así dos dispositivos avanzan
   por separado y se reconcilian sin perder progreso ni necesitar
   marcas de tiempo. El token vive solo en este dispositivo y solo
   se envía a api.github.com.
   ============================================================ */
(function () {
  "use strict";

  var API = "https://api.github.com";
  var GIST_FILE = "espanol-brasilenos-progress.json";
  var GIST_DESC = "Español para brasileños — progreso del curso (sincronización)";
  var LS_TOKEN = "espanol-sync-token";
  var LS_GIST = "espanol-sync-gist";

  var listeners = [];
  var pushTimer = null;
  var state = { status: "off", detail: "", busy: false };
  var pending = null;

  function lsGet(k) { try { return localStorage.getItem(k) || ""; } catch (e) { return ""; } }
  function getToken() { return lsGet(LS_TOKEN); }
  function getGistId() { return lsGet(LS_GIST); }
  function setToken(t) { localStorage.setItem(LS_TOKEN, t); }
  function setGistId(g) { localStorage.setItem(LS_GIST, g); }
  function clearConfig() {
    localStorage.removeItem(LS_TOKEN);
    localStorage.removeItem(LS_GIST);
    setState("off", "");
  }
  function isConfigured() { return !!getToken(); }

  function setState(status, detail) {
    state.status = status;
    state.detail = detail || "";
    state.busy = (status === "syncing");
    listeners.forEach(function (fn) { try { fn(state); } catch (e) {} });
  }
  function onState(fn) { listeners.push(fn); fn(state); }

  function timeNow() {
    return new Date().toLocaleTimeString("es-ES", { hour: "2-digit", minute: "2-digit" });
  }

  function api(method, path, token, body) {
    return fetch(API + path, {
      method: method,
      headers: {
        "Authorization": "Bearer " + token,
        "Accept": "application/vnd.github+json",
        "Content-Type": "application/json"
      },
      body: body ? JSON.stringify(body) : undefined
    }).then(function (r) {
      if (!r.ok) {
        var msg = r.status === 401 ? "Token inválido o sin permiso «gist»"
          : r.status === 403 ? "Límite de la API de GitHub alcanzado; prueba en un rato"
          : r.status === 404 ? "Gist no encontrado"
          : "Error de GitHub (HTTP " + r.status + ")";
        throw new Error(msg);
      }
      return r.status === 204 ? null : r.json();
    });
  }

  /* ---- Fusión grow-only ---- */
  function merge(a, b) {
    a = a || { lessons: {}, quizzes: {}, name: "" };
    b = b || { lessons: {}, quizzes: {}, name: "" };
    var out = { lessons: {}, quizzes: {}, name: a.name || b.name || "" };
    var k;
    for (k in a.lessons) if (a.lessons[k]) out.lessons[k] = true;
    for (k in b.lessons) if (b.lessons[k]) out.lessons[k] = true;
    var keys = {};
    for (k in a.quizzes || {}) keys[k] = 1;
    for (k in b.quizzes || {}) keys[k] = 1;
    for (k in keys) {
      var qa = (a.quizzes || {})[k], qb = (b.quizzes || {})[k];
      var best = !qa ? qb : !qb ? qa : (qb.pct > qa.pct ? qb : qa);
      best = { score: best.score, total: best.total, pct: best.pct, passed: !!best.passed };
      best.passed = (qa && qa.passed) || (qb && qb.passed) || false;
      out.quizzes[k] = best;
    }
    return out;
  }

  /* ---- Gist: descubrir o crear ---- */
  function ensureGist(token) {
    var cached = getGistId();
    if (cached) return Promise.resolve(cached);
    return api("GET", "/gists?per_page=100", token).then(function (list) {
      var found = (list || []).filter(function (g) {
        return g.files && g.files[GIST_FILE];
      })[0];
      if (found) { setGistId(found.id); return found.id; }
      var files = {};
      files[GIST_FILE] = { content: JSON.stringify({ lessons: {}, quizzes: {}, name: "" }, null, 2) };
      return api("POST", "/gists", token, { description: GIST_DESC, "public": false, files: files })
        .then(function (g) { setGistId(g.id); return g.id; });
    });
  }

  function pullRemote(token, gistId) {
    return api("GET", "/gists/" + gistId, token).then(function (g) {
      var f = g.files && g.files[GIST_FILE];
      if (!f) return null;
      if (f.truncated && f.raw_url) {
        return fetch(f.raw_url).then(function (r) { return r.json(); }).catch(function () { return null; });
      }
      try { return JSON.parse(f.content); } catch (e) { return null; }
    });
  }

  function pushRemote(token, gistId, progress) {
    var files = {};
    files[GIST_FILE] = { content: JSON.stringify(progress, null, 2) };
    return api("PATCH", "/gists/" + gistId, token, { files: files });
  }

  /* ---- Ciclo completo: pull → merge → apply → push ---- */
  function sync(getLocal, apply) {
    var token = getToken();
    if (!token) return Promise.resolve();
    setState("syncing", "Sincronizando…");
    return ensureGist(token).then(function (gistId) {
      return pullRemote(token, gistId).then(function (remote) {
        var merged = merge(getLocal(), remote);
        apply(merged);
        return pushRemote(token, gistId, merged);
      });
    }).then(function () {
      setState("ok", "Sincronizado a las " + timeNow());
    }).catch(function (err) {
      setState("error", err && err.message ? err.message : "Error de sincronización");
    });
  }

  /* ---- Empuje tras un cambio local (con rebote) ---- */
  function schedulePush(getLocal, apply) {
    if (!getToken()) return;
    pending = { getLocal: getLocal, apply: apply };
    if (pushTimer) clearTimeout(pushTimer);
    pushTimer = setTimeout(function () {
      pushTimer = null;
      var p = pending; pending = null;
      if (p) sync(p.getLocal, p.apply);
    }, 1500);
  }

  window.Sync = {
    isConfigured: isConfigured,
    getToken: getToken,
    getGistId: getGistId,
    setToken: setToken,
    clearConfig: clearConfig,
    onState: onState,
    getState: function () { return state; },
    sync: sync,
    schedulePush: schedulePush,
    merge: merge
  };
})();
