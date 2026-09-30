# 02 - Todo Desktop 📝 (CAPSTONE!)

React window + Rust brain + real file save. Your biggest app!

## Big idea

```
[Window: Todo list] --invoke--> [Rust: TodoStore] --save--> tasks.json
        ^                              |
        +------- fresh list ------------+
```

This uses ALL you learned: Rust structs + Result (09), React state (06),
TypeScript types, files + JSON.

## Setup

```bash
cd tauri/02-todo-desktop
pnpm install
```

## What to do

### Part A - Rust brain (do first!)

1. Open `src-tauri/src/lib.rs`
2. Finish `new`, `add`, `list`, `toggle`, `delete`
3. Check: `cargo test` in `src-tauri/` (6 tests!)
4. Finish `save_to`, `load_from`
5. Check: `cargo test` again - all green

Commands (`list_tasks`, `add_task`...) are READY. They call YOUR store.

### Part B - Window (do after!)

1. Open `src/App.tsx`
2. `apiList` is READY. Finish `apiAdd`, then `apiToggle`, then `apiDelete`
3. Run: `pnpm tauri dev`
4. Add tasks. Close the window. Open again - tasks are BACK!

## Tasks

- [ ] A1: `cargo test` green (add, list, toggle, delete)
- [ ] A2: `cargo test` green (save + load roundtrip)
- [ ] B1: Add works in the window
- [ ] B2: Toggle + Delete work
- [ ] B3 (bonus): filter All/Open/Done is ready - check it works!
- [ ] B4 (bonus): see `03-export-bonus` next!

## New words

* `State` = data shared with all commands. `Mutex` = one at a time (safe!)
* `setup` = code that runs when the app starts. We load the file here.
* `manage` = give data to the app. Commands take it with `State`.
* `app_data_dir` = the folder where real apps save files.
