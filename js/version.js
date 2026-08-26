// Sello de versión. Lo reescribe el despliegue a GitHub Pages con el commit
// real (ver .github/workflows/pages.yml); esto es lo que se ve en local.
//
// Este archivo viaja dentro de la caché del service worker, así que su valor es
// SIEMPRE el de la copia que se está ejecutando. La versión publicada se mira
// aparte, pidiendo version.json a la red — que el worker deja pasar sin cachear.
window.APP_VERSION = {"version": "dev", "commit": "", "title": "", "pr": null, "built": ""};
