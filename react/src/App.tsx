import { useState } from 'react'
import { ErrorBoundary } from './components/ErrorBoundary'
import { ProfileCard } from './exercises/01-profile-card/ProfileCard'
import { Counter } from './exercises/02-state/Counter'
import { TaskFilter } from './exercises/03-list/TaskFilter'
import type { Task } from './exercises/03-list/TaskFilter'
import { UserList } from './exercises/04-effects/UserList'
import { NameSaver } from './exercises/05-hook/NameSaver'
import { TodoApp } from './exercises/06-todo/TodoApp'

const SAMPLE_TASKS: Task[] = [
  { id: 1, title: 'Buy milk', done: true },
  { id: 2, title: 'Learn React', done: false },
  { id: 3, title: 'Build Tauri app', done: false },
]

type PageId = '01' | '02' | '03' | '04' | '05' | '06'

const PAGES: Array<{ id: PageId; title: string; learn: string }> = [
  { id: '01', title: 'Profile Card', learn: 'components + props' },
  { id: '02', title: 'Counter', learn: 'useState + events' },
  { id: '03', title: 'Task Filter', learn: 'lists + keys' },
  { id: '04', title: 'User List', learn: 'useEffect + fetch' },
  { id: '05', title: 'Name Saver', learn: 'custom hook + localStorage' },
  { id: '06', title: 'Todo App', learn: 'full mini app (final!)' },
]

function Page({ id, onBack }: { id: PageId; onBack: () => void }) {
  const meta = PAGES.find((p) => p.id === id)
  return (
    <div>
      <button type="button" onClick={onBack}>
        ← Back
      </button>
      <h2>
        {id} - {meta?.title}
      </h2>
      <ErrorBoundary title={meta?.title ?? id}>
        {id === '01' && <ProfileCard name="Ada" age={36} />}
        {id === '02' && <Counter />}
        {id === '03' && <TaskFilter tasks={SAMPLE_TASKS} />}
        {id === '04' && <UserList />}
        {id === '05' && <NameSaver />}
        {id === '06' && <TodoApp />}
      </ErrorBoundary>
    </div>
  )
}

function App() {
  const [page, setPage] = useState<PageId | null>(null)

  if (page !== null) {
    return <Page id={page} onBack={() => setPage(null)} />
  }

  return (
    <div>
      <h1>React Exercises ⚛️</h1>
      <p>Open one exercise, finish the TODO, come back.</p>
      <ul>
        {PAGES.map((p) => (
          <li key={p.id}>
            <button type="button" onClick={() => setPage(p.id)}>
              Open {p.id}
            </button>{' '}
            <strong>{p.title}</strong> - {p.learn}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
