// 05 - Generics. <T> = a variable for types. Works with ANY type.
// Run: pnpm test 05-gener

// TODO: return the same value. Works with number, string, anything.
export function identity<T>(_value: T): T {
  throw new Error("TODO 05: identity");
}

// TODO: first item or undefined.
export function first<T>(_arr: readonly T[]): T | undefined {
  throw new Error("TODO 05: first");
}

// TODO: last item or undefined.
export function last<T>(_arr: readonly T[]): T | undefined {
  throw new Error("TODO 05: last");
}

// TODO: put value in a list. 5 -> [5].
export function wrap<T>(_value: T): T[] {
  throw new Error("TODO 05: wrap");
}

// TODO: take one field from each item.
// pluck(users, "name") -> ["Ana", "Bob"].
// HINT: items.map((item) => item[key])
export function pluck<T, K extends keyof T>(
  _items: readonly T[],
  _key: K,
): T[K][] {
  throw new Error("TODO 05: pluck");
}

// TODO: find item with id, or undefined.
// T extends { id: number } = "T must have a number id".
export function findById<T extends { id: number }>(
  _items: readonly T[],
  _id: number,
): T | undefined {
  throw new Error("TODO 05: findById");
}
