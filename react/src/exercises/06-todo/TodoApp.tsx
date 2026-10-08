// 06 - Todo App. FINAL! All you learned in one app.
// Run: pnpm dev, open 06. Tests: pnpm test 06-todo
import { useState, type JSX } from 'react'

// TODO:
//   import { useState } from 'react'   (add this import!)
//   type Todo = { id: number; title: string; done: boolean }
//   const [todos, setTodos] = useState<Todo[]>([])
//   const [text, setText] = useState("")
//   const [filter, setFilter] = useState<"all" | "open" | "done">("all")
//   Input: placeholder "New task", value={text}, onChange setText.
//   Button "Add": if text is empty, do nothing! Else add { id: Date.now(), title: text, done: false }, clear input.
//   Buttons "All", "Open", "Done" change the filter.
//   List: checkbox toggles done, "Delete" button removes.
//   Reuse the idea from exercise 03 for the filter!
export function TodoApp(): JSX.Element {
  type Todo = { id: number; title: string; done: boolean }
  const [todos, setTodos] = useState<Todo[]>([])
  const [text, setText] = useState("")
  const [filter, setFilter] = useState<"all" | "open" | "done">("all")

  const filteredTodos = todos.filter((todo) => {
    switch (filter) {
      case "all":
        return true
      case "open":
        return !todo.done
      case "done":
        return todo.done
    }
  })

  return (
    <div>
      <input
        placeholder="New task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        type="button"
        onClick={() => {
          if (text.trim() === "") return
          setTodos([...todos, { id: Date.now(), title: text, done: false }])
          setText("")
        }}
      >
        Add
      </button>
      <div>
        <button type="button" onClick={() => setFilter("all")}>
          All
        </button>
        <button type="button" onClick={() => setFilter("open")}>
          Open
        </button>
        <button type="button" onClick={() => setFilter("done")}>
          Done
        </button>
      </div>
      <ul>
        {filteredTodos.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.done}
              onChange={() =>
                setTodos(
                  todos.map((t) =>
                    t.id === todo.id ? { ...t, done: !t.done } : t
                  )
                )
              }
            />
            {todo.title}
            <button
              type="button"
              onClick={() =>
                setTodos(todos.filter((t) => t.id !== todo.id))
              }
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
