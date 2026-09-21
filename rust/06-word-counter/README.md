# 06 - Word Counter

Read a file. Count words. Show top 5.

## What to learn

* `HashMap` - word -> number. Like a dictionary.
* `File` - read files with `fs::read_to_string`
* `&str` vs `String` - borrowed text vs owned text
* `entry` API - easy way to count
* `args` - read words after `cargo run`

## What to do

1. Open `src/main.rs`
2. Finish `count_words` and `top_words`
3. Run: `cargo run` (uses `sample.txt`)
4. Run: `cargo run myfile.txt` (your own file)
5. Tests: `cargo test`

## Tasks

- [ ] Task 1: `count_words` works. Lowercase. No `,` `.` `!` `?`
- [ ] Task 2: `top_words` returns top N, big number first
- [ ] Task 3 (bonus): show total words and % of top word

## Example

```
Total different words: 42
Total words: 150
Top 5:
  the: 12
  rust: 9
```

## New words

* `hashmap` = box with key -> value. Key is word, value is count.
* `ownership` = `String` owns text. `&str` only borrows it.
* `iterator` = go over items one by one. `.iter()`, `.values()`
