// Sello de versión. Lo escribe scripts/stamp.sh y SE COMMITEA: GitHub
// Pages publica la rama, no el artefacto del workflow, así que lo que no
// está en el repositorio no llega al sitio.
//
// Este archivo viaja dentro de la caché del service worker, así que dice
// SIEMPRE qué copia se está ejecutando. La publicada se mira aparte, con
// version.json, que el worker deja pasar sin cachear.
window.APP_VERSION = {"version": "baf4ea9", "commit": "baf4ea9895eb221c0a2a6d22079c46920f2bf6cb", "title": "La barra y la lateral dejan de irse con el scroll", "pr": 56, "built": "2026-09-22T00:22:43Z"};
