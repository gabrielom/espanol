// Sello de versión. Lo escribe scripts/stamp.sh y SE COMMITEA: GitHub
// Pages publica la rama, no el artefacto del workflow, así que lo que no
// está en el repositorio no llega al sitio.
//
// Este archivo viaja dentro de la caché del service worker, así que dice
// SIEMPRE qué copia se está ejecutando. La publicada se mira aparte, con
// version.json, que el worker deja pasar sin cachear.
window.APP_VERSION = {"version": "e47e4c3", "commit": "e47e4c3203dcc4dd7f77d2c8ba9e1b69a1f022f4", "title": "Ajustes: la ficha del dispositivo, sin scroll y con un solo código", "pr": 49, "built": "2026-08-31T19:38:20Z"};
