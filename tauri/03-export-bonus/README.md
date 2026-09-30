# 03 - Export Bonus 📤 (OPTIONAL, no new project!)

Work INSIDE `02-todo-desktop`. Add a real file dialog + export button.
You learn Tauri plugins - the way real apps open/save files.

## What to do

### Step 1 - Add the dialog plugin

```bash
cd ../02-todo-desktop
pnpm add @tauri-apps/plugin-dialog
```

In `src-tauri/src/lib.rs`, in `run()`:

```rust
.plugin(tauri_plugin_dialog::init())
```

In `src-tauri/Cargo.toml`, add:

```toml
tauri-plugin-dialog = "2"
```

In `src-tauri/capabilities/default.json`, allow the dialog:

```json
{
  "permissions": ["core:default", "dialog:allow-save"]
}
```

(Open the file first - add the dialog line to the permissions list!)

### Step 2 - Rust: export command

```rust
#[tauri::command]
fn export_tasks(
    path: String,
    store: State<'_, Mutex<TodoStore>>,
) -> Result<(), String> {
    // TODO: copy from save_to logic. store.lock()...save_to(Path::new(&path))
}
```

Add `export_tasks` to `generate_handler![...]`.

### Step 3 - Window: Export button

```tsx
import { save } from "@tauri-apps/plugin-dialog";

// TODO: button "Export" that:
//   const path = await save({ defaultPath: "tasks.json" });
//   if (path) await invoke("export_tasks", { path });
```

## Tasks

- [ ] Step 1: plugin installed, app starts with no error
- [ ] Step 2: `export_tasks` command works
- [ ] Step 3: Export button saves a file YOU choose. Open it - real JSON!

## New words

* `plugin` = extra power for Tauri. Dialog, files, notifications...
* `capabilities` = permission list. The window can ONLY do what is listed. Safe!
