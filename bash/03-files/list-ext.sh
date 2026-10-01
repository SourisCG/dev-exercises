#!/usr/bin/env bash
# 03 - List files with an extension: list-ext.sh DIR EXT
set -u

# TODO:
# 1. Need 2 args. Else: echo "Usage: list-ext.sh DIR EXT" >&2; exit 1
# 2. dir="$1"; ext="$2". If [ ! -d "$dir" ]: echo "Not a folder: $dir" >&2; exit 1
# 3. List basenames, sorted:
#      shopt -s nullglob
#      for f in "$dir"/*."$ext"; do basename "$f"; done | sort
# NOTE: nullglob = empty folder gives nothing (not the "*.txt" text!).
echo "TODO: not done yet" >&2
exit 1
