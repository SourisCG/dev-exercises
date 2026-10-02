// 01 - Basic types. Annotate everything!
// Run: pnpm test 01-basic

// TODO: return "Hello, Ana!"
export function greet(_name: string): string {
  return `Hello, ${_name}!`;
}

// TODO: return a + b
export function add(_a: number, _b: number): number {
  return _a + _b;
}

// TODO: true if age >= 18
export function isAdult(_age: number): boolean {
  return _age >= 18;
}

// TODO: UPPER CASE + "!". "hi" -> "HI!"
// HINT: text.toUpperCase()
export function shout(_text: string): string {
  return _text.toUpperCase() + "!";
}
