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

También funciona tal cual en GitHub Pages (Settings → Pages → deploy from branch).

El progreso (lecciones completadas, notas de los cuestionarios y el nombre del certificado)
se guarda en el `localStorage` del navegador.

## Programa

| Módulo | Tema | Lecciones |
|---|---|---|
| 1 🎭 | **Falsos amigos: las trampas clásicas** — embarazada, exquisito, taller, vaso/copa/taza, todavía, apenas, tirar/sacar/quitar | 3 + quiz |
| 2 🗣️ | **Pronunciación: borra el acento brasileño** — vocales sin reducción ni nasalidad, t/d sin palatalizar, la jota /x/, la rr, s siempre sorda, sílabas tónicas que cambian (policía, teléfono, cerebro) | 3 + quiz |
| 3 ⚙️ | **Gramática contrastiva I** — muy vs. mucho, apócope (buen, gran, primer), artículos y las dos únicas contracciones, heterogenéricos (el árbol, la sangre, el viaje) | 4 + quiz |
| 4 🔗 | **Pronombres y estructuras** — colocación pronominal, clíticos obligatorios (le/lo/la, se lo), el mapa tú/vos/usted vs. você, gustar y su familia | 4 + quiz |
| 5 ⏳ | **Tiempos verbales divergentes** — "he comido" ≠ "tenho comido", el futuro de subjuntivo muerto (cuando vaya / si puedo), el infinitivo personal inexistente (para que hagamos), subjuntivo fino (aunque, ojalá, a lo mejor) | 4 + quiz |
| 6 🧭 | **Preposiciones, regencias y conectores** — la "a" personal, regencias que cambian (necesitar Ø, enamorarse de, preocuparse por), desde hace, pero vs. sino | 3 + quiz |
| 7 🏆 | **Del avanzado al nativo** — hay vs. tener, tener hambre/prisa/sueño, el mapa completo de "ficar" (quedarse/ponerse/volverse/hacerse), expresiones idiomáticas, saudade, registro y léxico por país | 4 + quiz |

Cada módulo termina con un cuestionario corregido con explicaciones; se aprueba con **70 %**.
Al completar todos los módulos se desbloquea un **certificado imprimible**.

## Estructura del código

```
index.html            página única (SPA con router por hash)
css/styles.css        diseño inspirado en Coursera
js/course.js          metadatos del curso
js/app.js             motor: router, progreso, cuestionarios, certificado
js/modules/module*.js contenido de cada módulo (lecciones en HTML + quiz en JSON)
```

Para añadir o editar contenido basta tocar los archivos `js/modules/module*.js` —
el resto de la aplicación se adapta solo.
