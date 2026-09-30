// 04 - Effects and fetch. Load data from the internet.
// Run: pnpm dev, open 04. Tests: pnpm test 04-effect
import type { JSX } from 'react'

export interface UserRow {
  id: number
  name: string
}

// TODO: return "1: Leanne" for { id: 1, name: "Leanne" }.
export function userLabel(_u: UserRow): string {
  throw new Error('TODO 04: userLabel')
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
  throw new Error('TODO 04: UserList')
}
