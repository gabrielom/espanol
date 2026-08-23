#!/bin/sh
# Reúne en dist/ solo los archivos que forman la app web.
#
# Tauri incrusta en el binario TODO lo que haya bajo `frontendDist`. Si eso
# apunta a la raíz del repositorio, dentro del .app acaban .git/, .github/ y
# src-tauri/target/ — que durante la compilación pesa varios GB. Por eso el
# empaquetado copia primero lo necesario a un directorio limpio.
#
# Es idempotente: se puede ejecutar tantas veces como haga falta.
set -eu

here=$(CDPATH= cd -- "$(dirname -- "$0")" && pwd)
root=$(dirname "$here")
out="$root/dist"

rm -rf "$out"
mkdir -p "$out"

for item in index.html manifest.webmanifest sw.js css js fonts icons; do
  if [ ! -e "$root/$item" ]; then
    echo "dist.sh: falta $item" >&2
    exit 1
  fi
  cp -R "$root/$item" "$out/"
done

echo "dist.sh → $out ($(find "$out" -type f | wc -l | tr -d ' ') archivos)"
