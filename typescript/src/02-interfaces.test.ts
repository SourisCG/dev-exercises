import { describe, expect, it } from "vitest";
import { formatUser, isAdultUser, withEmail, type User } from "./02-interfaces";

const ana: User = { id: 1, name: "Ana", age: 30, email: "ana@mail.com" };
const bob: User = { id: 2, name: "Bob", age: 17 };

describe("02 interfaces", () => {
  it("formats with email", () => {
    expect(formatUser(ana)).toBe("Ana (30) <ana@mail.com>");
  });

  it("formats without email", () => {
    expect(formatUser(bob)).toBe("Bob (17)");
  });

  it("checks adult user", () => {
    expect(isAdultUser(ana)).toBe(true);
    expect(isAdultUser(bob)).toBe(false);
  });

  it("adds email without changing original", () => {
    const withMail = withEmail(bob, "bob@mail.com");
    expect(withMail.email).toBe("bob@mail.com");
    expect(bob.email).toBeUndefined();
  });
});
