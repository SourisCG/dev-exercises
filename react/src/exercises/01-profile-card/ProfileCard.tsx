// 01 - Components and props. A component is a function that returns HTML.
// Props = input of the component. Like function arguments.
// Run: pnpm dev, open 01. Tests: pnpm test 01-profile
import type { JSX } from 'react'

export interface ProfileProps {
  name: string
  age: number
  email?: string
}

// TODO: show:
//   <h2> with the name
//   <p> with exactly "Age: {age}"  (example: "Age: 36")
//   <p> with the email, or exactly "no email" when missing
export function ProfileCard(_props: ProfileProps): JSX.Element {
  throw new Error('TODO 01: ProfileCard')
}
