import { describe, expect, it } from "vitest";
import {
  delay,
  greetLater,
  loadAll,
  loadNames,
  makeUserApi,
  withTimeout,
} from "./07-async-fetch";

describe("07 async", () => {
  it("delays", async () => {
    await delay(10);
  });

  it("greets later", async () => {
    await expect(greetLater("Ana", 10)).resolves.toBe("Hello, Ana!");
  });

  it("loads all in order", async () => {
    const result = await loadAll([
      async () => 1,
      async () => 2,
      async () => 3,
    ]);
    expect(result).toEqual([1, 2, 3]);
  });

  it("times out slow work", async () => {
    await expect(withTimeout(delay(5), 100)).resolves.toBeUndefined();
    await expect(withTimeout(delay(100), 5)).rejects.toThrow("timeout");
  });

  it("loads names from fake api", async () => {
    const api = makeUserApi();
    await expect(loadNames(api, [1, 2])).resolves.toEqual(["Ana", "Bob"]);
    await expect(loadNames(api, [99])).rejects.toThrow("no user 99");
  });
});
