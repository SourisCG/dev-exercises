import { Component } from 'react'
import type { ReactNode } from 'react'

interface Props {
  title: string
  children: ReactNode
}

interface State {
  error: Error | null
}

// Catches a TODO crash and shows a friendly message.
// The menu stays alive, so you can always go Back.
export class ErrorBoundary extends Component<Props, State> {
  state: State = { error: null }

  static getDerivedStateFromError(error: Error): State {
    return { error }
  }

  render(): ReactNode {
    if (this.state.error) {
      return (
        <div>
          <h3>{this.props.title} is not done yet</h3>
          <p>Error: {this.state.error.message}</p>
          <p>Open the file and finish the TODO.</p>
        </div>
      )
    }
    return this.props.children
  }
}
