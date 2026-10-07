// 04 - Arrays and tuples.
// Run: pnpm test 04-array

// TODO: sum of all numbers. [] -> 0.
export function sum(_nums: number[]): number {
  let result = 0;
  for (let i = 0; i < _nums.length; i++) {
    result = result + _nums[i]
  }
  return result
}

// TODO: average. [] -> 0 (no crash!).
export function average(_nums: number[]): number {
  if (_nums[0] === undefined) {
    return 0
  }
  let sum = 0;
  for (let i = 0; i < _nums.length; i++) {
    sum = sum + _nums[i]
  }
  return sum / _nums.length
}

// TODO: remove repeats, keep order. [1, 2, 2, 3] -> [1, 2, 3].
// HINT: [...new Set(nums)]
export function unique(_nums: number[]): number[] {
  const uniqueNums = new Set(_nums);
  return [...uniqueNums];
}

// TODO: first number or undefined if empty.
// NOTE: readonly = "I will not change your list". Accepts more lists!
export function firstOrNull(_arr: readonly number[]): number | undefined {
  if (_arr === undefined) {
    return undefined
  }
  return _arr[0]
}

// Tuple = fixed list. [name, age]. Length and types are fixed!
// TODO: return [name, age].
export function makePair(_name: string, _age: number): [string, number] {
  const pair: [string, number] = [_name, _age];
  return pair
}

// TODO: return the age (second item).
export function secondOfPair(_pair: readonly [string, number]): number {
  return _pair[1]
}
