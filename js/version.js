// Sello de versión. Lo escribe scripts/stamp.sh y SE COMMITEA: GitHub
// Pages publica la rama, no el artefacto del workflow, así que lo que no
// está en el repositorio no llega al sitio.
//
// Este archivo viaja dentro de la caché del service worker, así que dice
// SIEMPRE qué copia se está ejecutando. La publicada se mira aparte, con
// version.json, que el worker deja pasar sin cachear.
window.APP_VERSION = {"version": "deae158", "commit": "deae158c2877303865a949d7b87e3330a15ca68c", "title": "Decir qué sesiones del módulo 9 tiene cada dispositivo", "pr": 51, "built": "2026-09-01T00:50:34Z"};
