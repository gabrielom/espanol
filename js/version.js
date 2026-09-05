// Sello de versión. Lo escribe scripts/stamp.sh y SE COMMITEA: GitHub
// Pages publica la rama, no el artefacto del workflow, así que lo que no
// está en el repositorio no llega al sitio.
//
// Este archivo viaja dentro de la caché del service worker, así que dice
// SIEMPRE qué copia se está ejecutando. La publicada se mira aparte, con
// version.json, que el worker deja pasar sin cachear.
window.APP_VERSION = {"version": "9f71f05", "commit": "9f71f0571c32702c0598c94af422c8206c654cfd", "title": "Ajustar Ajustes a la maqueta", "pr": 55, "built": "2026-09-05T11:34:03Z"};
