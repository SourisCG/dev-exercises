// 08 - PUZZLE. 10 type errors. Fix them all!
// Run: pnpm typecheck:puzzle
// Goal: 0 errors. Do NOT use `any`. Change types AND code.
// Fix one error, run again. Repeat.
import type { User } from "../02-interfaces";

// ERROR 1: what type is n? Add it.
export function doubleIt(n: number) {
  return n * 2;
}

// ERROR 2: s can be undefined. Check first!
export function shoutIt(s: string | undefined): string {
  if(s === undefined){
    return "The parameter is undefined"
  }
  return s.toUpperCase();
}

// ERROR 3: wrong return type. "30" is not a number.
export function getAge(): number {
  return 30;
}

// ERROR 4: User needs id, name AND age.
export const baby: User = { id: 9, name: "Baby", age: 2 };

// ERROR 5: "two" is not a number.
export const ids: number[] = [1, 2, 3];

// ERROR 6: in strict mode, catch gives `unknown`. Check it!
export function messageOf(fn: () => void): string {
  try {
    fn();
    return "ok";
  } catch (e: unknown) {
    if (e instanceof Error) {
      return e.message;
    }
    return "An unknown error occurred";
  }
}

// ERROR 7: id is readonly. You cannot change it!
export function changeId(user: User): void {
  console.log("Before change:", user.id);
}

// ERROR 8: toFixed exists on number, not on string. Narrow first!
export function money(id: number): string {
  return id.toFixed(2);
}

// ERROR 9: tuple has 2 items, not 3.
export const pair: [string, number] = ["Ana", 30];

// ERROR 10: email can be missing. Return string ALWAYS.
export function getEmail(user: User): string {
  return user.email || "No email available";
}
