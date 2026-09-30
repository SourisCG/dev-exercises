import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Counter } from './Counter'

describe('02 Counter', () => {
  it('starts at 0 and counts', () => {
    render(<Counter />)
    expect(screen.getByText('Count: 0')).toBeTruthy()
    fireEvent.click(screen.getByRole('button', { name: '+1' }))
    fireEvent.click(screen.getByRole('button', { name: '+1' }))
    expect(screen.getByText('Count: 2')).toBeTruthy()
    fireEvent.click(screen.getByRole('button', { name: '-1' }))
    expect(screen.getByText('Count: 1')).toBeTruthy()
  })

  it('resets', () => {
    render(<Counter />)
    fireEvent.click(screen.getByRole('button', { name: '+1' }))
    fireEvent.click(screen.getByRole('button', { name: 'Reset' }))
    expect(screen.getByText('Count: 0')).toBeTruthy()
  })
})
