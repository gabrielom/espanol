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

Carga los archivos estáticos de la raíz (`index.html`, `css/`, `js/`, `fonts/`) —
no hay build ni bundler.

## Compilar el .app / .dmg

```bash
cargo tauri build
```

El resultado queda en `src-tauri/target/release/bundle/`.

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

En el lado web:

- `index.html` marca `<html class="is-tauri is-mac-overlay">` en tiempo de
  ejecución (detección de Tauri + macOS). Solo con esa clase el CSS reserva el
  hueco de `64px` (`.traffic-space`) que, sumado al `padding-left: 20px` y al
  `gap: 20px` de la barra, deja los semáforos en su posición nativa. En Windows,
  Linux y en el navegador ese hueco **no** existe.
- La barra lleva `data-tauri-drag-region` para poder arrastrar la ventana, y
  todo lo interactivo (enlaces, botón atrás, engranaje) lleva
  `-webkit-app-region: no-drag` para que los clics sigan funcionando.

## Nota sobre la CSP

`app.security.csp` permite `connect-src https://api.github.com` para que siga
funcionando la sincronización por gist. El resto es `'self'` — la app no carga
nada de terceros.
