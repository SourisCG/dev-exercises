#!/usr/bin/env bash
# 06 - Top words: top-words.sh file.txt [N=5]
# Same idea as Rust 06, with pipes!
set -u

# TODO:
# 1. file="${1:-}". If [ -z "$file" ] or [ ! -f "$file" ]:
#      echo "Usage: top-words.sh FILE [N]" >&2; exit 1
# 2. n="${2:-5}"
# 3. One pipeline:
#      tr '[:upper:]' '[:lower:]' < "$file" |
#        grep -oE '[[:alnum:]]+' |
#        sort |
#        uniq -c |
#        sort -k1,1nr -k2,2 |
#        head -n "$n" |
#        awk '{print $2": "$1}'
# NOTE: ties broken by word (a-z), so output is ALWAYS the same. Tests need that!

echo "TODO: not done yet" >&2
exit 1
