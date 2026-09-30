import { describe, expect, it } from "vitest";
import { area, firstChar, formatId, unwrap } from "./03-unions-narrowing";

describe("03 unions and narrowing", () => {
  it("formats ids", () => {
    expect(formatId(7)).toBe("num-7");
    expect(formatId("abc")).toBe("str-abc");
  });

  it("calculates area", () => {
    expect(area({ kind: "square", side: 3 })).toBe(9);
    expect(area({ kind: "circle", radius: 1 })).toBeCloseTo(Math.PI);
  });

  it("unwraps result", () => {
    expect(unwrap({ ok: true, value: 42 }, 0)).toBe(42);
    expect(unwrap({ ok: false, error: "boom" }, 0)).toBe(0);
  });

  it("takes first char safely", () => {
    expect(firstChar("hello")).toBe("h");
    expect(firstChar(null)).toBe("");
    expect(firstChar(undefined)).toBe("");
    expect(firstChar("")).toBe("");
  });
});
