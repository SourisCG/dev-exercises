# Rust Learning Path 🦀

Hello! This is your plan to learn Rust.
Simple steps. 1-2 hours per day.

## How to use

Each folder is one exercise:

1. Read the `README.md` inside the folder
2. Open `src/main.rs`
3. Find `TODO` and write code
4. Run it: `cargo run`
5. Check it: `cargo test`
6. When it works, go to next exercise

```bash
cd rust/01-hello-input
cargo run
cargo test
```

## The exercises

### Phase 1 - Basics (Week 1-2) - DONE! ✅

- [x] `01-hello-input` - say hello, ask name. Learn `let`, `String`, `println!`
- [x] `02-calculator` - + - * /. Learn `fn`, `match`, `Result`
- [x] `03-temp-converter` - C to F. Learn functions + tests
- [x] `04-fizzbuzz` - 1 to 100. Learn `for`, `if`, `%`
- [x] `05-guess-number` - guess game. Learn `loop`, `rand` crate

### Phase 2 - Ownership (Week 3-4) - DO IT NOW! 💪

- [ ] `06-word-counter` - read file, count words. Learn `HashMap`, files, `&str` vs `String`
- [ ] `07-bank-account` - deposit, withdraw. Learn `struct`, `impl`, `enum`, `?`
- [ ] `08-todo-list` - add, list, done, remove. Learn `Vec`, menu loop
- [ ] `09-todo-json` - same app + save to `tasks.json`. Learn `serde`
- [ ] `10-mini-challenges` - 10 small functions. Fast practice: palindrome, prime, fibonacci, anagram, caesar, matrix...

### Phase 3 - Projects (Week 5-8) - coming next

- [ ] A. CLI Task Manager (your choice! after you finish 09)
- [ ] B. File Organizer
- [ ] C. Text Game
- [ ] D. Mini Web API

## Tip: run ONE test

In `10-mini-challenges` you can run only one test:

```bash
cargo test prime      # only tests with "prime" in the name
cargo test            # all tests
```

## Daily routine

* 20 min: read
* 40 min: code
* 20 min: write 3 lines in English about what you learned

Example learning diary in `MY-PROGRESS.md`:
> Today I learned Vec. Vec is a list. I can push items.

## Useful words

* `variable` = box for data. `let x = 5;`
* `function` = small machine. `fn add(a, b)`
* `compile` = Rust checks your code. `cargo build`
* `crate` = library / package
* `ownership` = who owns the data? Very important in Rust!

## Help

* Rust Book: https://doc.rust-lang.org/book/
* Rustlings: https://github.com/rust-lang/rustlings
* Ask me anytime!

Good luck! You can do it!
