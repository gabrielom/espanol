// Sello de versión. Lo escribe scripts/stamp.sh y SE COMMITEA: GitHub
// Pages publica la rama, no el artefacto del workflow, así que lo que no
// está en el repositorio no llega al sitio.
//
// Este archivo viaja dentro de la caché del service worker, así que dice
// SIEMPRE qué copia se está ejecutando. La publicada se mira aparte, con
// version.json, que el worker deja pasar sin cachear.
window.APP_VERSION = {"version": "9ac8c5b", "commit": "9ac8c5b8bba11fa1232857c43876c3240d5f7940", "title": "Tema oscuro y la ficha de Ajustes", "pr": 52, "built": "2026-09-03T09:55:57Z"};
