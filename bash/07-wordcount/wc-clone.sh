#!/usr/bin/env bash
# 07 - PROJECT: clone of `wc`. NO wc allowed! Use a read loop.
# Usage: wc-clone.sh file  ->  "LINES WORDS CHARS"
set -u

# TODO:
# 1. Need 1 arg + file exists. Else: echo "Usage: wc-clone.sh FILE" >&2; exit 1
# 2. lines=0; words=0; chars=0
# 3. while IFS= read -r line || [ -n "$line" ]; do
#      lines=$((lines + 1))
#      for w in $line; do words=$((words + 1)); done   # $line NOT quoted: split on purpose!
#      chars=$((chars + ${#line} + 1))                  # +1 = the Enter key
#    done < "$file"
# 4. echo "$lines $words $chars"
echo "TODO: not done yet" >&2
exit 1
