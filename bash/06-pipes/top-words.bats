#!/usr/bin/env bats

setup() {
  printf 'rust is fun\nbash is fun\nbash is fast\n' > "$BATS_TEST_TMPDIR/sample.txt"
}

@test "top 2 words" {
  run bash "$BATS_TEST_DIRNAME/top-words.sh" "$BATS_TEST_TMPDIR/sample.txt" 2
  [ "$status" -eq 0 ]
  [ "$output" = "$(printf 'is: 3\nbash: 2')" ]
}

@test "default top 5" {
  run bash "$BATS_TEST_DIRNAME/top-words.sh" "$BATS_TEST_TMPDIR/sample.txt"
  [ "$status" -eq 0 ]
  [ "$output" = "$(printf 'is: 3\nbash: 2\nfun: 2\nfast: 1\nrust: 1')" ]
}

@test "missing file is error" {
  run bash "$BATS_TEST_DIRNAME/top-words.sh" "$BATS_TEST_TMPDIR/nope.txt"
  [ "$status" -eq 1 ]
  run bash "$BATS_TEST_DIRNAME/top-words.sh"
  [ "$status" -eq 1 ]
}
