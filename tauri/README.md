# Tauri Exercises 🖥️

Desktop apps! React window + Rust brain.

## Setup (each app, one time)

```bash
cd tauri/01-hello-tauri
pnpm install
pnpm tauri dev     # opens the window
```

First build downloads Rust tools. 5-10 min once. Normal!

## The exercises

| # | Folder | You learn |
|---|--------|-----------|
| 01 | `01-hello-tauri` | command + `invoke`. Window calls Rust. |
| 02 | `02-todo-desktop` | **CAPSTONE!** `State` + `Mutex`, serde save, full app |
| 03 | `03-export-bonus` | dialog plugin. No new project - extend 02! |

Do 01 first (30 min), then 02 (the big one). 03 is optional bonus.

## Useful commands

```bash
pnpm tauri dev       # run with hot reload
pnpm tauri build     # make a real .AppImage / .deb file!
cargo test           # Rust tests (run in src-tauri/)
```

## Useful words

* `command` = Rust function the window can call
* `invoke` = call it from TypeScript
* `State` = shared data for commands. `Mutex` = one at a time.
* `plugin` = extra power (dialog, files...). Needs permission in `capabilities`!
