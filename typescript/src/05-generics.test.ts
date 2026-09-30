import { describe, expect, it } from "vitest";
import { findById, first, identity, last, pluck, wrap } from "./05-generics";
import type { User } from "./02-interfaces";

const users: User[] = [
  { id: 1, name: "Ana", age: 30 },
  { id: 2, name: "Bob", age: 17 },
];

describe("05 generics", () => {
  it("identity returns same value", () => {
    expect(identity(5)).toBe(5);
    expect(identity("hi")).toBe("hi");
  });

  it("takes first and last", () => {
    expect(first([1, 2, 3])).toBe(1);
    expect(last([1, 2, 3])).toBe(3);
    expect(first([] as number[])).toBeUndefined();
    expect(last([] as number[])).toBeUndefined();
  });

  it("wraps in array", () => {
    expect(wrap(5)).toEqual([5]);
  });

  it("plucks one field", () => {
    expect(pluck(users, "name")).toEqual(["Ana", "Bob"]);
    expect(pluck(users, "age")).toEqual([30, 17]);
  });

  it("finds by id", () => {
    expect(findById(users, 2)?.name).toBe("Bob");
    expect(findById(users, 99)).toBeUndefined();
  });
});
