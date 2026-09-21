# 10 - Mini Challenges

10 small functions. One project. Fast practice.

## What to learn

* slices `&[i32]` - look at a list without owning it
* `Option` - `Some` value or `None`
* iterators - `filter`, `map`, `sum`, `chars`, `rev`
* `chars` - letters, not bytes. Important for `ñ`, `é`!

## What to do

1. Open `src/main.rs`
2. Do functions 1 to 10, in order. Easy first.
3. Test ONE function: `cargo test palindrome`
4. Test ALL: `cargo test`
5. NOTE: `cargo run` stops (panic) until all 10 are done. Normal! Use `cargo test` to check.

## The 10

| # | Function | Example |
|---|----------|---------|
| 1 | `is_palindrome` | "racecar" -> true, "hello" -> false |
| 2 | `reverse_string` | "hola" -> "aloh" |
| 3 | `count_vowels` | "hello" -> 2 (e, o). Big + small. |
| 4 | `is_prime` | 7 -> true, 8 -> false, 0 and 1 -> false |
| 5 | `fibonacci` | fib(0)=0, fib(1)=1, fib(10)=55 |
| 6 | `min_max` | [3,1,2] -> Some((1,3)). Empty -> None |
| 7 | `sum_even` | [1,2,3,4] -> 6 |
| 8 | `is_anagram` | "listen" + "silent" -> true |
| 9 | `caesar_cipher` | "abc"+1 -> "bcd". "xyz"+2 -> "zab". Keep A-Z, keep `,!?` |
| 10 | `transpose` | [[1,2],[3,4]] -> [[1,3],[2,4]]. Rows become columns. |

## Tasks

- [ ] 1-3: strings easy
- [ ] 4-5: numbers
- [ ] 6-7: slices
- [ ] 8-10: hard ones (sort, letters math, matrix)

When all green, Phase 2 is DONE!
