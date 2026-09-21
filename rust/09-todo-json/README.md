# 09 - To-Do List with Save (JSON)

Same app as `08`, but tasks live in a file: `tasks.json`.
Close the program, open it again - tasks are still there!

## What to learn

* `serde` - change struct to text (JSON) and back
* `derive` - `#[derive(Serialize, Deserialize)]` writes code for you
* `map_err` - change one error type to another
* Real app skill: load at start, save after each change

## What to do

1. First: finish `08-todo-list`. Copy your code for the `08` part.
   (The `Task`, `TodoList`, `Command` code is the same.)
2. Finish `to_json`, `from_json`, `save`, `load`
3. Run: `cargo run`. Add tasks. Quit. Run again - tasks are back!
4. Open `tasks.json` in your editor. You can read it!
5. Tests: `cargo test`

First `cargo run` downloads `serde`. Wait a little.

## Tasks

- [ ] Task 1: copy your `08` code for Task/TodoList/Command
- [ ] Task 2: `to_json` + `from_json` work
- [ ] Task 3: `save` writes file, `load` reads file (missing file = empty list)
- [ ] Task 4 (bonus): `done 1` and `remove 1` also save

## Example `tasks.json`

```json
{
  "tasks": [
    { "id": 1, "title": "Buy milk", "done": true }
  ],
  "next_id": 2
}
```

## New words

* `serialize` = struct -> text. Save.
* `deserialize` = text -> struct. Load.
* `JSON` = text format. `{ "title": "Buy milk" }`.
* `derive` = Rust writes code for you from `#[...]`.
