import { useEffect, useState } from "react";
import { invoke } from "@tauri-apps/api/core";

interface Task {
  id: number;
  title: string;
  done: boolean;
}

type Filter = "all" | "open" | "done";

// ---- TODO: talk to Rust. One function at a time! ----

// READY: list all tasks.
async function apiList(): Promise<Task[]> {
  return invoke<Task[]>("list_tasks");
}

// TODO: add a task. Returns the new task with its id.
// HINT: return invoke<Task>("add_task", { title });
async function apiAdd(_title: string): Promise<Task> {
  throw new Error("TODO: apiAdd");
}

// TODO: flip done. Returns the changed task.
// HINT: return invoke<Task>("toggle_task", { id });
async function apiToggle(_id: number): Promise<Task> {
  throw new Error("TODO: apiToggle");
}

// TODO: delete a task.
// HINT: await invoke("delete_task", { id });
async function apiDelete(_id: number): Promise<void> {
  throw new Error("TODO: apiDelete");
}

// ---- Window below is READY. No TODO here. ----

export default function App() {
  const [todos, setTodos] = useState<Task[]>([]);
  const [text, setText] = useState("");
  const [filter, setFilter] = useState<Filter>("all");
  const [error, setError] = useState("");

  async function refresh() {
    try {
      setTodos(await apiList());
      setError("");
    } catch (e) {
      setError(String(e));
    }
  }

  useEffect(() => {
    void refresh();
  }, []);

  async function onAdd() {
    if (text.trim() === "") return;
    try {
      await apiAdd(text.trim());
      setText("");
      await refresh();
    } catch (e) {
      setError(String(e));
    }
  }

  async function onToggle(id: number) {
    try {
      await apiToggle(id);
      await refresh();
    } catch (e) {
      setError(String(e));
    }
  }

  async function onDelete(id: number) {
    try {
      await apiDelete(id);
      await refresh();
    } catch (e) {
      setError(String(e));
    }
  }

  const shown = todos.filter((t) =>
    filter === "all" ? true : filter === "open" ? !t.done : t.done,
  );

  return (
    <main style={{ padding: 24, fontFamily: "sans-serif" }}>
      <h1>Todo Desktop 📝</h1>
      <p>React window + Rust brain. Tasks live in a real file!</p>
      <input
        type="text"
        placeholder="New task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />{" "}
      <button type="button" onClick={onAdd}>
        Add
      </button>{" "}
      <button type="button" onClick={() => setFilter("all")}>
        All
      </button>{" "}
      <button type="button" onClick={() => setFilter("open")}>
        Open
      </button>{" "}
      <button type="button" onClick={() => setFilter("done")}>
        Done
      </button>
      {error !== "" && <p>Error: {error}</p>}
      <ul>
        {shown.map((t) => (
          <li key={t.id}>
            <input
              type="checkbox"
              checked={t.done}
              onChange={() => onToggle(t.id)}
            />{" "}
            {t.title}{" "}
            <button type="button" onClick={() => onDelete(t.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </main>
  );
}
