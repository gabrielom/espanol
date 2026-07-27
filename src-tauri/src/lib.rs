#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .setup(|_app| {
            // En macOS la ventana es frameless con los semáforos superpuestos
            // (titleBarStyle: "Overlay" en tauri.conf.json). Si quisieras
            // ajustar su posición vertical, aquí es donde iría, p. ej.:
            //
            //   #[cfg(target_os = "macos")]
            //   {
            //       use tauri::{LogicalPosition, Manager};
            //       let win = _app.get_webview_window("main").unwrap();
            //       win.set_traffic_lights_inset(LogicalPosition::new(20.0, 22.0)).ok();
            //   }
            //
            // (requiere el crate `tauri-plugin-decorum` o una API equivalente)
            Ok(())
        })
        .run(tauri::generate_context!())
        .expect("error al arrancar la aplicación");
}
