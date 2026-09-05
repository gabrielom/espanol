// Sello de versión. Lo escribe scripts/stamp.sh y SE COMMITEA: GitHub
// Pages publica la rama, no el artefacto del workflow, así que lo que no
// está en el repositorio no llega al sitio.
//
// Este archivo viaja dentro de la caché del service worker, así que dice
// SIEMPRE qué copia se está ejecutando. La publicada se mira aparte, con
// version.json, que el worker deja pasar sin cachear.
window.APP_VERSION = {"version": "6ac378d", "commit": "6ac378d746e73e38b05a865b2d37239287a6e197", "title": "Ajustar Ajustes a la maqueta", "pr": 55, "built": "2026-09-05T11:51:49Z"};
