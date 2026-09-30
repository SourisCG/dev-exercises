# 01 - Hello Tauri 👋

Your first desktop app. The window calls Rust!

## Big idea

```
[Window: React + TypeScript]  --invoke("greet")-->  [Rust: fn greet]
[Window shows message]        <--"Hello, Ana!"--    [Rust answers]
```

## Setup (one time)

```bash
cd tauri/01-hello-tauri
pnpm install
```

First `pnpm tauri dev` downloads Rust tools. 5-10 min once. Normal!

## What to do

1. Open `src-tauri/src/lib.rs`, finish `greet`
2. Check Rust: `cargo test` (in `src-tauri/`)
3. Open `src/App.tsx`, finish `callGreet`
4. Check window: `pnpm tauri dev`
5. Type your name, click "Greet from Rust"

## Tasks

- [ ] Task 1: `cargo test` green in `src-tauri/`
- [ ] Task 2: window shows "Hello, YOURNAME from Rust!"
- [ ] Task 3 (bonus): empty name → Rust returns "Hello, stranger from Rust!"

## New words

* `command` = Rust function the window can call
* `invoke` = call a command from TypeScript: `invoke("greet", { name })`
* `handler` = list of commands. `generate_handler![greet]` = "window can call greet"
* `dev` = run with hot reload. `pnpm tauri dev` starts window + web page.
