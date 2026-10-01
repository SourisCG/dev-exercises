# 05 - Functions

Functions + `local` + subcommands.

## What to do

1. Open `greet.sh`. The main part is READY. Finish `greet` and `shout`.
2. Run: `bash greet.sh hello Ana`, `bash greet.sh shout hi`
3. Tests: `pnpm exec bats 05-functions`
4. Bonus: add a `bye` command: `greet.sh bye Ana` → `Bye, Ana!`

## New words

* `name() { ... }` = function. Call it with `name args`.
* `local x="$1"` = variable ONLY inside the function. Always use `local`!
* `return 1` = function error. `echo` = function output. Different things!
* `${1^^}` = UPPER CASE. `${1,,}` = lower case. Bash magic.
* `${2:-}` = "$2 or empty". Safe with `set -u`.
