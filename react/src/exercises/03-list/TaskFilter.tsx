// 03 - Lists and keys. Show a list. Filter it.
// Run: pnpm dev, open 03. Tests: pnpm test 03-list
import { useState, type JSX } from "react";

export interface Task {
  id: number;
  title: string;
  done: boolean;
}

export type Filter = "all" | "open" | "done";

// TODO: return tasks for the filter.
// 'all' -> all. 'open' -> done === false. 'done' -> done === true.
export function filterTasks(_tasks: readonly Task[], _filter: Filter): Task[] {
  switch (_filter) {
    case "all":
      const tasks = _tasks;
      return [...tasks];
    case "open":
      return _tasks.filter((task) => !task.done);
    case "done":
      return _tasks.filter((task) => task.done);
  }
}

// TODO component:
//   Buttons "All", "Open", "Done". Click = change filter (useState, start 'all').
//   Show exactly "{n} tasks" in a <p> (example: "2 tasks").
//   <ul> with <li key={task.id}>{task.title}</li> for filtered tasks.
// HINT: key={...} helps React know which item is which. Always use id!
export function TaskFilter(_props: { tasks: Task[] }): JSX.Element {
  const { tasks } = _props;
  const [filter, setFilter] = useState<Filter>("all");
  const filteredTasks = filterTasks(tasks, filter);
  return (
    <>
      <p>{filteredTasks.length} tasks</p>
      <button type="button" onClick={() => setFilter("all")}>
        All
      </button>
      <button type="button" onClick={() => setFilter("open")}>
        Open
      </button>
      <button type="button" onClick={() => setFilter("done")}>
        Done
      </button>
      <ul>
        {filteredTasks.map((task) => (
          <li key={task.id}>{task.title}</li>
        ))}
      </ul>
    </>
  );
}
