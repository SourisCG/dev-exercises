import { describe, expect, it } from "vitest";
import {
  average,
  firstOrNull,
  makePair,
  secondOfPair,
  sum,
  unique,
} from "./04-arrays-tuples";

describe("04 arrays and tuples", () => {
  it("sums", () => {
    expect(sum([1, 2, 3])).toBe(6);
    expect(sum([])).toBe(0);
  });

  it("averages", () => {
    expect(average([2, 4])).toBe(3);
    expect(average([])).toBe(0);
  });

  it("removes repeats", () => {
    expect(unique([1, 2, 2, 3, 1])).toEqual([1, 2, 3]);
  });

  it("takes first or undefined", () => {
    expect(firstOrNull([5, 6])).toBe(5);
    expect(firstOrNull([])).toBeUndefined();
  });

  it("makes and reads pairs", () => {
    expect(makePair("Ana", 30)).toEqual(["Ana", 30]);
    expect(secondOfPair(["Bob", 17])).toBe(17);
  });
});
