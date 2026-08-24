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

  /* ---------- Código de conexión ----------
     Token y gist en una línea, para enlazar otro dispositivo de una sola
     pegada en vez de volver a crear un token.

     ¡LLEVA EL TOKEN DENTRO! Es una contraseña disfrazada de código: quien lo
     tenga puede leer y escribir los gists de esa cuenta. No se codifica ni se
     cifra a propósito — ofuscarlo solo aparentaría una seguridad que no hay.

     Formato:  espanol:1:<token>:<gist>
     Ni los tokens de GitHub (ghp_… / github_pat_…) ni los id de gist llevan
     dos puntos, así que partir por ":" es seguro. */
  var CODE_TAG = "espanol";
  var CODE_V = "1";

  function exportCode() {
    var t = getToken();
    return t ? [CODE_TAG, CODE_V, t, getGistId()].join(":") : "";
  }
  function parseCode(raw) {
    var p = String(raw || "").trim().split(":");
    if (p.length < 4 || p[0] !== CODE_TAG || p[1] !== CODE_V) return null;
    var token = (p[2] || "").trim();
    if (!token) return null;
    return { token: token, gist: (p[3] || "").trim() };
  }
  // Sustituye la configuración de este dispositivo por la del código.
  function importCode(raw) {
    var c = parseCode(raw);
    if (!c) return false;
    setToken(c.token);
    if (c.gist) setGistId(c.gist);
    else { try { localStorage.removeItem(LS_GIST); } catch (e) {} }
    setState("off", "");
    return true;
  }

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
    a = a || { lessons: {}, quizzes: {}, essays: {}, corrections: {}, name: "" };
    b = b || { lessons: {}, quizzes: {}, essays: {}, corrections: {}, name: "" };
    var out = { lessons: {}, quizzes: {}, essays: {}, corrections: {}, name: a.name || b.name || "" };
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
    // Redacciones: gana la edición más reciente (documento de un solo autor).
    // A igualdad de fecha, el texto más largo, para no perder trabajo.
    var ekeys = {};
    for (k in a.essays || {}) ekeys[k] = 1;
    for (k in b.essays || {}) ekeys[k] = 1;
    for (k in ekeys) {
      var ea = (a.essays || {})[k], eb = (b.essays || {})[k];
      if (!ea) { out.essays[k] = eb; continue; }
      if (!eb) { out.essays[k] = ea; continue; }
      var ta = ea.updatedAt || 0, tb = eb.updatedAt || 0;
      var win = tb > ta ? eb : (ta > tb ? ea : ((eb.text || "").length > (ea.text || "").length ? eb : ea));
      win = { text: win.text, words: win.words, done: !!(ea.done || eb.done), updatedAt: Math.max(ta, tb) };
      out.essays[k] = win;
    }
    // Correcciones: registro que solo crece. Se unen por fecha+contenido,
    // así la profesora puede corregir en su dispositivo y el alumno las recibe
    // sin que ninguna de las dos partes pise el trabajo de la otra.
    var ckeys = {};
    for (k in a.corrections || {}) ckeys[k] = 1;
    for (k in b.corrections || {}) ckeys[k] = 1;
    for (k in ckeys) {
      var ca = (a.corrections || {})[k] || [], cb = (b.corrections || {})[k] || [];
      var seen = {}, merged = [];
      ca.concat(cb).forEach(function (c) {
        if (!c) return;
        var id = (c.at || 0) + "|" + (c.grade || "") + "|" + (c.comment || "");
        if (seen[id]) return;
        seen[id] = 1;
        merged.push(c);
      });
      merged.sort(function (x, y) { return (x.at || 0) - (y.at || 0); });
      out.corrections[k] = merged;
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
      files[GIST_FILE] = { content: JSON.stringify({ lessons: {}, quizzes: {}, essays: {}, corrections: {}, name: "" }, null, 2) };
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
    setGistId: setGistId,
    exportCode: exportCode,
    parseCode: parseCode,
    importCode: importCode,
    clearConfig: clearConfig,
    onState: onState,
    getState: function () { return state; },
    sync: sync,
    schedulePush: schedulePush,
    merge: merge
  };
})();
