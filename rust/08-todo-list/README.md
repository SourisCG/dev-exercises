# 08 - To-Do List

Task list in memory. Add, list, done, remove.

## What to learn

* `Vec` - list that grows. `push`, `remove`, `iter`
* `struct` inside `Vec` - `Task` list
* `&str` param, `String` field - borrow in, own inside
* `bool` - done or not done
* Parse text commands - `add Buy milk`, `done 2`

## What to do

1. Open `src/main.rs`
2. Finish `TodoList` methods + `parse_command`
3. Run: `cargo run`
4. Tests: `cargo test`

## Tasks

- [ ] Task 1: `add` + `list` work. IDs start at 1, grow: 1, 2, 3...
- [ ] Task 2: `mark_done` returns `true` if id exists, `false` if not
- [ ] Task 3: `remove` works
- [ ] Task 4: `parse_command` works for all 6 commands
- [ ] Task 5 (bonus): `list_done` and `list_open` filters

## Example

```
> add Buy milk
Added task 1
> add Learn Rust
Added task 2
> list
[ ] 1: Buy milk
[ ] 2: Learn Rust
> done 1
> list
[x] 1: Buy milk
[ ] 2: Learn Rust
```

## New words

* `id` = number of the task. Short for "identity".
* `parse` = read text, understand it. `"done 2"` -> Done(2).
