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

## Qué se empaqueta

`build.frontendDist` apunta a `../dist`, que arma `scripts/dist.sh` copiando solo
`index.html`, `css/`, `js/`, `fonts/`, `icons/`, `manifest.webmanifest` y `sw.js`.
Es deliberado: Tauri incrusta **todo** lo que hay bajo `frontendDist`, así que
apuntarlo a la raíz metería `.git/`, `.github/` y `src-tauri/target/` — varios GB
— dentro del `.app`. El script corre solo (`beforeDevCommand` /
`beforeBuildCommand`), no hace falta invocarlo a mano.

El service worker no se registra en la app de escritorio (`index.html` lo omite
cuando detecta Tauri): los archivos ya viajan dentro del binario, y una caché
vieja del worker solo podría servir una versión anterior.

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

Lo decide `data-tauri-drag-region` en el HTML — **no el CSS**. `-webkit-app-region`
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
