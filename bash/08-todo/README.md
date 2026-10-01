# 08 - Todo.sh (PROJECT!)

Same app as Rust 08, now in bash + file save.

## What to do

1. Open `todo.sh`. The `case` is READY. Finish `add`, `list`, `done`, `remove`.
2. Try by hand:
   ```bash
   export TODO_FILE=/tmp/mytasks.txt
   bash todo.sh add "Buy milk"
   bash todo.sh list
   bash todo.sh done 1
   ```
3. Tests: `pnpm exec bats 08-todo` (tests use their own file!)
4. Bonus: `edit 1 "New title"` command. And `clear` (delete done tasks).

## File format

```
1|0|Buy milk
2|1|Learn bash
```

`id|done|title`. `|` separates fields (like CSV with `|`).

## New words

* `TODO_FILE` env var = change the file without changing code. Tests use a temp file!
* `>>` = add to end of file. `>` = overwrite file (careful!).
* `awk -F'|'` = work with `|` fields. `grep -v` = all lines EXCEPT...
* temp file + `mv` = safe rewrite. Never write into the file you read!
