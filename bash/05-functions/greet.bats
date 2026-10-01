#!/usr/bin/env bats

@test "hello greets" {
  run bash "$BATS_TEST_DIRNAME/greet.sh" hello Ana
  [ "$status" -eq 0 ]
  [ "$output" = "Hello, Ana!" ]
}

@test "shout uppercases" {
  run bash "$BATS_TEST_DIRNAME/greet.sh" shout hi
  [ "$status" -eq 0 ]
  [ "$output" = "HI!" ]
}

@test "unknown command and missing name are error" {
  run bash "$BATS_TEST_DIRNAME/greet.sh" dance Ana
  [ "$status" -eq 1 ]
  run bash "$BATS_TEST_DIRNAME/greet.sh" hello
  [ "$status" -eq 1 ]
  run bash "$BATS_TEST_DIRNAME/greet.sh"
  [ "$status" -eq 1 ]
}
