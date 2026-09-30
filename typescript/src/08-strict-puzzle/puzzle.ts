// 08 - PUZZLE. 10 type errors. Fix them all!
// Run: pnpm typecheck:puzzle
// Goal: 0 errors. Do NOT use `any`. Change types AND code.
// Fix one error, run again. Repeat.
import type { User } from "../02-interfaces";

// ERROR 1: what type is n? Add it.
export function doubleIt(n) {
  return n * 2;
}

// ERROR 2: s can be undefined. Check first!
export function shoutIt(s: string | undefined): string {
  return s.toUpperCase();
}

// ERROR 3: wrong return type. "30" is not a number.
export function getAge(): number {
  return "30";
}

// ERROR 4: User needs id, name AND age.
export const baby: User = { id: 9, name: "Baby" };

// ERROR 5: "two" is not a number.
export const ids: number[] = [1, "two", 3];

// ERROR 6: in strict mode, catch gives `unknown`. Check it!
export function messageOf(fn: () => void): string {
  try {
    fn();
    return "ok";
  } catch (e) {
    return e.message;
  }
}

// ERROR 7: id is readonly. You cannot change it!
export function changeId(user: User): void {
  user.id = 99;
}

// ERROR 8: toFixed exists on number, not on string. Narrow first!
export function money(id: string | number): string {
  return id.toFixed(2);
}

// ERROR 9: tuple has 2 items, not 3.
export const pair: [string, number] = ["Ana", 30, true];

// ERROR 10: email can be missing. Return string ALWAYS.
export function getEmail(user: User): string {
  return user.email;
}
