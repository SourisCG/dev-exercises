#!/usr/bin/env bats

setup() {
  export TODO_FILE="$BATS_TEST_TMPDIR/tasks.txt"
}

@test "add and list" {
  run bash "$BATS_TEST_DIRNAME/todo.sh" add "Buy milk"
  [ "$status" -eq 0 ]
  [ "$output" = "Added 1" ]
  run bash "$BATS_TEST_DIRNAME/todo.sh" add "Learn bash"
  [ "$output" = "Added 2" ]
  run bash "$BATS_TEST_DIRNAME/todo.sh" list
  [ "$status" -eq 0 ]
  [ "$output" = "$(printf '[ ] 1: Buy milk\n[ ] 2: Learn bash')" ]
}

@test "done marks with x" {
  bash "$BATS_TEST_DIRNAME/todo.sh" add "Buy milk" > /dev/null
  run bash "$BATS_TEST_DIRNAME/todo.sh" done 1
  [ "$status" -eq 0 ]
  [ "$output" = "Done 1" ]
  run bash "$BATS_TEST_DIRNAME/todo.sh" list
  [ "$output" = "$(printf '[x] 1: Buy milk')" ]
}

@test "remove deletes" {
  bash "$BATS_TEST_DIRNAME/todo.sh" add "Buy milk" > /dev/null
  run bash "$BATS_TEST_DIRNAME/todo.sh" remove 1
  [ "$status" -eq 0 ]
  [ "$output" = "Removed 1" ]
  run bash "$BATS_TEST_DIRNAME/todo.sh" list
  [ "$output" = "(empty)" ]
}

@test "bad ids and bad commands are error" {
  run bash "$BATS_TEST_DIRNAME/todo.sh" done 99
  [ "$status" -eq 1 ]
  run bash "$BATS_TEST_DIRNAME/todo.sh" remove 99
  [ "$status" -eq 1 ]
  run bash "$BATS_TEST_DIRNAME/todo.sh" dance
  [ "$status" -eq 1 ]
  run bash "$BATS_TEST_DIRNAME/todo.sh" add ""
  [ "$status" -eq 1 ]
}
