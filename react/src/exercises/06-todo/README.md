# 06 - Todo App (FINAL!)

All you learned in one app.

## What to do

1. Open `TodoApp.tsx`
2. Finish the `TODO` (recipe is in the file)
3. See it: `pnpm dev` → Open 06
4. Check: `pnpm test 06-todo`

## Rules

* Input placeholder exactly `New task`
* Buttons exactly `Add`, `Delete`, `All`, `Open`, `Done`
* Empty text + Add = nothing happens
* Reuse ideas from 02 (state), 03 (filter), 05 (bonus: save with YOUR hook!)

## Bonus

Use YOUR `useLocalStorage` from 05 instead of `useState` for todos.
Close the browser, open again - tasks are still there!
(This is what the Tauri app will do later, with Rust saving the file.)
