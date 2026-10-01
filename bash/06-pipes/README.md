# 06 - Top Words

Pipes + text tools.

## What to do

1. Open `top-words.sh`, finish the `TODO` (the full pipeline is in the HINT)
2. Run: `bash top-words.sh FILE 3`
3. Tests: `pnpm exec bats 06-pipes`

## The pipeline, step by step

```
tr        lower case everything
grep -o   one word per line
sort      a-z order
uniq -c   count repeats: "  3 is"
sort      big count first, ties a-z
head      keep top N
awk       "  3 is" -> "is: 3"
```

## New words

* `|` = output of left becomes input of right
* `tr` = change letters. `grep -o` = print ONLY matches.
* `uniq -c` = count same lines (needs `sort` first!)
* `sort -k1,1nr` = sort by column 1, numbers, reverse
