import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { TodoApp } from './TodoApp'

function addTodo(title: string) {
  fireEvent.change(screen.getByPlaceholderText('New task'), {
    target: { value: title },
  })
  fireEvent.click(screen.getByRole('button', { name: 'Add' }))
}

describe('06 TodoApp', () => {
  it('adds a task', () => {
    render(<TodoApp />)
    addTodo('Milk')
    expect(screen.getByText('Milk')).toBeTruthy()
  })

  it('ignores empty text', () => {
    render(<TodoApp />)
    fireEvent.click(screen.getByRole('button', { name: 'Add' }))
    expect(screen.queryByRole('checkbox')).toBeNull()
  })

  it('toggles and deletes', () => {
    render(<TodoApp />)
    addTodo('Milk')
    const box = screen.getByRole('checkbox') as HTMLInputElement
    expect(box.checked).toBe(false)
    fireEvent.click(box)
    expect(box.checked).toBe(true)
    fireEvent.click(screen.getByRole('button', { name: 'Delete' }))
    expect(screen.queryByText('Milk')).toBeNull()
  })

  it('filters open and done', () => {
    render(<TodoApp />)
    addTodo('Milk')
    addTodo('Rust')
    fireEvent.click(screen.getAllByRole('checkbox')[0])
    fireEvent.click(screen.getByRole('button', { name: 'Done' }))
    expect(screen.getByText('Milk')).toBeTruthy()
    expect(screen.queryByText('Rust')).toBeNull()
    fireEvent.click(screen.getByRole('button', { name: 'Open' }))
    expect(screen.getByText('Rust')).toBeTruthy()
    expect(screen.queryByText('Milk')).toBeNull()
  })
})
