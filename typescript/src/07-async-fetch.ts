// 07 - Async. Promise = value in the future. await = wait for it.
// Run: pnpm test 07-async
import type { User } from "./02-interfaces";

// TODO: wait ms milliseconds, then finish.
// HINT: return new Promise((resolve) => setTimeout(resolve, ms));
export function delay(_ms: number): Promise<void> {
  throw new Error("TODO 07: delay");
}

// TODO: wait ms, then return "Hello, <name>!"
export function greetLater(_name: string, _ms: number): Promise<string> {
  throw new Error("TODO 07: greetLater");
}

// TODO: run ALL tasks, return ALL results in order.
// HINT: return Promise.all(tasks.map((t) => t()));
export function loadAll<T>(
  _tasks: Array<() => Promise<T>>,
): Promise<T[]> {
  throw new Error("TODO 07: loadAll");
}

// TODO: return work's value. If work takes more than ms, reject Error("timeout").
// HINT: return Promise.race([work, delay(ms).then(() => { throw new Error("timeout"); })]);
export function withTimeout<T>(_work: Promise<T>, _ms: number): Promise<T> {
  throw new Error("TODO 07: withTimeout");
}

// Fake server. No internet needed. Tests use this.
export function makeUserApi() {
  const db: Record<number, User> = {
    1: { id: 1, name: "Ana", age: 30 },
    2: { id: 2, name: "Bob", age: 17 },
  };
  return {
    async fetchUser(id: number): Promise<User> {
      await delay(10);
      const user = db[id];
      if (!user) {
        throw new Error(`no user ${id}`);
      }
      return user;
    },
  };
}
export type UserApi = ReturnType<typeof makeUserApi>;

// TODO: load all names. loadNames(api, [1, 2]) -> ["Ana", "Bob"].
// HINT: const users = await Promise.all(ids.map((id) => api.fetchUser(id)));
//       return users.map((u) => u.name);
export function loadNames(_api: UserApi, _ids: number[]): Promise<string[]> {
  throw new Error("TODO 07: loadNames");
}
