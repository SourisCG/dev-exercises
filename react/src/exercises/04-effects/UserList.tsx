// 04 - Effects and fetch. Load data from the internet.
// Run: pnpm dev, open 04. Tests: pnpm test 04-effect
import { useEffect, useState, type JSX } from 'react'

export interface UserRow {
  id: number
  name: string
}

// TODO: return "1: Leanne" for { id: 1, name: "Leanne" }.
export function userLabel(_u: UserRow): string {
  const { id, name } = _u
  return `${id}: ${name}`
}

// TODO component:
//   const [users, setUsers] = useState<UserRow[]>([])
//   const [state, setState] = useState<"loading" | "error" | "done">("loading")
//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((res) => { if (!res.ok) throw new Error("bad"); return res.json() })
//       .then((data) => { setUsers(data as UserRow[]); setState("done") })
//       .catch(() => setState("error"))
//   }, [])
//   state === "loading" -> <p>Loading...</p>
//   state === "error" -> <p>Error: cannot load</p>
//   else <ul> with userLabel(u) items.
// HINT: [] at the end = run once. No [] = run on EVERY show = infinite loop!
export function UserList(): JSX.Element {
  const [users, setUsers] = useState<UserRow[]>([])
  const [state, setState] = useState<"loading" | "error" | "done">("loading")

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        if (!res.ok) throw new Error("bad")
        return res.json()
      })
      .then((data) => {
        setUsers(data as UserRow[])
        setState("done")
      })
      .catch(() => setState("error"))
  }, [])

  if (state === "loading") return <p>Loading...</p>
  if (state === "error") return <p>Error: cannot load</p>
  return (
    <ul>
      {users.map((u) => (
        <li key={u.id}>{userLabel(u)}</li>
      ))}
    </ul>
  )
}
