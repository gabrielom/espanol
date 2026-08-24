# App de escritorio (Tauri) — macOS

Envoltorio nativo del curso para macOS, con la **barra de título oculta** y los
semáforos (rojo/amarillo/verde) integrados dentro de la propia barra de la app.

## Requisitos

- [Rust](https://rustup.rs) (edición 2021, 1.77+)
- Xcode Command Line Tools: `xcode-select --install`
- Tauri CLI: `cargo install tauri-cli --version "^2"`

## Desarrollo

Desde la raíz del repositorio:

```bash
cargo tauri dev
```

## Compilar el .app / .dmg

### En un Mac

```bash
cargo tauri build --target universal-apple-darwin   # Apple Silicon + Intel
```

El resultado queda en `src-tauri/target/universal-apple-darwin/release/bundle/`:
el `.app` en `macos/` y el `.dmg` en `dmg/`.

### Sin un Mac a mano

macOS no se puede compilar desde Linux ni Windows (hace falta el SDK de Apple).
El workflow `.github/workflows/macos.yml` lo hace en un runner de macOS:
pestaña **Actions → Build macOS app → Run workflow**, y al terminar el `.dmg`
queda entre los artefactos. Con una etiqueta `v*` publica además una release.

### Firma

Las compilaciones no llevan firma de Apple, solo *ad hoc*
(`APPLE_SIGNING_IDENTITY: "-"`), que es lo mínimo para que el binario universal
arranque en Apple Silicon. Al descargarlo de internet macOS lo pone en
cuarentena; se quita con:

```bash
xattr -dr com.apple.quarantine "/Applications/Español para brasileños.app"
```

## Qué carga la ventana

**Nada incrustado.** `build.frontendDist` es una URL:

```json
"frontendDist": "https://gabrielom.github.io/espanol/"
```

Tauri lo admite (`FrontendDist::Url` — «no assets are embedded in the app in this
case»), así que el `.app` es solo la ventana nativa y todo lo que se despliega a
Pages llega al escritorio **sin recompilar**.

### Y sin internet, ¿qué?

Lo resuelve el **service worker**, el mismo de la PWA. Antes no se registraba en
la app de escritorio, porque los archivos ya viajaban dentro del binario y una
caché vieja solo podía estorbar; ahora es justo al revés: es lo único que la hace
funcionar sin red, así que se registra también aquí.

La estrategia es **primero la caché**, incluida la navegación: arranca al
instante de la copia guardada y revalida por detrás. Como GitHub Pages manda
`ETag`, revalidar un archivo que no cambió responde `304` y no descarga nada. Lo
que sí baje queda listo para el arranque siguiente.

> **La primera vez hace falta conexión.** Antes de que exista una copia guardada
> no hay nada que servir.

### Saber qué versión tienes

Dos sellos que el despliegue escribe con el mismo commit
(`.github/workflows/pages.yml`):

| archivo | dónde vive | qué dice |
|---|---|---|
| `js/version.js` | **dentro** de la caché | la versión que se está ejecutando |
| `version.json` | el worker **nunca** lo cachea | la versión publicada ahora mismo |

**Ajustes → Versión** enseña la primera y compara con la segunda. Si difieren, la
copia nueva ya se está descargando y entra al reiniciar la app.

### Permiso para el origen remoto

Como el contenido ya no es local, la capacidad tiene que nombrar el origen o el
arrastre de la ventana vuelve a fallar:

```json
"remote": { "urls": ["https://gabrielom.github.io/espanol/*"] }
```

### La CSP ya no la pone Tauri

`app.security.csp` desapareció de la configuración: con contenido remoto, la
cabecera la manda el servidor y Tauri no puede inyectar nada. Dejarla escrita
sugeriría que hace algo. Los scripts de Tauri (`__TAURI_INTERNALS__`, el de
arrastre) se inyectan igual, porque van al webview, no a la página.

### Volver a empaquetar los archivos

Si algún día interesa un `.app` autónomo de verdad, hay que apuntar
`frontendDist` a un directorio **con solo los archivos web** y volver a poner
`beforeBuildCommand`. Nunca a la raíz del repositorio: Tauri incrusta todo lo que
cuelga de ahí, y `.git/` y `src-tauri/target/` son varios GB.

## Iconos

`src-tauri/icons/` los genera un script a partir de `icons/icon-512.png`, con la
silueta de macOS — el arte ocupa 824/1024 del lienzo con esquinas de radio 185,
que es la proporción que usa el sistema. `icon.icns` lleva las diez variantes
(16 a 1024, con sus versiones @2x).

## Cómo se integran los semáforos

`tauri.conf.json` usa:

```json
{ "app": { "windows": [ { "titleBarStyle": "Overlay", "hiddenTitle": true } ] } }
```

- **`titleBarStyle: "Overlay"`** (solo macOS): el webview ocupa toda la ventana y
  los semáforos flotan sobre el contenido. **Los dibuja macOS** — la app no los
  renderiza.
- **`hiddenTitle: true`**: oculta el texto del título; el nombre del producto en
  la barra de la app es el único título.
- **`trafficLightPosition: { x: 13, y: 30.5 }`**: los centra a media altura de
  nuestra barra. Sin esto macOS los coloca donde irían en una barra de título
  normal (28 pt), y en una barra de 57 pt quedan demasiado arriba.

### De dónde sale ese 30,5

Cuidado, porque `y` **no** es la distancia hasta el borde superior del botón,
que es lo que uno supondría leyendo `inset_traffic_lights` en `tao`
(`platform_impl/macos/view.rs`): esa función pone el contenedor de la barra de
título a `alto_del_botón + y` y lo pega arriba del todo, pero **el botón
conserva su origen dentro del contenedor** (8 pt), así que solo baja `y − 8`.

Medido sobre la ventana real, con los semáforos a 12 pt:

| `y` | centro del botón desde el borde superior |
|---|---|
| sin fijar | ≈ 16 pt (lo que pone macOS) |
| 22 | 20 pt |

De ahí sale la relación, y de ella la fórmula:

```
centro = y − 2   →   y = alto_de_la_barra / 2 + 2 = 57/2 + 2 = 30,5
```

`x` sí es literal (`rect.origin.x = x + i·separación`): es el borde izquierdo
del botón de cerrar contado desde el borde de la ventana. macOS los dejaba en 9,
demasiado pegados al canto; 13 los separa lo justo. El botón verde acaba
entonces en `13 + 2·20 + 12 = 65 pt`, muy por delante de los 104 pt donde
empieza la marca, así que `.traffic-space` no necesita ningún cambio.

**Si cambias el alto de la barra, recalcula `y` con esa fórmula.** El campo es
`f64`, así que los medios puntos valen.

En el lado web:

- `index.html` marca `<html class="is-tauri is-mac-overlay">` en tiempo de
  ejecución (detección de Tauri + macOS). Solo con esa clase el CSS reserva el
  hueco de `64px` (`.traffic-space`) que, sumado al `padding-left: 20px` y al
  `gap: 20px` de la barra, deja los semáforos en su posición nativa. En Windows,
  Linux y en el navegador ese hueco **no** existe.
## Arrastrar la ventana

Hacen falta **dos cosas**, y sin cualquiera de ellas no pasa nada al arrastrar.

### 1. El permiso (`capabilities/default.json`)

`data-tauri-drag-region` no mueve la ventana por su cuenta: llama a un comando
de Tauri, y en Tauri v2 los comandos están cerrados por defecto. Si no hay
carpeta `capabilities/`, **no se concede ningún permiso** y el arrastre falla
en silencio — sin error, sin nada en la consola.

Y no basta con el conjunto por defecto: `core:window:default` solo trae
lectores (`allow-title`, `allow-is-maximized`…) y `allow-internal-toggle-maximize`;
**`allow-start-dragging` no está incluido**. Hay que pedirlo a mano:

```json
"permissions": [
  "core:window:allow-start-dragging",
  "core:window:allow-internal-toggle-maximize"
]
```

El segundo es el que hace que doble clic en la barra maximice, como en
cualquier ventana de macOS. La capacidad apunta a `"windows": ["main"]`, que es
la etiqueta de nuestra ventana (fijada explícitamente en `tauri.conf.json`;
es también el valor por defecto de Tauri).

### 2. El atributo en el HTML — **no el CSS** `-webkit-app-region`
es cosa de Chromium y en macOS la app corre sobre WKWebView, donde esa propiedad
sencillamente no existe: ponerla no hace nada.

El detalle que importa: Tauri mira el elemento **exacto** que pulsas
(`e.target.hasAttribute(...)`) y no sube por sus padres. Ponerlo solo en
`.appbar` no basta — cada hueco no interactivo lo lleva por su cuenta
(`.traffic-space`, los `<span>` de la marca, `.appbar-right`, la etiqueta
«Progreso», la barra de progreso y el porcentaje). Si a un `<span>` le falta,
ese trozo de barra deja de arrastrar.

Los botones y enlaces (atrás, engranaje, hamburguesa) **no** lo llevan, y por
eso siguen respondiendo al clic. Como contrapartida, en la app de escritorio
pulsar el título ya no vuelve a Inicio: arrastra la ventana, que es lo que hace
un título en macOS. Para ir a Inicio están el botón «← Inicio» y las migas.

## Nota sobre la CSP

`app.security.csp` permite `connect-src https://api.github.com` para que siga
funcionando la sincronización por gist. El resto es `'self'` — la app no carga
nada de terceros.
