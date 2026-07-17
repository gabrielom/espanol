# 🌎 Español para brasileños — Del portuñol al dominio

Curso interactivo de español, al estilo Coursera, **escrito íntegramente en español** y diseñado
para hablantes de portugués brasileño que ya entienden y hablan español, pero quieren dominarlo
de verdad. En lugar de enseñar el idioma desde cero, el curso ataca sistemáticamente los **puntos
de interferencia** entre las dos lenguas — los errores que definen el "portuñol".

## Cómo usarlo

Es una aplicación web estática, sin dependencias ni build:

```bash
# opción 1: abrir directamente
open index.html

# opción 2: servidor local
python3 -m http.server 8000
# → http://localhost:8000
```

También funciona tal cual en GitHub Pages (el workflow `.github/workflows/pages.yml` la
despliega automáticamente en cada push a `main`).

El progreso (lecciones completadas, notas de las evaluaciones y el nombre del certificado)
se guarda en el `localStorage` del navegador.

## Tres formas de estudiar

1. **Lecciones** — 42 lecciones contrastivas (6 por módulo) con tablas PT↔ES, ejemplos ✗/✓ y notas de registro regional.
2. **Evaluaciones** — una por lección (42 en total, 270 preguntas), corregidas con explicación en cada pregunta; se aprueban con **70 %**.
3. **Tarjetas de repaso** — un mazo por módulo (142 tarjetas) con volteo y mezcla, para repaso espaciado.

Al completar todas las lecciones y aprobar todas las evaluaciones se desbloquea un **certificado imprimible**.

## Programa

| Módulo | Tema | Lecciones |
|---|---|---|
| 1 🎭 | **Falsos amigos** — alto riesgo (embarazada, exquisito), trabajo y casa, mesa y restaurante (vaso/copa/taza, salsa/perejil), cuerpo y salud (pelo/vello, constipado), verbos traicioneros (procurar, contestar, exprimir, prender), adverbios parciales (todavía, apenas, de repente) | 6 + 6 evaluaciones |
| 2 🗣️ | **Pronunciación** — vocales firmes sin nasalidad, t/d/s/b-v, jota /x/ y rr, heterotónicos y tildes (policía, teléfono, cerebro), ritmo silábico y entonación, taller práctico con pares mínimos y trabalenguas | 6 + 6 |
| 3 ⚙️ | **Gramática contrastiva I** — muy/mucho y tan/tanto, apócope, artículos y contracciones, días/horas y el neutro "lo", heterogenéricos masculinos (-aje) y femeninos (-umbre) con plurales especiales | 6 + 6 |
| 4 🔗 | **Pronombres y estructuras** — colocación pronominal, le/lo/la, se lo + duplicación + leísmo, tú/vos/usted vs. você, gustar y su familia, reflexivos divergentes (irse, quedarse, se accidental) | 6 + 6 |
| 5 ⏳ | **Tiempos verbales** — he comido ≠ tenho comido, futuro de subjuntivo muerto (cuando vaya / si puedo), infinitivo personal inexistente, subjuntivo fino (aunque, ojalá, a lo mejor), imperativo completo, perífrasis (soler, volver a, llevar + gerundio) | 6 + 6 |
| 6 🧭 | **Preposiciones y conectores** — la "a" personal, regencias que cambian, hace/desde hace/dentro de, por y para a fondo, pero/sino y conectores cultos, preposiciones espaciales (debajo de, doblar a la izquierda) | 6 + 6 |
| 7 🏆 | **Del avanzado al nativo** — hay vs. tener, el mapa completo de "ficar", ser y estar finos (está casado, estar aburrido), expresiones idiomáticas y saudade, muletillas y cortesía por país, léxico regional coherente | 6 + 6 |

## Estructura del código

```
index.html            página única (SPA con router por hash)
css/styles.css        diseño inspirado en Coursera + tarjetas de repaso
js/course.js          metadatos del curso
js/app.js             motor: router, progreso, evaluaciones, tarjetas, certificado
js/modules/module*.js contenido de cada módulo:
                        lessons[] → { title, duration, content (HTML), quiz { questions[] } }
                        flashcards[] → { front, back }
```

Para añadir o editar contenido basta tocar los archivos `js/modules/module*.js` —
el resto de la aplicación se adapta solo.
