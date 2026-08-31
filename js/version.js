// Sello de versión. Lo escribe scripts/stamp.sh y SE COMMITEA: GitHub
// Pages publica la rama, no el artefacto del workflow, así que lo que no
// está en el repositorio no llega al sitio.
//
// Este archivo viaja dentro de la caché del service worker, así que dice
// SIEMPRE qué copia se está ejecutando. La publicada se mira aparte, con
// version.json, que el worker deja pasar sin cachear.
window.APP_VERSION = {"version": "ca9cc42", "commit": "ca9cc42c076b43cce70add01602170990d4fdb8c", "title": "No agotar la API de GitHub al escribir una redacción", "pr": 50, "built": "2026-08-31T19:57:16Z"};
