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
     UN solo código, para que copiar y pegar funcione siempre: en un aparato
     recién estrenado y en uno que ya estaba conectado. Antes había dos —uno con
     el token y otro sin él— y había que acertar cuál copiar; el de solo-gist
     fallaba justo donde más falta hacía, porque el gist es secreto y sin token
     no se puede abrir.

       espanol:<gist>:<token>

     El gist va PRIMERO a propósito: es la parte pública (un id sin token no
     abre nada), así que la pantalla puede enseñarla entera y tapar solo la
     cola. Ajustes muestra el token con puntos y lo destapa con «ver».

     ¡LLEVA EL TOKEN DENTRO! Es una contraseña disfrazada de código: quien lo
     tenga puede leer y escribir los gists de esa cuenta. No se codifica ni se
     cifra a propósito — ofuscarlo solo aparentaría una seguridad que no hay.

     Se siguen aceptando los dos formatos viejos, por si alguno quedó copiado
     en una nota:

       espanol:1:<token>:<gist>
       espanol:g1:<gist>

     Ni los tokens de GitHub (ghp_… / github_pat_…) ni los id de gist llevan
     dos puntos, así que partir por ":" es seguro. */
  var CODE_TAG = "espanol";
  var CODE_V_OLD = "1";
  var CODE_V_GIST = "g1";

  // Devuelve también el corte donde acaba la parte pública, para que Ajustes
  // sepa qué enseñar y qué tapar sin volver a partir la cadena.
  function exportCode() {
    var t = getToken();
    if (!t) return "";
    return [CODE_TAG, getGistId(), t].join(":");
  }
  function exportPublicPart() {
    return getToken() ? [CODE_TAG, getGistId(), ""].join(":") : "";
  }

  // Devuelve { kind: "full", token, gist } o { kind: "gist", gist }.
  function parseCode(raw) {
    var p = String(raw || "").trim().split(":");
    if (p[0] !== CODE_TAG) return null;
    if (p[1] === CODE_V_GIST) {
      var gist = (p[2] || "").trim();
      return gist ? { kind: "gist", gist: gist } : null;
    }
    if (p[1] === CODE_V_OLD) {
      if (p.length < 4) return null;
      var old = (p[2] || "").trim();
      return old ? { kind: "full", token: old, gist: (p[3] || "").trim() } : null;
    }
    if (p.length < 3) return null;
    var token = (p[2] || "").trim();
    if (!token) return null;
    return { kind: "full", token: token, gist: (p[1] || "").trim() };
  }

  // Un token pegado a pelo vale igual que un código: es lo que hace falta la
  // primera vez, y así el campo de Ajustes es uno solo.
  function looksLikeToken(raw) {
    var s = String(raw || "").trim();
    return /^(ghp_|gho_|ghu_|ghs_|github_pat_)[A-Za-z0-9_]+$/.test(s);
  }

  // Aplica el código a este dispositivo. El de solo-gist (formato viejo)
  // necesita que ya haya un token aquí: sin él no hay con qué abrirlo.
  function importCode(raw) {
    if (looksLikeToken(raw)) {
      setToken(String(raw).trim());
      setState("off", "");
      return true;
    }
    var c = parseCode(raw);
    if (!c) return false;
    if (c.kind === "gist") {
      if (!getToken()) return false;
      setGistId(c.gist);
      setState("off", "");
      return true;
    }
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
  /* Cuaderno del módulo 9 (respuestas del alumno).
     Se fusiona respuesta a respuesta: una que solo existe en un lado se
     conserva siempre, así que contestar en el iPad y en el Mac no borra nada.
     Cuando las dos tienen algo distinto para el mismo hueco gana la copia con
     `cuadernoAt` más reciente, que es lo más parecido a "lo último que
     escribiste" sin ponerle fecha a cada casilla. */
  function mergeCuaderno(a, b) {
    var ca = a.cuaderno, cb = b.cuaderno;
    if (!ca && !cb) return null;
    if (!ca) return cb;
    if (!cb) return ca;
    var bNewer = (b.cuadernoAt || 0) > (a.cuadernoAt || 0);
    var filled = function (v) { return v !== undefined && v !== null && v !== ""; };
    var pick = function (va, vb) {
      if (!filled(va)) return vb;
      if (!filled(vb)) return va;
      return bNewer ? vb : va;
    };
    var out = { R: {}, W: {}, CH: {} }, k, i, ids = {};

    for (k in ca.R || {}) ids[k] = 1;
    for (k in cb.R || {}) ids[k] = 1;
    for (k in ids) {
      var ra = (ca.R || {})[k] || {}, rb = (cb.R || {})[k] || {}, items = {};
      for (i in ra) items[i] = 1;
      for (i in rb) items[i] = 1;
      out.R[k] = {};
      for (i in items) {
        var v = pick(ra[i], rb[i]);
        if (filled(v)) out.R[k][i] = v;
      }
    }
    // Las casillas de repaso son booleanas: marcada gana a sin marcar.
    for (k in ca.CH || {}) if ((ca.CH || {})[k]) out.CH[k] = true;
    for (k in cb.CH || {}) if ((cb.CH || {})[k]) out.CH[k] = true;
    return out;
  }

  function merge(a, b) {
    a = a || { lessons: {}, quizzes: {}, essays: {}, corrections: {}, name: "" };
    b = b || { lessons: {}, quizzes: {}, essays: {}, corrections: {}, name: "" };
    var out = { lessons: {}, quizzes: {}, essays: {}, corrections: {},
                cuaderno: mergeCuaderno(a, b), cuadernoAt: Math.max(a.cuadernoAt || 0, b.cuadernoAt || 0),
                name: a.name || b.name || "" };
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
    exportPublicPart: exportPublicPart,
    looksLikeToken: looksLikeToken,
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
