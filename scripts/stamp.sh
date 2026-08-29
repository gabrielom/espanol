#!/bin/sh
# Escribe el sello de versión (version.json y js/version.js) y lo DEJA LISTO
# para commit.
#
# Por qué se commitea en vez de generarse al desplegar: GitHub Pages publica
# este repositorio desde la rama `main` (su compilador propio,
# "pages build and deployment"), no desde el artefacto de .github/workflows/
# pages.yml. Lo que no esté commiteado no llega al sitio. Un sello generado en
# el despliegue se quedaba dentro del artefacto y nunca se veía.
#
#   uso:  sh scripts/stamp.sh <nº de PR> "<título del PR>"
#
# El sha es el del commit actual de la rama: es el que contiene los cambios y
# el que enlaza la app. El PR y su título vienen como argumentos porque se
# conocen al abrirlo.
set -eu

if [ $# -lt 2 ]; then
  echo "uso: sh scripts/stamp.sh <nº de PR> \"<título>\"" >&2
  exit 2
fi

here=$(CDPATH= cd -- "$(dirname -- "$0")" && pwd)
root=$(dirname "$here")
cd "$root"

PR="$1" TITULO="$2" python3 - <<'PY'
import json, os, subprocess, datetime, pathlib

def git(*a):
    return subprocess.check_output(["git", *a], text=True).strip()

info = {
    "version": git("rev-parse", "--short", "HEAD"),
    "commit": git("rev-parse", "HEAD"),
    "title": os.environ["TITULO"],
    "pr": int(os.environ["PR"]),
    "built": datetime.datetime.now(datetime.timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ"),
}
blob = json.dumps(info, ensure_ascii=False)

pathlib.Path("version.json").write_text(blob + "\n", encoding="utf-8")
pathlib.Path("js/version.js").write_text(
    "// Sello de versión. Lo escribe scripts/stamp.sh y SE COMMITEA: GitHub\n"
    "// Pages publica la rama, no el artefacto del workflow, así que lo que no\n"
    "// está en el repositorio no llega al sitio.\n"
    "//\n"
    "// Este archivo viaja dentro de la caché del service worker, así que dice\n"
    "// SIEMPRE qué copia se está ejecutando. La publicada se mira aparte, con\n"
    "// version.json, que el worker deja pasar sin cachear.\n"
    "window.APP_VERSION = " + blob + ";\n",
    encoding="utf-8")
print("sello →", info["version"], "PR", info["pr"], "·", info["title"])
PY
