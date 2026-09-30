// 03 - Lists and keys. Show a list. Filter it.
// Run: pnpm dev, open 03. Tests: pnpm test 03-list
import type { JSX } from 'react'

export interface Task {
  id: number
  title: string
  done: boolean
}

export type Filter = 'all' | 'open' | 'done'

// TODO: return tasks for the filter.
// 'all' -> all. 'open' -> done === false. 'done' -> done === true.
export function filterTasks(
  _tasks: readonly Task[],
  _filter: Filter,
): Task[] {
  throw new Error('TODO 03: filterTasks')
}

// TODO component:
//   Buttons "All", "Open", "Done". Click = change filter (useState, start 'all').
//   Show exactly "{n} tasks" in a <p> (example: "2 tasks").
//   <ul> with <li key={task.id}>{task.title}</li> for filtered tasks.
// HINT: key={...} helps React know which item is which. Always use id!
export function TaskFilter(_props: { tasks: Task[] }): JSX.Element {
  throw new Error('TODO 03: TaskFilter')
}
