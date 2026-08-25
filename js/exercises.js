/* ============================================================
   Cuaderno de trabajo (módulo 9) — puerto fiel del material
   original de la profesora. Replica sus cuatro tipos de
   ejercicio y su taller.
   Ningún texto de esta pantalla se escribe aquí: todo viene
   del contenido del módulo.
   ============================================================ */
(function () {
  "use strict";

  var KEY = "espanol-cuaderno-v1";

  /* ---------- Dónde viven las respuestas ----------
     Por defecto, en su propia clave de localStorage. Pero así se quedaban
     ENCERRADAS en el dispositivo: no entraban en el progreso, así que no
     viajaban por el gist y la profesora no las veía nunca.
     `useStore` deja que app.js las guarde dentro del progreso, que sí se
     sincroniza. La clave vieja se conserva para poder migrarla. */
  function blank() { return { R: {}, W: {}, CH: {} }; }
  function shape(p) {
    p = p || {};
    return { R: p.R || {}, W: p.W || {}, CH: p.CH || {} };
  }
  var store = {
    load: function () {
      try { return shape(JSON.parse(localStorage.getItem(KEY))); } catch (e) { return blank(); }
    },
    save: function (s) {
      try { localStorage.setItem(KEY, JSON.stringify(s)); } catch (e) {}
    }
  };
  function useStore(s) {
    store = { load: function () { return shape(s.load()); }, save: s.save };
    st = store.load();
  }
  // Lo que hay en la clave vieja, para migrarlo una sola vez.
  function localState() {
    try {
      var raw = localStorage.getItem(KEY);
      return raw ? shape(JSON.parse(raw)) : null;
    } catch (e) { return null; }
  }
  function persist() { store.save(st); }
  var st = store.load();

  // Solo lectura: la profesora mira, no escribe.
  var readOnly = false;
  function setReadOnly(v) { readOnly = !!v; }
  function rbox(id) { return (st.R[id] = st.R[id] || {}); }

  // Normalización idéntica a la del cuaderno original
  function norm(s) {
    return (s || "").toLowerCase().trim().replace(/\s+/g, " ").replace(/[.,;:!¡¿?"']/g, "");
  }
  function strip(s) {
    return norm(s).normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }
  function words(s) {
    return (s || "").trim().split(/\s+/).filter(Boolean).length;
  }

  /* ---------------- Ejercicios ---------------- */
  function exHTML(x) {
    var h = '<div class="ex-box" data-ex="' + x.id + '">';
    h += '<h4>' + x.t + '</h4>';
    h += '<p class="ex-intro">' + x.intro + '</p>';
    if (x.regla) h += '<div class="ex-regla">' + x.regla + '</div>';
    if (x.banco) {
      h += '<div class="ex-banco">' + x.banco.map(function (b) {
        return '<span>' + b + '</span>';
      }).join('') + '</div>';
    }
    h += '<ol class="ex-items">';
    x.items.forEach(function (it, i) {
      if (x.tipo === "gap") {
        var parts = it.q.split("___");
        h += '<li>' + parts[0] +
          '<input class="gap" data-i="' + i + '" autocomplete="off" spellcheck="false" aria-label="respuesta ' + (i + 1) + '">' +
          (parts[1] || '') + '<span class="sol" data-sol="' + i + '"></span></li>';
      } else if (x.tipo === "opcion") {
        h += '<li>' + (it.q || '') + '<div class="opts">' + it.o.map(function (o, j) {
          return '<button type="button" class="opt-btn" data-i="' + i + '" data-j="' + j + '">' + o + '</button>';
        }).join('') + '</div></li>';
      } else if (x.tipo === "modelo") {
        h += '<li><div class="prompt-line">' + it.q + '</div>' +
          '<textarea class="mini" data-i="' + i + '" rows="2"></textarea>' +
          '<div class="modelo" data-m="' + i + '"><span class="k">Una versión posible</span>' + it.m + '</div></li>';
      } else if (x.tipo === "check") {
        h += '<li class="check-li"><label><input type="checkbox" data-i="' + i + '"><span>' + it + '</span></label></li>';
      }
    });
    h += '</ol>';
    if (x.tipo === "gap" || x.tipo === "opcion") {
      h += '<div class="ex-btns"><button type="button" class="btn" data-act="check">Comprobar</button>' +
           '<button type="button" class="btn ghost" data-act="clear">Borrar</button>' +
           '<span class="ex-score"></span></div>';
    }
    if (x.tipo === "modelo") {
      h += '<div class="ex-btns"><button type="button" class="btn ghost" data-act="models">Ver las versiones modelo</button></div>';
    }
    return h + '</div>';
  }

  /* ---------------- Taller ---------------- */
  function tallerHTML(t) {
    return '<div class="taller">' +
      '<div class="th"><span class="k">' + t.k + '</span><h3>' + t.title + '</h3>' +
      '<p>' + t.text + '</p></div>' +
      '<div class="tbar"><i id="barfill"></i></div>' +
      '<div class="slots" id="slots">' + t.piezas.map(function (p) {
        return '<div class="slot" data-p="' + p.id + '">' +
          '<span class="n">' + p.n + '</span>' +
          '<span class="nm">' + p.t + '<small>Sesión ' + p.s + '</small></span>' +
          '<span class="stt">pendiente</span></div>';
      }).join('') +
      '<div class="ex-btns"><button type="button" class="btn" id="btnEns">' + t.btn + '</button>' +
      '<span class="ex-score" id="totw"></span></div>' +
      '</div><div id="ensamblado"></div></div>';
  }

  /* ---------------- Restaurar / comprobar ---------------- */
  function restore(root, x) {
    var box = rbox(x.id);
    var el = root.querySelector('[data-ex="' + x.id + '"]');
    if (!el) return;
    if (x.tipo === "gap") {
      el.querySelectorAll('input.gap').forEach(function (inp) {
        var v = box[inp.dataset.i];
        if (typeof v === "string" && inp !== document.activeElement) inp.value = v;
      });
    } else if (x.tipo === "opcion") {
      el.querySelectorAll('.opt-btn').forEach(function (b) {
        if (box[b.dataset.i] === +b.dataset.j) b.dataset.s = 'sel';
      });
    } else if (x.tipo === "modelo") {
      el.querySelectorAll('textarea.mini').forEach(function (t) {
        var v = box[t.dataset.i];
        if (typeof v === "string" && t !== document.activeElement) t.value = v;
      });
    } else if (x.tipo === "check") {
      el.querySelectorAll('input[type="checkbox"]').forEach(function (c) {
        c.checked = !!st.CH[x.id + ':' + c.dataset.i];
      });
    }
  }

  function check(el, x) {
    var box = rbox(x.id), ok = 0, tot = x.items.length;
    if (x.tipo === "gap") {
      el.querySelectorAll('input.gap').forEach(function (inp) {
        var i = +inp.dataset.i,
            sol = el.querySelector('[data-sol="' + i + '"]'),
            acc = x.items[i].a,
            v = inp.value;
        box[i] = v;
        if (!v.trim()) {
          inp.className = 'gap'; sol.className = 'sol err'; sol.textContent = '→ ' + acc[0]; return;
        }
        if (acc.some(function (a) { return norm(a) === norm(v); })) {
          inp.className = 'gap ok'; sol.className = 'sol ok'; sol.textContent = '✓'; ok++;
        } else if (acc.some(function (a) { return strip(a) === strip(v); })) {
          inp.className = 'gap near'; sol.className = 'sol near';
          sol.textContent = 'casi — revisá las tildes: ' + acc[0];
        } else {
          inp.className = 'gap err'; sol.className = 'sol err'; sol.textContent = '→ ' + acc[0];
        }
      });
    } else {
      x.items.forEach(function (it, i) {
        var sel = box[i];
        el.querySelectorAll('.opt-btn[data-i="' + i + '"]').forEach(function (b) {
          var j = +b.dataset.j;
          if (j === it.a) b.dataset.s = 'ok';
          else if (j === sel) b.dataset.s = 'err';
          else b.dataset.s = '';
        });
        if (sel === it.a) ok++;
      });
    }
    el.querySelector('.ex-score').textContent = ok + ' de ' + tot;
    persist();
  }

  function clear(el, x) {
    st.R[x.id] = {};
    el.querySelectorAll('input.gap').forEach(function (i) { i.value = ''; i.className = 'gap'; });
    el.querySelectorAll('.sol').forEach(function (s) { s.textContent = ''; s.className = 'sol'; });
    el.querySelectorAll('.opt-btn').forEach(function (o) { o.dataset.s = ''; });
    var sc = el.querySelector('.ex-score'); if (sc) sc.textContent = '';
    persist();
  }

  /* ---------------- Montaje ---------------- */
  var mounted = null;       // la lección montada
  var mountedHost = null;   // y dónde, para poder refrescarla sin repintar
  var mountedOpts = {};

  function updateTaller(root, taller, pieceText) {
    if (!taller) return;
    var done = 0, tot = 0;
    taller.piezas.forEach(function (p) {
      var n = words(pieceText ? pieceText(p.s) : "");
      var el = root.querySelector('.slot[data-p="' + p.id + '"]');
      if (!el) return;
      var okp = n >= 60;
      el.classList.toggle('done', okp);
      el.querySelector('.stt').textContent = n ? n + ' palabras' : 'pendiente';
      if (okp) { done++; tot += n; }
    });
    var fill = root.querySelector('#barfill');
    if (fill) fill.style.width = (done / taller.piezas.length * 100) + '%';
    var tw = root.querySelector('#totw');
    if (tw) tw.textContent = done ? done + ' de ' + taller.piezas.length + ' · ' + tot + ' palabras acumuladas' : '';
  }

  function mount(host, lesson, opts) {
    if (!host) return;
    opts = opts || {};
    var ex = lesson.exercises || [];
    var html = ex.map(exHTML).join('');
    if (lesson.taller) html += tallerHTML(lesson.taller);
    host.innerHTML = html;
    mounted = lesson;
    mountedHost = host;
    mountedOpts = opts;

    // El estado puede haber cambiado por una sincronización desde otro
    // dispositivo, así que se relee al montar.
    st = store.load();
    ex.forEach(function (x) { restore(host, x); });
    updateTaller(host, lesson.taller, opts.pieceText);
    if (readOnly) lockDown(host);

    host.addEventListener('click', function (e) {
      var opt = e.target.closest('.opt-btn');
      if (opt) {
        if (readOnly) return;
        var ob = opt.closest('[data-ex]'), oid = ob.dataset.ex, i = +opt.dataset.i;
        ob.querySelectorAll('.opt-btn[data-i="' + i + '"]').forEach(function (o) { o.dataset.s = ''; });
        opt.dataset.s = 'sel';
        rbox(oid)[i] = +opt.dataset.j;
        persist();
        return;
      }
      if (e.target.id === 'btnEns') {
        var box = host.querySelector('#ensamblado');
        var txt = lesson.taller.piezas.map(function (p) {
          return (opts.pieceText ? opts.pieceText(p.s) : "").trim();
        }).filter(Boolean).join('\n\n');
        if (!txt) {
          box.classList.add('show');
          box.textContent = lesson.taller.empty;
          return;
        }
        box.classList.toggle('show');
        if (box.classList.contains('show')) box.textContent = txt;
        return;
      }
      var act = e.target.closest('[data-act]');
      if (!act) return;
      var el = act.closest('[data-ex]'); if (!el) return;
      var x = ex.filter(function (q) { return q.id === el.dataset.ex; })[0];
      if (!x) return;
      if (act.dataset.act === 'models') {
        var on = el.querySelector('.modelo.show');
        el.querySelectorAll('.modelo').forEach(function (m) { m.classList.toggle('show', !on); });
        act.textContent = on ? 'Ver las versiones modelo' : 'Ocultar las versiones modelo';
        return;
      }
      if (act.dataset.act === 'clear') { if (!readOnly) clear(el, x); return; }
      check(el, x);
    });

    host.addEventListener('input', function (e) {
      var el = e.target.closest('[data-ex]');
      if (readOnly) return;
      if (el && (e.target.tagName === 'TEXTAREA' || e.target.classList.contains('gap'))) {
        rbox(el.dataset.ex)[e.target.dataset.i] = e.target.value;
        persist();
      }
    });

    host.addEventListener('change', function (e) {
      if (e.target.type !== 'checkbox') return;
      if (readOnly) { e.target.checked = !e.target.checked; return; }
      var exEl = e.target.closest('[data-ex]');
      if (!exEl) return;
      st.CH[exEl.dataset.ex + ':' + e.target.dataset.i] = e.target.checked;
      persist();
    });
  }

  // Deja el cuaderno como está: se lee, no se toca. Los botones de comprobar
  // y borrar desaparecen porque son del alumno.
  function lockDown(host) {
    host.querySelectorAll('input, textarea').forEach(function (el) {
      if (el.type === 'checkbox') el.disabled = true;
      else { el.readOnly = true; el.tabIndex = -1; }
    });
    host.querySelectorAll('[data-act="check"], [data-act="clear"], #btnEns').forEach(function (b) {
      b.hidden = true;
    });
    host.classList.add('cuaderno-ro');
  }

  /* Vuelve a leer el estado y lo aplica a lo que ya hay en pantalla.
     Hace falta porque una sincronización de fondo cambia el progreso sin
     repintar la lección: sin esto, las respuestas que llegan del otro
     dispositivo quedan guardadas pero invisibles, y el hueco parece vacío. */
  function reload() {
    st = store.load();
    if (!mountedHost || !mounted || !mountedHost.isConnected) return;
    (mounted.exercises || []).forEach(function (x) { restore(mountedHost, x); });
    updateTaller(mountedHost, mounted.taller, mountedOpts.pieceText);
  }

  window.Cuaderno = {
    mount: mount,
    reload: reload,
    useStore: useStore,
    localState: localState,
    setReadOnly: setReadOnly
  };
})();
