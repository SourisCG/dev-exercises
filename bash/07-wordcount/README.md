# 07 - Word Count Clone (PROJECT!)

Rebuild `wc` with a read loop. `wc` is BANNED here!

## What to do

1. Open `wc-clone.sh`, finish the `TODO`
2. Run: `bash wc-clone.sh wc-clone.sh`
3. Tests: `pnpm exec bats 07-wordcount` (one test compares with REAL `wc`!)

## The tricks (all in the HINT)

* `while IFS= read -r line` = read one line exactly. `IFS=` keeps spaces, `-r` keeps `\`.
* `|| [ -n "$line" ]` = also take the last line if no Enter at end.
* `for w in $line` = NOT quoted ON PURPOSE. Split line into words!
* `${#line}` = length of the line. `+1` = the Enter key.

## New words

* `read` = read one line from a file into a variable
* `< "$file"` = file becomes the input of the loop
