# 05 - Guess Number Game

Fun game! Computer thinks 1-100. You guess.

## What to learn

* `loop` - repeat
* `rand` crate - random numbers
* `Ordering` - Less, Greater, Equal
* `break` - stop loop

## How to play

```
I think of a number 1-100. Guess!
> 50
Too small!
> 75
Too big!
> 63
You win in 3 tries!
```

## What to do

1. First time: `cargo run` downloads `rand`. Wait a little.
2. Play the game.
3. Open `src/main.rs`, read the code. Understand `loop`, `match`.
4. TODO tasks:
   - Count tries
   - Max 10 tries? If no win in 10, game over.
   - Bonus: difficulty. Easy 1-50, Hard 1-200.

## Tasks

- [ ] Task 1: Play and win one time
- [ ] Task 2: Show number of tries
- [ ] Task 3 (bonus): Add max tries = 10

## New words

* `guess` = try to say the number
* `random` = computer chooses, you don't know
* `ordering` = compare: smaller, bigger, equal
