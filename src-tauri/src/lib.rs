#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        // Toda la ventana se configura desde tauri.conf.json: la barra de
        // título oculta, la posición de los semáforos y el permiso de arrastre
        // (capabilities/default.json). Aquí no hace falta nada.
        .run(tauri::generate_context!())
        .expect("error al arrancar la aplicación");
}
