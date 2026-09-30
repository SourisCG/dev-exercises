# TypeScript Exercises 📘

8 exercises. Same idea as Rust: code with `TODO`, tests check you.

## Setup (one time)

```bash
cd typescript
pnpm install
```

## How to use

1. Open `src/01-basic-types.ts`
2. Find `TODO`, write code
3. Check types: `pnpm typecheck`
4. Run tests: `pnpm test`
5. Run ONE test file: `pnpm test 01-basic`
6. Watch mode (reruns on save): `pnpm test:watch`
7. Next file: `02`, `03`...

## The exercises

| # | File | You learn |
|---|------|-----------|
| 01 | `01-basic-types` | `string`, `number`, `boolean`, function types |
| 02 | `02-interfaces` | `interface`, `?` optional, `readonly`, new objects |
| 03 | `03-unions-narrowing` | `A \| B`, `typeof` check, `kind` field, `null` |
| 04 | `04-arrays-tuples` | `number[]`, `map/filter`, tuple `[string, number]` |
| 05 | `05-generics` | `<T>`, `keyof`, `extends` |
| 06 | `06-utility-types` | `Partial`, `Pick`, `Record` |
| 07 | `07-async-fetch` | `Promise`, `async/await`, `Promise.all`, timeout |
| 08 | `08-strict-puzzle` | Fix 10 type errors. `pnpm typecheck:puzzle` |

Rust days and TS days alternate. One day Rust, one day TypeScript.

## Rules

* `strict` is ON. The compiler is your teacher. Read red errors!
* `_name` means "not used yet". When you write the code, remove the `_`.
* `throw new Error("TODO")` keeps TypeScript happy until you write real code.
* Write tests green before next file.

## Useful words

* `interface` = shape of an object. Like Rust `struct` but only the shape.
* `union` = this OR that. `string | number`.
* `narrowing` = check what it really is. `typeof id === "number"`.
* `generic` = works with any type. `<T>` like a variable for types.
* `Promise` = value in the future. `async/await` waits for it.
