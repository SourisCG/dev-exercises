// 02 - Todo Desktop backend. Same logic as Rust 09, now inside a window!
// The window calls these commands. All save to tasks.json alone.
// Commands (list/add/toggle/delete) are READY. Your TODOs are the store logic.

use serde::{Deserialize, Serialize};
use std::fs;
use std::path::{Path, PathBuf};
use std::sync::Mutex;
use tauri::{AppHandle, Manager, State};

#[derive(Serialize, Deserialize, Debug, Clone, PartialEq)]
pub struct Task {
    pub id: u32,
    pub title: String,
    pub done: bool,
}

#[derive(Serialize, Deserialize, Debug, Default)]
pub struct TodoStore {
    tasks: Vec<Task>,
    next_id: u32,
}

impl TodoStore {
    pub fn new() -> Self {
        // TODO: empty tasks, next_id = 1.
        todo!("Return empty store")
    }

    // Add a task. Error "empty title" if title is blank. Return the new task.
    pub fn add(&mut self, title: &str) -> Result<Task, String> {
        // TODO: check blank, push Task with next_id, grow next_id, return copy.
        // HINT: if title.trim().is_empty() { return Err("empty title".to_string()); }
        let _ = title;
        todo!("Push task and return it")
    }

    // All tasks. A copy, so the window cannot break our list.
    pub fn list(&self) -> Vec<Task> {
        // TODO: return self.tasks.clone().
        todo!("Return copy of tasks")
    }

    // Change done to not-done. Error "no task {id}" if missing.
    pub fn toggle(&mut self, id: u32) -> Result<Task, String> {
        // TODO: find task with id (iter_mut + find), flip done, return copy.
        let _ = id;
        todo!("Flip done, return task")
    }

    // Delete a task. Error "no task {id}" if missing.
    pub fn delete(&mut self, id: u32) -> Result<(), String> {
        // TODO: find position (iter().position), remove it.
        let _ = id;
        todo!("Remove task")
    }

    // Save store as JSON file. Make parent folders first!
    pub fn save_to(&self, path: &Path) -> Result<(), String> {
        // TODO:
        //   if let Some(dir) = path.parent() { fs::create_dir_all(dir).map_err(|e| e.to_string())?; }
        //   let text = serde_json::to_string_pretty(self).map_err(|e| e.to_string())?;
        //   fs::write(path, text).map_err(|e| e.to_string())
        let _ = path;
        todo!("Write JSON to file")
    }

    // Load store from JSON file. ANY error = empty store (no crash!).
    // BONUS: fix next_id = biggest id + 1, so ids never repeat.
    pub fn load_from(path: &Path) -> Self {
        // TODO:
        //   let text = match fs::read_to_string(path) { Ok(t) => t, Err(_) => return Self::new() };
        //   serde_json::from_str(&text).unwrap_or_else(|_| Self::new())
        let _ = path;
        todo!("Read file or return empty store")
    }
}

// File tasks.json inside the app data folder. Real apps save here!
fn data_file(app: &AppHandle) -> PathBuf {
    app.path()
        .app_data_dir()
        .expect("no app data dir")
        .join("tasks.json")
}

#[tauri::command]
fn list_tasks(store: State<'_, Mutex<TodoStore>>) -> Vec<Task> {
    store.lock().expect("lock").list()
}

#[tauri::command]
fn add_task(
    title: String,
    store: State<'_, Mutex<TodoStore>>,
    app: AppHandle,
) -> Result<Task, String> {
    let mut store = store.lock().map_err(|e| e.to_string())?;
    let task = store.add(&title)?;
    store.save_to(&data_file(&app))?;
    Ok(task)
}

#[tauri::command]
fn toggle_task(
    id: u32,
    store: State<'_, Mutex<TodoStore>>,
    app: AppHandle,
) -> Result<Task, String> {
    let mut store = store.lock().map_err(|e| e.to_string())?;
    let task = store.toggle(id)?;
    store.save_to(&data_file(&app))?;
    Ok(task)
}

#[tauri::command]
fn delete_task(
    id: u32,
    store: State<'_, Mutex<TodoStore>>,
    app: AppHandle,
) -> Result<(), String> {
    let mut store = store.lock().map_err(|e| e.to_string())?;
    store.delete(id)?;
    store.save_to(&data_file(&app))?;
    Ok(())
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_opener::init())
        .setup(|app| {
            // Load saved tasks when the app starts.
            let store = TodoStore::load_from(&data_file(app.handle()));
            app.manage(Mutex::new(store));
            Ok(())
        })
        .invoke_handler(tauri::generate_handler![
            list_tasks,
            add_task,
            toggle_task,
            delete_task
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn add_and_list() {
        let mut store = TodoStore::new();
        let t1 = store.add("Milk").unwrap();
        let t2 = store.add("Rust").unwrap();
        assert_eq!(t1.id, 1);
        assert_eq!(t2.id, 2);
        assert_eq!(store.list().len(), 2);
    }

    #[test]
    fn add_empty_is_error() {
        let mut store = TodoStore::new();
        assert!(store.add("").is_err());
        assert!(store.add("   ").is_err());
        assert_eq!(store.list().len(), 0);
    }

    #[test]
    fn toggle_flips() {
        let mut store = TodoStore::new();
        store.add("Milk").unwrap();
        assert_eq!(store.toggle(1).unwrap().done, true);
        assert_eq!(store.toggle(1).unwrap().done, false);
        assert!(store.toggle(99).is_err());
    }

    #[test]
    fn delete_removes() {
        let mut store = TodoStore::new();
        store.add("Milk").unwrap();
        store.add("Rust").unwrap();
        assert!(store.delete(1).is_ok());
        assert_eq!(store.list().len(), 1);
        assert!(store.delete(99).is_err());
    }

    #[test]
    fn save_and_load_roundtrip() {
        let path = std::env::temp_dir().join("todo-desktop-test.json");
        let _ = fs::remove_file(&path);
        let mut store = TodoStore::new();
        store.add("Milk").unwrap();
        store.toggle(1).unwrap();
        store.save_to(&path).unwrap();
        let mut back = TodoStore::load_from(&path);
        assert_eq!(back.list().len(), 1);
        assert!(back.list()[0].done);
        assert_eq!(back.add("More").unwrap().id, 2);
        let _ = fs::remove_file(&path);
    }

    #[test]
    fn load_missing_file_is_empty() {
        let path = std::env::temp_dir().join("todo-desktop-nope.json");
        let _ = fs::remove_file(&path);
        assert_eq!(TodoStore::load_from(&path).list().len(), 0);
    }
}
