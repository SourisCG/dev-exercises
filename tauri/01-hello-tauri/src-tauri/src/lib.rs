// 01 - Your first Tauri command. The window (TypeScript) calls Rust!
// A command = a Rust function the window can call with invoke().
// Learn more: https://tauri.app/develop/calling-rust/

// TODO: return "Hello, {name} from Rust!"
// Example: greet("Ana") -> "Hello, Ana from Rust!"
#[tauri::command]
fn greet(name: &str) -> String {
    let _ = name;
    todo!("Return hello message with the name")
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_opener::init())
        .invoke_handler(tauri::generate_handler![greet])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn greet_ana() {
        assert_eq!(greet("Ana"), "Hello, Ana from Rust!");
    }

    #[test]
    fn greet_empty() {
        assert_eq!(greet(""), "Hello,  from Rust!");
    }
}
