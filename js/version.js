// Sello de versión. Lo escribe scripts/stamp.sh y SE COMMITEA: GitHub
// Pages publica la rama, no el artefacto del workflow, así que lo que no
// está en el repositorio no llega al sitio.
//
// Este archivo viaja dentro de la caché del service worker, así que dice
// SIEMPRE qué copia se está ejecutando. La publicada se mira aparte, con
// version.json, que el worker deja pasar sin cachear.
window.APP_VERSION = {"version": "af7a99d", "commit": "af7a99d73e06537c5c022d1ff2197b6620c4851a", "title": "Traer de otro aparato y la fila Apariencia", "pr": 54, "built": "2026-09-04T20:28:34Z"};
