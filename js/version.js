// Sello de versión. Lo escribe scripts/stamp.sh y SE COMMITEA: GitHub
// Pages publica la rama, no el artefacto del workflow, así que lo que no
// está en el repositorio no llega al sitio.
//
// Este archivo viaja dentro de la caché del service worker, así que dice
// SIEMPRE qué copia se está ejecutando. La publicada se mira aparte, con
// version.json, que el worker deja pasar sin cachear.
window.APP_VERSION = {"version": "bc73ef2", "commit": "bc73ef226a0dcae0e139e0d0ff7cb4fb9f7d117b", "title": "Ajustar Ajustes a la maqueta", "pr": 55, "built": "2026-09-05T11:37:15Z"};
