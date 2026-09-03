# Handoff de vuelta: la app se adelantó al prototipo

**Dirección: código → diseño.** El handoff anterior iba del prototipo a la app. Este va al revés: el turno 5 está implementado y desplegado, pero por el camino la app cambió cosas y creció pantallas que el prototipo no dibuja. Esto es lo que hay que arreglar y añadir en `Course Home Directions.dc.html` para que el prototipo vuelva a describir la aplicación real.

- **App en producción:** https://gabrielom.github.io/espanol/
- **Repositorio:** `gabrielom/espanol` · versión desplegada `#52 · 9ac8c5b`
- **Prototipo a actualizar:** turnos `5a`–`5d` (la fuente de verdad hasta ahora)

Léelo en tres bloques: **A** son desacuerdos (el prototipo dice una cosa y la app hace otra, y manda la app); **B** son huecos (pantallas que existen y nadie ha diseñado); **C** son datos que estaban mal.

---

## A · Donde el prototipo y la app no coinciden

### A1. El botón de la barra es un engranaje, no un sol

En `5a`–`5d` el único botón de la barra está dibujado con un glifo de sol (círculo con rayos). La prosa del handoff lo llama «settings gear, Feather `settings` glyph» en cuatro sitios, y en `5d` es el botón que se ilumina con borde `accentSoft` cuando Ajustes está abierto. Es el botón de Ajustes.

**Cambio:** volver al engranaje Feather `settings` en las 24 frames. Decisión confirmada por el cliente.

Y no hay botón de tema en la barra: la elección de apariencia vive dentro de Ajustes (ver A4).

### A2. Fuera el aviso de la contraseña

`5d-settings-*-iphone` dibuja bajo los botones:

> «Lleva el token dentro: trátalo como una contraseña.»

**Cambio: borrarlo.** El cliente lo pidió explícitamente («no me gustó cómo queda esa advertencia, podemos quitarla del todo»), junto con los recuadros de color de aviso. Lo que señala el secreto es que el token va tapado con puntos detrás de un botón `ver` — eso basta, y no mete un bloque de color en una ficha que se quiere callada.

Regla general que se sacó de ahí, y que conviene aplicar al resto del sistema: **nada de recuadros tintados de advertencia**. Los estados se dicen con el punto de color, el texto del titular y el color del enlace peligroso (`Desconectar` en `danger`).

### A3. La barra lateral: las reglas son más finas que «colapsada en módulo, expandida en lección»

El handoff dice: módulo → raíl de 56px; lección/evaluación/tarjetas → 268px; la preferencia manual persiste y gana. La app hace algo más matizado, y el matiz es lo que la hace usable:

| Situación | Qué hace la barra | Por qué |
|---|---|---|
| Llegas a la página de un módulo (desde Inicio, o con «atrás» desde una lección) | **Se colapsa** | El índice del módulo ya es el contenido de la página; la barra lo repetiría |
| Pulsas un módulo **en la propia barra expandida** | **Se queda expandida** | Cerrártela justo después de usarla es quitarte la herramienta de las manos |
| Estás en un módulo con la barra estrecha y abres una lección | **Sigue estrecha** | El ancho se arrastra; abrirla es cosa tuya, con el botón `»` |
| Entras en una lección / evaluación / redacción / tarjetas | La lista de ese módulo **se despliega sola** | Para enseñarte dónde estás |
| Estás en la página del módulo | La lista **no** se despliega sola | El índice ya lo tienes delante |

Dos cosas más que el prototipo no muestra y hay que dibujar:

- **El scroll de la barra persiste** entre pantallas. No se reinicia al navegar.
- Al entrar en un elemento, la barra **hace scroll hasta la fila actual solo si quedaría fuera de la vista**, y entonces la centra. Si ya se ve, no se mueve.

El desplegar/plegar de un módulo se hace con el control `%`/`±` de la derecha; **pulsar el título navega** al módulo. Son dos controles distintos en la misma fila, no uno.

### A4. Ajustes: falta la fila **Apariencia**

El texto del turno 5 pide «a manual override in Ajustes», pero ninguna de las seis frames de `5d` la dibuja. La app la tiene, y es una fila más de la rejilla:

```
APARIENCIA   [ Auto ] [ Claro ] [ Oscuro ]
```

Tres estados, no dos. **Auto** sigue al sistema y no marca nada en `<html>`; **Claro** y **Oscuro** ponen `data-theme` y le ganan. Mismas píldoras que Perfil.

El orden real de la ficha es: **Perfil · Código · Versión · Apariencia · Aparato**.

### A5. La tira de estado necesita sus cuatro estados

`5d` dibuja solo el caso feliz: punto verde + «Sincronizado» + `HACE 2 MIN · 3 APARATOS`. La app tiene cuatro, y el titular cambia con el punto — poner «Sincronizado» al lado de un punto rojo sería mentir:

| Punto | Titular | Derecha |
|---|---|---|
| `ok` verde | Sincronizado | `Sincronizado a las 18:20` |
| `syncing` ámbar | Sincronizando… | `Sincronizando…` |
| `error` rojo | No se pudo sincronizar | el mensaje real de GitHub |
| gris | Sin sincronizar | `solo en este aparato` |

Nota: `3 APARATOS` no existe. El gist no sabe cuántos aparatos hay; la app no puede contarlos y no lo inventa. Dibuja la derecha como la marca de tiempo o el detalle del error.

### A6. La fila **Versión** es un desplegable, y en el móvil se recorta

`5d` la dibuja cerrada, con un `›` que no lleva a ninguna parte visible. Es un `<details>`: la fila entera abre.

```
cerrada   VERSIÓN   #52 · 9ac8c5b · 3 sept 2026            ● Al día   ›
abierta   ↳ el título del commit + «Ver el pull request · ver el commit»
```

En pantallas de ≤640px el renglón no da para el commit y la fecha, así que **ahí solo queda `#52`** y el resto baja al desplegable. Eso el prototipo lo acierta en la frame de iPhone (`Versión #148`), pero hay que dibujar también **la frame abierta** — en las tres anchuras.

El estado de la derecha tiene tres formas: `● Al día`, `● Hay una nueva` (en acento) y `● Sin conexión` (apagado).

### A7. «Traer el progreso de otro aparato» tiene estado abierto

En `5d` es una fila perfilada con un `+` a la derecha. Al pulsarla se convierte en el campo donde se pega, y cambian las dos cosas:

```
cerrada   [ Traer el progreso de otro aparato                    + ]
abierta   [ Pega aquí el código del otro aparato                 × ]
          [ ________________________________________________ ]
```

Pegar **conecta y sincroniza solo**: no hay botón de confirmar. Falta dibujar el estado abierto y el mensaje de resultado debajo («Conectado. Sincronizando…» / el error).

### A8. Un solo código, y con el gist delante

El formato final es:

```
espanol:<gist>:<token>
```

El gist va **primero a propósito**: es la parte pública —un id de gist sin token no abre nada—, así que la pantalla la enseña entera y tapa solo la cola. `5d` lo dibuja como `espanol:4f2a9c1b:••••`, que es correcto. Lo que conviene anotar en la especificación es **por qué** ese orden, para que no se «arregle» en una vuelta futura, y que los botones son `VER` (destapa el token) y `COPIAR` (copia el código **entero**, no lo que se ve).

---

## B · Pantallas que existen y el prototipo no dibuja

El turno 5 cubre cuatro pantallas: Inicio, Módulo, Lección y Ajustes. La app tiene seis más, todas alcanzables y todas sin diseño. Van por orden de cuánto se usan.

### B1. Test (`#/quiz/:mid/:lid`) — 48 tests, 313 preguntas

La evaluación de cada lección de los módulos 1–8. Pregunta, opciones, corrección con explicación por pregunta, y una pantalla de resultado con la nota y el 70% de corte. Los estados de opción ya tienen color en la app (`seleccionada`, `correcta`, `incorrecta`) y necesitan token propio en los dos temas — ver C2.

### B2. Módulo 9 — el cuaderno (`#/lesson/m9/:lid`)

Es una lección de otra especie y ocupa 8 de las 56. Cada sesión trae:

- dos carriles, **En clase** (oral, con la profesora) y **En casa** (solo),
- un fragmento del artículo original en un bloque de lectura,
- y de dos a tres ejercicios de cuatro tipos: **completar con banco de palabras**, **opción**, **transformación con modelo** y **lista de revisión** (casillas).

Cada ejercicio tiene botones `Comprobar` y `Borrar`, un contador `n de N`, y estados de acierto / casi / fallo por hueco. La sesión 8 añade el taller «Tu texto se arma solo». Hay además un **glosario del recorrido** al final del módulo.

Nada de esto está diseñado: se construyó portando el HTML original de la profesora. Merece una pasada.

### B3. Redacción (`#/redaccion/:mid/:lid`) — 14 en total

Módulos 8 y 9. Enunciado, lista de elementos obligatorios, editor con contador de palabras («12 / 80–120 palabras · faltan 68»), guardado automático con marca de hora, y `Marcar como entregada`. Cuenta para el progreso igual que un test.

### B4. Las pantallas de la profesora

El perfil **Profesora** existe en la ficha de Ajustes desde el turno 5, pero lo que ese perfil abre no está dibujado:

- **`#/correcciones`** — índice de las 14 redacciones con su estado (`sin corregir` / `corregida` / la nota).
- **El formulario de corrección** dentro de cada redacción: `Nota` + `Comentario` + `Guardar corrección`. El registro **solo crece**: cada corrección se suma con su fecha, ninguna reemplaza a la anterior, y el alumno las ve todas.
- **El cuaderno del módulo 9 en solo lectura**: la profesora ve las respuestas del alumno, sin botones de comprobar ni borrar.

### B5. Certificado (`#/certificate`)

Dos estados: bloqueado (con la lista de lo que falta, enlazada) y desbloqueado (campo para el nombre + el certificado imprimible). Se imprime, así que hereda la regla de C3.

### B6. Ajustes **sin conectar**

`5d` dibuja solo el estado conectado. El primero es distinto y es el que más se lee una sola vez:

```
SINCRONIZACIÓN   [ ghp_… · github_pat_… · espanol:… ]

  ① Crea un token en github.com con el permiso «gist»…
  ② Pégalo aquí: se creará (o reutilizará) un gist secreto…
  ③ En tus otros aparatos, pega el código que este te dará.
```

Un solo campo: acepta el token **o** un código de otro aparato, y distingue por el prefijo. No hay fila de Código ni pie de Desconectar hasta que hay conexión.

---

## C · Datos que hay que corregir

### C1. El curso es más grande de lo que dice el prototipo

La línea de estadísticas de Inicio dice «7 módulos · 42 lecciones · 42 evaluaciones · 270 preguntas · Certificado». Los números reales, contados del contenido:

| | prototipo | real |
|---|---|---|
| Módulos | 7 | **9** |
| Lecciones | 42 | **56** |
| Evaluaciones | 42 | **56** (48 tests + 14 redacciones… ver nota) |
| Preguntas | 270 | **313** |
| Tarjetas | — | **172** |

Nota: los módulos 1–8 tienen 6 lecciones y 6 tests cada uno; el 8 añade 6 redacciones; el 9 tiene 8 sesiones y 8 redacciones, y **ningún test ni tarjetas**. Cualquier maqueta que asuma «6 lecciones · 6 evaluaciones · tarjetas» en todas las tarjetas de módulo se rompe en el 9.

Faltan por dibujar las tarjetas de **Módulo 08** (Lectura guiada, *El Gita*) y **Módulo 09** (la burbuja de la IA, en español rioplatense).

### C2. La tabla de tokens, completa

La tabla del turno 5 tiene 21 tokens. La app necesitó 33: los doce que faltan son los que pintan estados que las cuatro pantallas del turno 5 no contienen (opciones de test, huecos del cuaderno, tintes de acento). Esta es la tabla real, tal cual está en producción:

| token | claro | oscuro | para qué |
|---|---|---|---|
| `--bg` | `#ffffff` | `#1a1a19` | superficie |
| `--panel` | `#fafafa` | `#212120` | llamadas, tira de estado |
| `--hairline` | `#ececec` | `#2c2c2a` | reglas de 1px, pistas |
| `--hair-2` | `#f4f4f2` | `#232321` | separadores de la barra |
| `--card-border` | `#e4e3e0` | `#302f2c` | tarjetas y diálogos |
| `--ring` | `#e0e0e0` | `#3a3936` | círculos vacíos |
| `--ink` | `#141414` | `#f2f1ee` | titulares |
| `--ink-2` | `#1a1a1a` | `#e8e6e3` | títulos de tarjeta y fila |
| `--body` | `#2c2c2c` | `#cfcdc8` | prosa |
| `--mut-1` | `#5f5f5f` | `#a5a29c` | secundario |
| `--mut-2` | `#767676` | `#8f8c86` | secundario |
| `--mut-3` | `#8a8a8a` | `#84817b` | descripciones |
| **`--mut-4`** | `#9a9a9a` | `#7a7772` | duraciones |
| `--faint-1` | `#a2a2a2` | `#6e6b66` | eyebrows |
| **`--faint-2`** | `#b0b0b0` | `#625f5a` | eyebrows de tarjeta |
| `--faint-3` | `#c2c2c2` | `#57544f` | meta |
| **`--faint-4`** | `#cbcbcb` | `#4e4b47` | «Nuevo» |
| `--accent` | `#4a5fd0` | `#8f9fee` | progreso, enlaces, actual |
| **`--accent-hover`** | `#2e42ad` | `#b3bef5` | hover — **se aclara en oscuro** |
| `--accent-soft` | `#d5d9f4` | `#2f3663` | borde del engranaje activo |
| **`--accent-tint`** | `#eef0fc` | `#23264a` | fondo teñido |
| **`--accent-tint-2`** | `#f4f6fe` | `#1f2240` | opción correcta |
| **`--accent-tint-3`** | `#fafbff` | `#1d1f38` | opción seleccionada |
| `--on-accent` | `#ffffff` | `#14142a` | **encima de un relleno de acento** |
| `--ok` | `#3f9d7f` | `#4fb894` | punto de sincronización |
| `--ok-text` | `#3f7d6b` | `#6cc7a8` | «al día» |
| **`--warn`** | `#d9a441` | `#e0b45c` | sincronizando, hueco «casi» |
| **`--warn-text`** | `#8a6a00` | `#d9a441` | texto de «casi» |
| `--error` | `#c86a5a` | `#e08a78` | Desconectar, ejemplos ✗ |
| **`--error-tint`** | `#fdf7f6` | `#2a1f1c` | opción incorrecta |
| **`--error-soft`** | `#f0d9d4` | `#4a322c` | borde de error |
| `--veil` | `rgba(20,20,20,.28)` | `rgba(0,0,0,.62)` | velo |
| **`--shadow-lightbox`** | `0 18px 48px rgba(20,20,20,.16)` | `0 18px 48px rgba(0,0,0,.5)` | caja de luz |
| **`--shadow-drawer`** | `14px 0 40px -18px rgba(20,20,20,.3)` | `14px 0 40px -18px rgba(0,0,0,.7)` | cajón del iPad |

En negrita, los doce que faltan en la tabla del turno 5.

Los tres principios del turno 5 se confirmaron al implementarlos, y el tercero es el que más se olvida:

1. El acento **se aclara** en oscuro.
2. Las líneas de un píxel **se oscurecen**.
3. `--on-accent` **es tinta oscura** en oscuro. Seis reglas del código tenían `color: #fff` sobre un relleno de acento; todas había que cambiarlas.

Y uno cuarto que salió de la implementación: **el hover del acento también se aclara** (`--accent-hover`). En claro es más oscuro que el acento, en oscuro más claro. Una inversión mecánica lo deja invisible.

### C3. Al imprimir se vuelve a claro

El papel es blanco. Certificado y redacción se imprimen, así que el tema oscuro se descarta en `@media print`. Merece una frame: **el certificado impreso**, que es la única pantalla del curso que se ve fuera de la pantalla.

### C4. Datos de plataforma, medidos

- **Semáforos de macOS:** el hueco reservado en la barra es **64px**, no 84. La posición nativa está fijada en `trafficLightPosition: { x: 13, y: 30.5 }`, medida a ojo hasta centrarlos verticalmente en una barra de 56px. La relación es `centro = y − 2`.
- **iPad instalado en ventana** (Stage Manager): iPadOS dibuja su propia píldora de controles y hay que reservar **44px**. Es un hueco distinto del de macOS y solo aparece instalada.
- **La app de escritorio no lleva los archivos dentro**: carga el sitio publicado y lo cachea con el service worker. Lo que se despliega llega al escritorio sin recompilar. Solo el envoltorio nativo (tamaño de ventana, semáforos, tema de la ventana) necesita un `.dmg` nuevo.

---

## Lo que NO hay que cambiar

Decisiones deliberadas del cliente que se apartan del prototipo. Si el diseño las «arregla», habrá que volver a deshacerlas:

1. **El aviso de la contraseña se queda fuera** (A2), y con él cualquier recuadro tintado de advertencia.
2. **Las reglas de la barra lateral** (A3) son del cliente, no del diseño. En particular, no volver a «expandida por defecto en lección».
3. **La ficha de Ajustes cabe sin scroll** y esa es su restricción dura: 368px de contenido en 368 de sitio en la caja de luz. Cualquier fila nueva tiene que caber o plegarse.
4. **El engranaje** (A1).

## Qué se pide de vuelta

Por orden de valor:

1. Corregir `5a`–`5d` con **A1–A8** y **C1**, y completar la tabla de tokens con **C2**.
2. Dibujar **B1 (Test)** y **B3 (Redacción)** en los dos temas y las tres anchuras: son las dos pantallas que el alumno más pisa después de la lección.
3. Dibujar **B4 (las pantallas de la profesora)**: es medio producto sin diseñar.
4. **B2 (el cuaderno del módulo 9)**: el más grande y el que más se beneficiaría, pero también el que más contenido tiene que respetar — es material portado literalmente, y ningún texto se puede reescribir.
5. **B5 (certificado)** y **B6 (Ajustes sin conectar)**, que son de una frame cada uno.
