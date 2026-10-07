// 05 - Generics. <T> = a variable for types. Works with ANY type.
// Run: pnpm test 05-gener

// TODO: return the same value. Works with number, string, anything.
export function identity<T>(_value: T): T {
  return _value
}

// TODO: first item or undefined.
export function first<T>(_arr: readonly T[]): T | undefined {
  if(_arr[0] === undefined){
    return undefined
  }
  return _arr[0]
}

// TODO: last item or undefined.
export function last<T>(_arr: readonly T[]): T | undefined {
  if (_arr.at(-1) === undefined) {
    return undefined
  }
  return _arr.at(-1)
}

// TODO: put value in a list. 5 -> [5].
export function wrap<T>(_value: T): T[] {
  const list = [_value]
  return list
}

// TODO: take one field from each item.
// pluck(users, "name") -> ["Ana", "Bob"].
// HINT: items.map((item) => item[key])
export function pluck<T, K extends keyof T>(
  _items: readonly T[],
  _key: K,
): T[K][] {
  const items = _items.map((_items) => _items[_key])
  return items
}

// TODO: find item with id, or undefined.
// T extends { id: number } = "T must have a number id".
export function findById<T extends { id: number }>(
  _items: readonly T[],
  _id: number,
): T | undefined {
  const item = _items.find(_items => _items.id === _id)
  return item
}
