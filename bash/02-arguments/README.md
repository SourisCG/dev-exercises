# 02 - Calculator

Arguments + `case` + exit codes.

## What to do

1. Open `calc.sh`, finish the `TODO`
2. Run: `bash calc.sh 5 + 3` → `8`
3. Tests: `pnpm exec bats 02-arguments`

## Rules

* Exactly 3 arguments or usage error
* `+ - * /`. Integer math: `7 / 2` = `3` (no decimals!)
* Divide by zero = error, exit 1
* `*` must be quoted: `bash calc.sh 2 "*" 3` (else bash eats it!)

## New words

* `case` = choose one option. Like `match` in Rust.
* `$(( 5 + 3 ))` = math. Result is `8`.
* `exit 1` = "something is wrong".
