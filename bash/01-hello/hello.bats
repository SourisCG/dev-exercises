#!/usr/bin/env bats

@test "says hello by name" {
  run bash "$BATS_TEST_DIRNAME/hello.sh" Ana
  [ "$status" -eq 0 ]
  [ "$output" = "Hello, Ana!" ]
}

@test "says hello to Bob too" {
  run bash "$BATS_TEST_DIRNAME/hello.sh" Bob
  [ "$status" -eq 0 ]
  [ "$output" = "Hello, Bob!" ]
}

@test "needs a name" {
  run bash "$BATS_TEST_DIRNAME/hello.sh"
  [ "$status" -eq 1 ]
}
