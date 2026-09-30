# React Exercises ⚛️

One Vite app. Home menu with 6 exercises.

## Setup (one time)

```bash
cd react
pnpm install
```

## How to use

```bash
pnpm dev          # open http://localhost:5173, click an exercise
pnpm test         # all tests
pnpm test 01      # one exercise only
pnpm test:watch   # rerun on save
pnpm typecheck    # TypeScript check
pnpm build        # production build
```

1. `pnpm dev`, open exercise 01
2. Open its file in `src/exercises/`, finish the `TODO`
3. Page updates alone (HMR). If you see "not done yet", the TODO threw - normal!
4. `pnpm test` green → next exercise

## The exercises

| # | Folder | You learn |
|---|--------|-----------|
| 01 | `01-profile-card` | components + props |
| 02 | `02-state` | `useState` + events |
| 03 | `03-list` | lists + `key`, filter |
| 04 | `04-effects` | `useEffect` + `fetch`, loading/error/done |
| 05 | `05-hook` | custom hook + `localStorage` |
| 06 | `06-todo` | full mini app (final!) |

`src/components/ErrorBoundary.tsx` catches TODO crashes so the menu never dies.

## Useful words

* `component` = function that returns HTML
* `props` = input of the component
* `state` = value React remembers (`useState`)
* `effect` = work after show (`useEffect`)
* `hook` = `use...` function with superpower
* `HMR` = page updates alone on save, no reload
