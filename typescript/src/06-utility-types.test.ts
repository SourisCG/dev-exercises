import { describe, expect, it } from "vitest";
import {
  emptyPermissions,
  preview,
  toNameMap,
  updateUser,
  type Role,
} from "./06-utility-types";
import type { User } from "./02-interfaces";

const bob: User = { id: 2, name: "Bob", age: 17 };

describe("06 utility types", () => {
  it("updates without changing original", () => {
    const older = updateUser(bob, { age: 18 });
    expect(older.age).toBe(18);
    expect(bob.age).toBe(17);
  });

  it("maps id to name", () => {
    expect(toNameMap([bob])).toEqual({ 2: "Bob" });
    expect(toNameMap([])).toEqual({});
  });

  it("previews name and email", () => {
    expect(preview({ ...bob, email: "b@mail.com" })).toEqual({
      name: "Bob",
      email: "b@mail.com",
    });
  });

  it("makes empty permissions", () => {
    const p = emptyPermissions();
    const roles: Role[] = ["admin", "user", "guest"];
    for (const r of roles) {
      expect(p[r]).toEqual([]);
    }
  });
});
