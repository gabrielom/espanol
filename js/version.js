// Sello de versión. Lo escribe scripts/stamp.sh y SE COMMITEA: GitHub
// Pages publica la rama, no el artefacto del workflow, así que lo que no
// está en el repositorio no llega al sitio.
//
// Este archivo viaja dentro de la caché del service worker, así que dice
// SIEMPRE qué copia se está ejecutando. La publicada se mira aparte, con
// version.json, que el worker deja pasar sin cachear.
window.APP_VERSION = {"version": "9aa0fb1", "commit": "9aa0fb1cfb7b97fece992e2168e6f8c447250b8c", "title": "Commitear el sello de versión en vez de generarlo al desplegar", "pr": 48, "built": "2026-08-29T15:28:15Z"};
