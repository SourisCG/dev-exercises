# 01 - Hello

Variables + echo + arguments.

## What to do

1. Open `hello.sh`, finish the `TODO`
2. Check syntax: `bash -n hello.sh`
3. Run: `bash hello.sh Ana` → `Hello, Ana!`
4. Tests: `pnpm exec bats 01-hello` (from `bash/`)

## New words

* `$1` = first word after the script. `$0` = the script name!
* `$#` = how many words. `[ $# -eq 0 ]` = "no words?"
* `>&2` = print to error channel, not normal output
* Always quote: `"$1"`. Test: `bash hello.sh "Ana Maria"` - with quotes it works!
