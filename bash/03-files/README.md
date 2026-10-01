# 03 - List Files

Folders + globs + tests.

## What to do

1. Open `list-ext.sh`, finish the `TODO`
2. Run: `bash list-ext.sh . sh` (lists `.sh` files here!)
3. Tests: `pnpm exec bats 03-files`

## New words

* `[ -d "$dir" ]` = "is it a folder?" `[ -f "$f" ]` = "is it a file?"
* `*` in `"$dir"/*.txt` = all files ending in `.txt`. Called a glob.
* `basename` = file name without folder. `basename a/b.txt` → `b.txt`
* `nullglob` = empty folder gives nothing, not the `*.txt` text.
* Tests make their own folder in `$BATS_TEST_TMPDIR` (deleted after!).
