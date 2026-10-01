#!/usr/bin/env bash
# 08 - PROJECT: todo.sh with file save. Same idea as Rust 08!
# add "Buy milk" | list | done 1 | remove 1
# File format: id|done|title   (done is 0 or 1)
# TODO_FILE env var changes the file (tests use this!). Default: tasks.txt
set -u

FILE="${TODO_FILE:-tasks.txt}"
touch "$FILE"

cmd="${1:-}"
case "$cmd" in
  add)
    # TODO: title="${2:-}". Empty title = usage error, exit 1.
    # Next id = biggest id + 1 (file may be empty!):
    #   id=$(awk -F'|' 'BEGIN{max=0} {if ($1>max) max=$1} END{print max+1}' "$FILE")
    # Append: echo "$id|0|$title" >> "$FILE"; echo "Added $id"
    echo "TODO: add" >&2
    exit 1
    ;;
  list)
    # TODO: empty file -> echo "(empty)".
    # Else each line: [ ] 1: Buy milk  ([x] when done is 1).
    # HINT: while IFS='|' read -r id done title; do ... done < "$FILE"
    echo "TODO: list" >&2
    exit 1
    ;;
  done)
    # TODO: id="${2:-}". Check it exists: grep -q "^$id|" "$FILE" or error "No task $id".
    # Rewrite file, flip 0->1 for that id:
    #   awk -F'|' -v id="$id" 'BEGIN{OFS="|"} $1==id{$2=1} {print}' "$FILE" > "$FILE.tmp" && mv "$FILE.tmp" "$FILE"
    # echo "Done $id"
    echo "TODO: done" >&2
    exit 1
    ;;
  remove)
    # TODO: id="${2:-}". Check it exists or error "No task $id".
    # grep -v "^$id|" "$FILE" > "$FILE.tmp" && mv "$FILE.tmp" "$FILE"; echo "Removed $id"
    echo "TODO: remove" >&2
    exit 1
    ;;
  *)
    echo "Usage: todo.sh add TEXT | list | done ID | remove ID" >&2
    exit 1
    ;;
esac
