# 04 - FizzBuzz

Loops + conditions + arithmetic.

## What to do

1. Open `fizzbuzz.sh`, finish the `TODO`
2. Run: `bash fizzbuzz.sh 15`
3. Tests: `pnpm exec bats 04-loops`

## New words

* `for ((i = 1; i <= n; i++))` = count from 1 to n
* `$((i % 15))` = remainder. `%` like other languages.
* `[[ "$x" =~ ^[0-9]+$ ]]` = "is x a number?" (regex check!)
* `elif` = "else if". Shorter than `else if`.
