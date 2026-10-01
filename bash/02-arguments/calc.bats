#!/usr/bin/env bats

@test "adds" {
  run bash "$BATS_TEST_DIRNAME/calc.sh" 5 + 3
  [ "$status" -eq 0 ]
  [ "$output" = "8" ]
}

@test "subtracts and multiplies" {
  run bash "$BATS_TEST_DIRNAME/calc.sh" 5 - 8
  [ "$status" -eq 0 ]
  [ "$output" = "-3" ]
  run bash "$BATS_TEST_DIRNAME/calc.sh" 2 "*" 3
  [ "$status" -eq 0 ]
  [ "$output" = "6" ]
}

@test "divides" {
  run bash "$BATS_TEST_DIRNAME/calc.sh" 7 / 2
  [ "$status" -eq 0 ]
  [ "$output" = "3" ]
}

@test "divide by zero is error" {
  run bash "$BATS_TEST_DIRNAME/calc.sh" 5 / 0
  [ "$status" -eq 1 ]
}

@test "unknown op and bad args are error" {
  run bash "$BATS_TEST_DIRNAME/calc.sh" 5 ? 3
  [ "$status" -eq 1 ]
  run bash "$BATS_TEST_DIRNAME/calc.sh" 5 +
  [ "$status" -eq 1 ]
}
