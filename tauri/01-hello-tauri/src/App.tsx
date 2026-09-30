import { useState } from "react";

// TODO: call the Rust command "greet" with { name }.
// Step 1: add this import at the top:
//   import { invoke } from "@tauri-apps/api/core";
// Step 2: return invoke<string>("greet", { name });
async function callGreet(_name: string): Promise<string> {
  throw new Error("TODO: call invoke greet");
}

export default function App() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  async function onGreet() {
    try {
      setMessage(await callGreet(name));
    } catch (e) {
      setMessage(`Error: ${String(e)}`);
    }
  }

  return (
    <main style={{ padding: 24, fontFamily: "sans-serif" }}>
      <h1>Hello Tauri 👋</h1>
      <p>Button (TypeScript) → function (Rust) → message back.</p>
      <input
        type="text"
        placeholder="Your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />{" "}
      <button type="button" onClick={onGreet}>
        Greet from Rust
      </button>
      <p>{message}</p>
    </main>
  );
}
