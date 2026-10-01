#!/usr/bin/env bats

@test "fizzbuzz to 15" {
  run bash "$BATS_TEST_DIRNAME/fizzbuzz.sh" 15
  [ "$status" -eq 0 ]
  [ "$output" = "$(printf '1\n2\nFizz\n4\nBuzz\nFizz\n7\n8\nFizz\nBuzz\n11\nFizz\n13\n14\nFizzBuzz')" ]
}

@test "n=1 prints 1" {
  run bash "$BATS_TEST_DIRNAME/fizzbuzz.sh" 1
  [ "$status" -eq 0 ]
  [ "$output" = "1" ]
}

@test "bad args are error" {
  run bash "$BATS_TEST_DIRNAME/fizzbuzz.sh"
  [ "$status" -eq 1 ]
  run bash "$BATS_TEST_DIRNAME/fizzbuzz.sh" 0
  [ "$status" -eq 1 ]
  run bash "$BATS_TEST_DIRNAME/fizzbuzz.sh" abc
  [ "$status" -eq 1 ]
}
