// Sello de versión. Lo escribe scripts/stamp.sh y SE COMMITEA: GitHub
// Pages publica la rama, no el artefacto del workflow, así que lo que no
// está en el repositorio no llega al sitio.
//
// Este archivo viaja dentro de la caché del service worker, así que dice
// SIEMPRE qué copia se está ejecutando. La publicada se mira aparte, con
// version.json, que el worker deja pasar sin cachear.
window.APP_VERSION = {"version": "31a0e64", "commit": "31a0e640b8562eca2e2ef09ae3ba8e2ef1d980c2", "title": "Ajustar Ajustes a la maqueta", "pr": 55, "built": "2026-09-05T11:27:16Z"};
