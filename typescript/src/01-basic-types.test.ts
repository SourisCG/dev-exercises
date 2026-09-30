import { describe, expect, it } from "vitest";
import { add, greet, isAdult, shout } from "./01-basic-types";

describe("01 basic types", () => {
  it("greets by name", () => {
    expect(greet("Ana")).toBe("Hello, Ana!");
    expect(greet("Bob")).toBe("Hello, Bob!");
  });

  it("adds numbers", () => {
    expect(add(2, 3)).toBe(5);
    expect(add(-1, 1)).toBe(0);
  });

  it("checks adult", () => {
    expect(isAdult(18)).toBe(true);
    expect(isAdult(30)).toBe(true);
    expect(isAdult(17)).toBe(false);
  });

  it("shouts", () => {
    expect(shout("hi")).toBe("HI!");
  });
});
