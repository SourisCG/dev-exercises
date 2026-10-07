// 06 - Utility types. Helpers that change other types.
// Run: pnpm test 06-util
import type { User } from "./02-interfaces";

// TODO: return user + changes. Do NOT change the original!
// updateUser(bob, { age: 18 }) -> new user, age 18.
// HINT: return { ...user, ...changes };
export function updateUser(_user: User, _changes: Partial<User>): User {
  return { ..._user, ..._changes };
}

// TODO: id -> name. [{id:1,name:"Ana"}] -> { 1: "Ana" }.
export function toNameMap(_users: readonly User[]): Record<number, string> {
  return _users.reduce<Record<number, string>>((map, user) => {
    map[user.id] = user.name;
    return map;
  }, {});
}

// TODO: return only name and email. { name, email }.
export function preview(_user: User): Pick<User, "name" | "email"> {
  return { name: _user.name, email: _user.email };
}

export type Role = "admin" | "user" | "guest";

// TODO: { admin: [], user: [], guest: [] }.
export function emptyPermissions(): Record<Role, string[]> {
  return { admin: [], user: [], guest: []}
}
