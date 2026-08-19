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

  function loadState() {
    try {
      var p = JSON.parse(localStorage.getItem(KEY)) || {};
      return { R: p.R || {}, W: p.W || {}, CH: p.CH || {} };
    } catch (e) { return { R: {}, W: {}, CH: {} }; }
  }
  function persist() {
    try { localStorage.setItem(KEY, JSON.stringify(st)); } catch (e) {}
  }
  var st = loadState();
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
        if (typeof v === "string") inp.value = v;
      });
    } else if (x.tipo === "opcion") {
      el.querySelectorAll('.opt-btn').forEach(function (b) {
        if (box[b.dataset.i] === +b.dataset.j) b.dataset.s = 'sel';
      });
    } else if (x.tipo === "modelo") {
      el.querySelectorAll('textarea.mini').forEach(function (t) {
        var v = box[t.dataset.i];
        if (typeof v === "string") t.value = v;
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
  var mounted = null;   // { exercises, w, taller }

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

    ex.forEach(function (x) { restore(host, x); });
    updateTaller(host, lesson.taller, opts.pieceText);

    host.addEventListener('click', function (e) {
      var opt = e.target.closest('.opt-btn');
      if (opt) {
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
      if (act.dataset.act === 'clear') { clear(el, x); return; }
      check(el, x);
    });

    host.addEventListener('input', function (e) {
      var el = e.target.closest('[data-ex]');
      if (el && (e.target.tagName === 'TEXTAREA' || e.target.classList.contains('gap'))) {
        rbox(el.dataset.ex)[e.target.dataset.i] = e.target.value;
        persist();
      }
    });

    host.addEventListener('change', function (e) {
      if (e.target.type !== 'checkbox') return;
      var exEl = e.target.closest('[data-ex]');
      if (!exEl) return;
      st.CH[exEl.dataset.ex + ':' + e.target.dataset.i] = e.target.checked;
      persist();
    });
  }

  window.Cuaderno = { mount: mount };
})();
