// 02 - Interfaces. Shape of an object. Like Rust struct, but only shape.
// Run: pnpm test 02-inter

export interface User {
  readonly id: number;
  name: string;
  age: number;
  email?: string; // ? = may be missing
}

// TODO: "Ana (30) <ana@mail>" or "Bob (17)" when no email.
export function formatUser(_user: User): string {
  throw new Error("TODO 02: formatUser");
}

// TODO: true if user.age >= 18
export function isAdultUser(_user: User): boolean {
  throw new Error("TODO 02: isAdultUser");
}

// TODO: return a NEW user with the email. Do NOT change the original!
// HINT: return { ...user, email };
export function withEmail(_user: User, _email: string): User {
  throw new Error("TODO 02: withEmail");
}
