#!/usr/bin/env bash
# 04 - FizzBuzz 1..N. Same game as Rust 04, now in bash!
set -u

# TODO:
# 1. Need 1 arg, a number bigger than 0:
#      if [[ ! "${1:-}" =~ ^[0-9]+$ ]] || [ "${1:-0}" -le 0 ]; then
#        echo "Usage: fizzbuzz.sh N (N > 0)" >&2
#        exit 1
#      fi
# 2. n="$1"; for ((i = 1; i <= n; i++)); do
#      if [ $((i % 15)) -eq 0 ]; then echo "FizzBuzz"
#      elif [ $((i % 3)) -eq 0 ]; then echo "Fizz"
#      elif [ $((i % 5)) -eq 0 ]; then echo "Buzz"
#      else echo "$i"; fi
#    done
echo "TODO: not done yet" >&2
exit 1
