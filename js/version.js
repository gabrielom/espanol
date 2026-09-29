// Sello de versión. Lo escribe scripts/stamp.sh y SE COMMITEA: GitHub
// Pages publica la rama, no el artefacto del workflow, así que lo que no
// está en el repositorio no llega al sitio.
//
// Este archivo viaja dentro de la caché del service worker, así que dice
// SIEMPRE qué copia se está ejecutando. La publicada se mira aparte, con
// version.json, que el worker deja pasar sin cachear.
window.APP_VERSION = {"version": "f04d54b", "commit": "f04d54b049432a5edb38d1a201bdea0a4295b660", "title": "Clavar el marco en la PWA, arreglar la lateral y repetir evaluaciones", "pr": 57, "built": "2026-09-29T00:27:11Z"};
