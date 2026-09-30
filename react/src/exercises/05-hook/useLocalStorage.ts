// 05 - Custom hook. Your own useState + superpower: save in the browser!
// Run: pnpm dev, open 05. Tests: pnpm test 05-hook
// localStorage = small box in the browser. Data lives after reload!

// TODO:
//   import { useState } from 'react'   (add this import!)
//   const [value, setValue] = useState<T>(() => {
//     try {
//       const saved = localStorage.getItem(key)
//       return saved === null ? initial : (JSON.parse(saved) as T)
//     } catch {
//       return initial
//     }
//   })
//   const save = (v: T) => { setValue(v); localStorage.setItem(key, JSON.stringify(v)) }
//   return [value, save]
export function useLocalStorage<T>(
  _key: string,
  _initial: T,
): [T, (v: T) => void] {
  throw new Error('TODO 05: useLocalStorage')
}
