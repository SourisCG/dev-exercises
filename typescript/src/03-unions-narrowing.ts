// 03 - Unions and narrowing. This OR that. Then check what it really is.
// Run: pnpm test 03-union

export type Id = string | number;

// TODO: number 7 -> "num-7". string "abc" -> "str-abc".
// HINT: if (typeof id === "number") { ... }
export function formatId(_id: Id): string {
  if (typeof _id === "number") {
    return `num-${_id}`;
  }

  return `str-${_id}`;
}

export type Circle = { kind: "circle"; radius: number };
export type Square = { kind: "square"; side: number };
export type Shape = Circle | Square;

// TODO: circle -> PI * r * r. square -> side * side.
// HINT: switch (shape.kind) { case "circle": ... }
export function area(_shape: Shape): number {
  let area;
  switch (_shape.kind) {
    case "circle":
      area = 3.1416 * _shape.radius ** 2
      return area
    case "square":
      area = _shape.side * _shape.side
      return area
    default:
      throw new Error("The argument is no valid")
  }
}

export type OkResult = { ok: true; value: number };
export type ErrResult = { ok: false; error: string };
export type MyResult = OkResult | ErrResult;

// TODO: ok -> value. error -> fallback.
// HINT: if (r.ok) { return r.value; } TypeScript learns from the check!
export function unwrap(_r: MyResult, _fallback: number): number {
  if (_r.ok) {
    return _r.value;
  }

  return _fallback;
}

// TODO: null, undefined or "" -> "". Else first letter.
// HINT: if (!s) return "";
export function firstChar(_s: string | null | undefined): string {
  if(!_s) { return "" } else { return _s[0] }
}
