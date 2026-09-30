import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { filterTasks, TaskFilter } from './TaskFilter'
import type { Task } from './TaskFilter'

const TASKS: Task[] = [
  { id: 1, title: 'Milk', done: true },
  { id: 2, title: 'Rust', done: false },
]

describe('03 TaskFilter', () => {
  it('filters tasks', () => {
    expect(filterTasks(TASKS, 'all')).toHaveLength(2)
    expect(filterTasks(TASKS, 'open')).toEqual([TASKS[1]])
    expect(filterTasks(TASKS, 'done')).toEqual([TASKS[0]])
  })

  it('shows list and filters on click', () => {
    render(<TaskFilter tasks={TASKS} />)
    expect(screen.getByText('2 tasks')).toBeTruthy()
    fireEvent.click(screen.getByRole('button', { name: 'Done' }))
    expect(screen.getByText('1 tasks')).toBeTruthy()
    expect(screen.queryByText('Rust')).toBeNull()
    expect(screen.getByText('Milk')).toBeTruthy()
  })
})
