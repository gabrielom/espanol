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

### Dos perfiles: alumno y profesora

En **Ajustes** se elige quién usa el dispositivo — sin contraseñas ni cuentas. El
engranaje de la barra abre Ajustes como una caja de luz sobre lo que estés haciendo:
como no cambia de ruta, volver a pulsarlo te deja en la misma página y en el mismo
punto. En el móvil no hay sitio para una caja, así que ahí sigue siendo una página
(`#/ajustes`).

- **Alumno** (por defecto): el curso completo, con su progreso.
- **Profesora**: lee las redacciones, les pone **nota y comentario** y los guarda en un
  **registro con fecha** que solo crece — cada corrección se suma, ninguna reemplaza a la
  anterior. Sus clics **no** marcan lecciones ni tests: el progreso del alumno no se toca.
  Tiene además un índice (`#/correcciones`) con las 14 redacciones y su estado.

Los dos perfiles comparten los mismos datos, así que con la sincronización activada la
profesora corrige en su dispositivo y las notas aparecen en el del alumno. El perfil
elegido vive solo en cada dispositivo: no se sincroniza.

### Sincronización entre dispositivos (opcional)

Para continuar en el iPhone, iPad y Mac, la app puede sincronizar el progreso a través de
un **gist secreto de GitHub** — sin servidores ni cuentas nuevas, y opt-in (nada sale a la
red hasta que te conectas). Entra en **Ajustes** (el engranaje de la barra
superior), pega un token de GitHub con permiso `gist` y repite con el mismo token en tus otros dispositivos. La fusión
es *grow-only* (las lecciones se unen y de cada evaluación se conserva la mejor nota), así
que dos dispositivos avanzan por separado y se reconcilian sin perder progreso. El token
vive solo en cada dispositivo y únicamente se envía a `api.github.com`.

**¿El gist equivocado?** *Ajustes → Buscar el gist otra vez* olvida el id guardado y
conserva el token: la siguiente sincronización vuelve a localizar el gist por el nombre
del archivo, o crea uno si no hay. Es la salida cuando el id apunta a donde no debe, sin
tener que desconectar y volver a empezar.

**Añadir un dispositivo de una pegada.** Desde uno que ya funcione, *Ajustes →
Copiar código de conexión*: sale una línea `espanol:1:<token>:<gist>` que se pega en el
otro y lo deja conectado al mismo gist, sin volver a buscar el token. Ese código
**lleva el token dentro**, así que es una contraseña: no lo dejes en un chat ni en notas
compartidas. Si alguna vez se te escapa, basta con revocar el token en GitHub.

## Cuatro formas de estudiar

1. **Lecciones** — 56 lecciones (6 por módulo; 8 en el módulo 9) con tablas PT↔ES, ejemplos ✗/✓ y notas de registro regional.
2. **Tests** — uno por lección en los módulos 1-8 (48 en total, 313 preguntas), corregidos con explicación en cada pregunta; se aprueban con **70 %**.
3. **Redacciones** — evaluación escrita dentro de la app (módulos 8 y 9, 14 en total): enunciado, lista de elementos obligatorios, editor con contador de palabras y guardado automático. Cuentan para el progreso igual que los tests; la corrección la hace la profesora (se copian o se imprimen).
4. **Tarjetas de repaso** — un mazo por módulo (172 tarjetas) con volteo y mezcla, para repaso espaciado.

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
| 8 📖 | **Lectura guiada I** (*El Gita, un torrente de sabiduría*, cap. I–VI) — una lección por capítulo, con cuatro frentes en paralelo: léxico culto cognado, colocaciones y metáforas del texto, estructuras expositivas (impersonalidad, comparación, concesivas, condicionales, conectores) y subjuntivo contrastivo (relativas de antecedente inespecífico, imperfecto, pluscuamperfecto, *de ahí que*). Incluye **tarea escrita** por lección para corregir con la profesora | 6 + 6 |
| 9 🫧 | **¿La inversión en IA es una transformación real o una burbuja?** — cuaderno de trabajo de la profesora sobre el ensayo de Cédric Durand, portado literalmente: sus ocho sesiones con los carriles *En clase* / *En casa*, sus 23 ejercicios (completar con banco, opción, transformación con modelo, lista de revisión), su taller «Tu texto se arma solo» y su glosario del recorrido. En español rioplatense | 8 sesiones + 8 escrituras |

## App de escritorio en macOS (Tauri)

`src-tauri/` envuelve la misma app web en una ventana nativa **sin barra de título**:
los semáforos de macOS quedan integrados dentro de la propia barra de la app
(`titleBarStyle: "Overlay"` + `hiddenTitle: true`). La barra es la región de arrastre y
el hueco de los semáforos solo se reserva en macOS. Ver `src-tauri/README.md`.

La ventana **no lleva los archivos dentro**: carga el sitio publicado
(`frontendDist` es la URL de GitHub Pages). Así lo que se despliega llega al
escritorio sin recompilar nada. Quien lo hace funcionar sin internet es el
**service worker**, el mismo de la PWA: arranca de la copia guardada y revalida
por detrás, y como Pages manda `ETag`, un archivo que no cambió responde 304 y no
se descarga. **La primera vez sí hace falta conexión**, para que haya algo que
guardar. En **Ajustes → Versión** se ve la copia instalada y si hay una nueva.

```bash
npm install       # una sola vez: baja la CLI de Tauri en node_modules/
npm run build     # .app / .dmg universal (Apple Silicon + Intel)
```

El `.dmg` queda en
`src-tauri/target/universal-apple-darwin/release/bundle/dmg/`. Para desarrollo,
`npm run serve` en una terminal (ahí apunta `devUrl`) y `npm run dev` en otra.

¿Sin un Mac a mano? macOS no se compila desde otro sistema, pero
**Actions → Build macOS app → Run workflow** lo compila en un runner de macOS y
deja el `.dmg` entre los artefactos; una etiqueta `v*` publica además una release.
Las compilaciones van firmadas solo *ad hoc*, así que la primera vez hay que
quitar la cuarentena: `xattr -dr com.apple.quarantine "/Applications/Español para brasileños.app"`.

## Estructura del código

```
index.html            página única (SPA con router por hash)
css/styles.css        sistema visual minimalista (tokens tinta/acento, JetBrains Mono)
fonts/                JetBrains Mono servida localmente (sin CDNs: la app es 100% autocontenida)
js/sync.js            sincronización opcional entre dispositivos (gist secreto)
js/exercises.js       cuaderno interactivo: ejercicios y taller (módulo 9)
js/sidebar.js         barra lateral del curso (expandida / raíl / cajón)
sw.js + manifest      PWA instalable y offline
icons/                iconos de la app (PWA)
js/version.js         sello de la versión en ejecución (lo reescribe el despliegue)
version.json          sello de la versión publicada (nunca se cachea)
src-tauri/            envoltorio nativo de macOS (ventana sin barra de título)
js/course.js          metadatos del curso
js/app.js             motor: router, progreso, evaluaciones, tarjetas, certificado
js/modules/module*.js contenido de cada módulo:
                        lessons[] → { title, duration, content (HTML), quiz { questions[] } }
                        flashcards[] → { front, back }
```

Para añadir o editar contenido basta tocar los archivos `js/modules/module*.js` —
el resto de la aplicación se adapta solo.
