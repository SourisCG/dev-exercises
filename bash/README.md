# Bash Exercises 🐚

8 exercises. Scripts with `TODO`, bats tests check you.

## Setup (one time)

```bash
cd bash
pnpm install
```

## How to use

```bash
pnpm test                    # all exercises
pnpm exec bats 01-hello      # one exercise only
bash -n 01-hello/hello.sh    # check syntax (no run!)
bash 01-hello/hello.sh Ana   # run by hand
```

1. Open `01-hello/hello.sh`, finish the `TODO`
2. Check syntax: `bash -n hello.sh`
3. Run tests: `pnpm exec bats 01-hello`
4. Green → next folder

## The exercises

| # | Folder | You learn |
|---|--------|-----------|
| 01 | `01-hello` | variables, `echo`, `$1`, quotes |
| 02 | `02-arguments` | `$#`, `case`, exit codes |
| 03 | `03-files` | `-f`, `-d`, loops over files |
| 04 | `04-loops` | `for`, `if`, arithmetic |
| 05 | `05-functions` | functions, `local`, subcommands |
| 06 | `06-pipes` | `grep`, `sort`, `uniq`, pipes |
| 07 | `07-wordcount` | PROJECT: clone of `wc` (no `wc` allowed!) |
| 08 | `08-todo` | PROJECT: todo.sh with file save |

## Rules

* `set -u` is ON in every script = error on empty variables. Strict like TypeScript!
* `"$name"` with quotes. NEVER `$name` naked (spaces break it!).
* `exit 0` = good. `exit 1` = error.
* `>&2` = error message goes to stderr, not normal output.

## Useful words

* `variable` = box for text. `name="Ana"`
* `argument` = word after the script. `hello.sh Ana` → `$1` is `Ana`
* `exit code` = number when script ends. 0 = ok.
* `pipe` = output of one tool becomes input of next. `a | b | c`
* `bats` = test tool for bash. `run` runs, `$status` and `$output` check.
