# 07 - Bank Account

Your own bank! Deposit and withdraw money.

## What to learn

* `struct` + `impl` - data with methods
* `enum` - one of many options (`Deposit` or `Withdraw`)
* `&mut self` - change the data inside
* `Result` - `Ok` or `Err`
* `?` - if error, stop and return error. Very common in Rust jobs.

## What to do

1. Open `src/main.rs`
2. Finish `new`, `deposit`, `withdraw`, `apply`, `balance`
3. Run: `cargo run`, try: `deposit 500`, `withdraw 200`, `balance`, `quit`
4. Tests: `cargo test`

Money is in **cents**. $5.00 = 500. No float errors!

## Tasks

- [ ] Task 1: `deposit` ok, error if 0 or less
- [ ] Task 2: `withdraw` ok, error if 0 or less, error if no money
- [ ] Task 3: `apply` uses `match` on `Tx` enum
- [ ] Task 4 (bonus): max balance $1,000,000. Error if more.

## Example

```
> deposit 500
Ok. Balance: $5.00
> withdraw 700
Error: not enough money
```

## New words

* `struct` = your own data type
* `method` = function inside `impl`
* `mutable` = can change. `&mut self` means "I can change me"
