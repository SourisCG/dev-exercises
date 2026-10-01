#!/usr/bin/env bash
# 05 - Functions + subcommands: greet.sh hello Ana / greet.sh shout hi
set -u

greet() {
  # TODO: print "Hello, $1!"
  echo "TODO: greet" >&2
  return 1
}

shout() {
  # TODO: print UPPERCASE + "!". HINT: echo "${1^^}!"
  echo "TODO: shout" >&2
  return 1
}

# Main is READY. It calls your functions.
case "${1:-}" in
  hello)
    if [ -z "${2:-}" ]; then echo "Usage: greet.sh hello NAME" >&2; exit 1; fi
    greet "$2"
    ;;
  shout)
    if [ -z "${2:-}" ]; then echo "Usage: greet.sh shout TEXT" >&2; exit 1; fi
    shout "$2"
    ;;
  *)
    echo "Usage: greet.sh hello NAME | shout TEXT" >&2
    exit 1
    ;;
esac
