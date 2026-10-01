#!/usr/bin/env bats

setup() {
  mkdir -p "$BATS_TEST_TMPDIR/work"
  touch "$BATS_TEST_TMPDIR/work/a.txt"
  touch "$BATS_TEST_TMPDIR/work/b.txt"
  touch "$BATS_TEST_TMPDIR/work/c.md"
}

@test "lists txt files sorted" {
  run bash "$BATS_TEST_DIRNAME/list-ext.sh" "$BATS_TEST_TMPDIR/work" txt
  [ "$status" -eq 0 ]
  [ "$output" = "$(printf 'a.txt\nb.txt')" ]
}

@test "no match prints nothing" {
  run bash "$BATS_TEST_DIRNAME/list-ext.sh" "$BATS_TEST_TMPDIR/work" rs
  [ "$status" -eq 0 ]
  [ "$output" = "" ]
}

@test "missing folder is error" {
  run bash "$BATS_TEST_DIRNAME/list-ext.sh" "$BATS_TEST_TMPDIR/nope" txt
  [ "$status" -eq 1 ]
}
