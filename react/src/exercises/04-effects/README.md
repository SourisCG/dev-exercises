# 04 - User List

`useEffect` + `fetch`.

## What to do

1. Open `UserList.tsx`
2. Finish `userLabel` first
3. Finish the `UserList` component (the `useEffect` code is in the HINT)
4. See it: `pnpm dev` → Open 04 (needs internet!)
5. Check: `pnpm test 04-effect` (tests use FAKE internet, no wifi needed)

## Rules

* Show exactly `Loading...` first
* Error shows exactly `Error: cannot load`
* `useEffect(..., [])` - the `[]` means "run once"!

## New words

* `effect` = work after show. Load data, start timer...
* `fetch` = ask the internet for data. Returns a Promise.
* `loading / error / done` = the 3 states of every load. Always handle all 3!
