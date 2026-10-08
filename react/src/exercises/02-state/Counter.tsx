// 02 - State and events. useState remembers a value. Click = event.
// Run: pnpm dev, open 02. Tests: pnpm test 02-state
import type { JSX } from "react";
import { useState } from "react";

// TODO:
//   import { useState } from 'react'   (add this import!)
//   const [count, setCount] = useState(0)
//   Show exactly "Count: {count}" in a <p>
//   Button "+1" -> setCount(count + 1)
//   Button "-1" -> setCount(count - 1)
//   Button "Reset" -> setCount(0)
// HINT: <button type="button" onClick={() => setCount(count + 1)}>+1</button>
export function Counter(): JSX.Element {
  const [count, setCount] = useState(0);
  return (
    <>
      <p>Count: {count}</p>
      <button type="button" onClick={() => setCount(count + 1)}>
        +1
      </button>
      <button type="button" onClick={() => setCount(count - 1)}>
        -1
      </button>
      <button type="button" onClick={() => setCount(0)}>
        Reset
      </button>
    </>
  );
}
