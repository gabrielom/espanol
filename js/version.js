// Sello de versión. Lo escribe scripts/stamp.sh y SE COMMITEA: GitHub
// Pages publica la rama, no el artefacto del workflow, así que lo que no
// está en el repositorio no llega al sitio.
//
// Este archivo viaja dentro de la caché del service worker, así que dice
// SIEMPRE qué copia se está ejecutando. La publicada se mira aparte, con
// version.json, que el worker deja pasar sin cachear.
window.APP_VERSION = {"version": "69ba329", "commit": "69ba3298991a750e7651896c55098c037f98ec6a", "title": "Ajustar Ajustes a la maqueta", "pr": 55, "built": "2026-09-05T11:44:25Z"};
