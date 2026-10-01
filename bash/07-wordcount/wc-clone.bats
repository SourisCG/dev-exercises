#!/usr/bin/env bats

setup() {
  printf 'hello world\nfoo bar baz\n' > "$BATS_TEST_TMPDIR/sample.txt"
}

@test "counts lines words chars" {
  run bash "$BATS_TEST_DIRNAME/wc-clone.sh" "$BATS_TEST_TMPDIR/sample.txt"
  [ "$status" -eq 0 ]
  [ "$output" = "2 5 24" ]
}

@test "matches real wc" {
  # Your script must agree with the real tool!
  run bash "$BATS_TEST_DIRNAME/wc-clone.sh" "$BATS_TEST_DIRNAME/wc-clone.sh"
  [ "$status" -eq 0 ]
  expected="$(wc "$BATS_TEST_DIRNAME/wc-clone.sh" | awk '{print $1, $2, $3}')"
  [ "$output" = "$expected" ]
}

@test "missing file is error" {
  run bash "$BATS_TEST_DIRNAME/wc-clone.sh" "$BATS_TEST_TMPDIR/nope.txt"
  [ "$status" -eq 1 ]
}
