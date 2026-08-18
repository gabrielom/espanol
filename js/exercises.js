/* ============================================================
   Ejercicios interactivos del cuaderno (módulo 9).
   Replica el comportamiento del material original:
     · gap    — banco de palabras + huecos para escribir, con
                corrección tolerante a tildes ("casi — revisá las tildes")
     · opcion — botones de opción; al comprobar marca acierto y error
     · modelo — se escribe la versión propia y se revelan las modelo
     · check  — lista de verificación
   Las respuestas se guardan en localStorage por ejercicio.
   ============================================================ */
(function () {
  "use strict";

  var KEY = "espanol-ejercicios-v1";

  function load() {
    try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch (e) { return {}; }
  }
  function save(st) {
    try { localStorage.setItem(KEY, JSON.stringify(st)); } catch (e) {}
  }
  var state = load();
  function box(id) { return (state[id] = state[id] || {}); }

  // Normalización idéntica a la del cuaderno original
  function norm(s) {
    return (s || "").toLowerCase().trim().replace(/\s+/g, " ").replace(/[.,;:!¡¿?"']/g, "");
  }
  function strip(s) {
    return norm(s).normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }
  function esc(s) {
    return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }

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

  function restore(root, x) {
    var st = box(x.id);
    var el = root.querySelector('[data-ex="' + x.id + '"]');
    if (!el) return;
    if (x.tipo === "gap") {
      el.querySelectorAll('input.gap').forEach(function (inp) {
        var v = st[inp.dataset.i];
        if (typeof v === "string") inp.value = v;
      });
    } else if (x.tipo === "opcion") {
      el.querySelectorAll('.opt-btn').forEach(function (b) {
        if (st[b.dataset.i] === +b.dataset.j) b.dataset.s = 'sel';
      });
    } else if (x.tipo === "modelo") {
      el.querySelectorAll('textarea.mini').forEach(function (t) {
        var v = st[t.dataset.i];
        if (typeof v === "string") t.value = v;
      });
    } else if (x.tipo === "check") {
      el.querySelectorAll('input[type="checkbox"]').forEach(function (c) {
        c.checked = !!st[c.dataset.i];
      });
    }
  }

  function check(el, x) {
    var st = box(x.id), ok = 0, tot = x.items.length;
    if (x.tipo === "gap") {
      el.querySelectorAll('input.gap').forEach(function (inp) {
        var i = +inp.dataset.i,
            sol = el.querySelector('[data-sol="' + i + '"]'),
            acc = x.items[i].a,
            v = inp.value;
        st[i] = v;
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
        var sel = st[i];
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
    save(state);
  }

  function clear(el, x) {
    state[x.id] = {};
    el.querySelectorAll('input.gap').forEach(function (i) { i.value = ''; i.className = 'gap'; });
    el.querySelectorAll('.sol').forEach(function (s) { s.textContent = ''; s.className = 'sol'; });
    el.querySelectorAll('.opt-btn').forEach(function (o) { o.dataset.s = ''; });
    var sc = el.querySelector('.ex-score'); if (sc) sc.textContent = '';
    save(state);
  }

  /* Monta los ejercicios de una lección dentro de `host` */
  function mount(host, exercises) {
    if (!host || !exercises || !exercises.length) return;
    host.innerHTML = exercises.map(exHTML).join('');
    exercises.forEach(function (x) { restore(host, x); });

    host.addEventListener('click', function (e) {
      var opt = e.target.closest('.opt-btn');
      if (opt) {
        var ob = opt.closest('[data-ex]'), oid = ob.dataset.ex, i = +opt.dataset.i;
        ob.querySelectorAll('.opt-btn[data-i="' + i + '"]').forEach(function (o) { o.dataset.s = ''; });
        opt.dataset.s = 'sel';
        box(oid)[i] = +opt.dataset.j;
        save(state);
        return;
      }
      var act = e.target.closest('[data-act]');
      if (!act) return;
      var el = act.closest('[data-ex]'), id = el.dataset.ex;
      var x = exercises.filter(function (q) { return q.id === id; })[0];
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
      if (!el) return;
      if (e.target.tagName === 'TEXTAREA' || e.target.classList.contains('gap')) {
        box(el.dataset.ex)[e.target.dataset.i] = e.target.value;
        save(state);
      }
    });

    host.addEventListener('change', function (e) {
      if (e.target.type !== 'checkbox') return;
      var el = e.target.closest('[data-ex]');
      if (!el) return;
      box(el.dataset.ex)[e.target.dataset.i] = e.target.checked;
      save(state);
    });
  }

  window.Exercises = { mount: mount };
})();
