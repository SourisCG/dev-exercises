# 03 - Task Filter

Lists + keys.

## What to do

1. Open `TaskFilter.tsx`
2. Finish `filterTasks` first (`pnpm test 03-list` for that part)
3. Finish the `TaskFilter` component
4. See it: `pnpm dev` → Open 03

## Rules

* Buttons say exactly `All`, `Open`, `Done`
* Show exactly `2 tasks`, `1 tasks`...
* `<li key={task.id}>` - always `key` with id!

## New words

* `key` = id of the HTML item. Helps React update fast.
* `filter` = keep only some items.
