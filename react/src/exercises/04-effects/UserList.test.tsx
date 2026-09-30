import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { UserList, userLabel } from './UserList'

describe('04 UserList', () => {
  it('labels users', () => {
    expect(userLabel({ id: 1, name: 'Leanne' })).toBe('1: Leanne')
  })

  it('loads and shows users', async () => {
    vi.stubGlobal(
      'fetch',
      async () =>
        ({
          ok: true,
          json: async () => [{ id: 1, name: 'Leanne' }],
        }) as unknown as Response,
    )
    try {
      render(<UserList />)
      expect(screen.getByText('Loading...')).toBeTruthy()
      expect(await screen.findByText('1: Leanne')).toBeTruthy()
    } finally {
      vi.unstubAllGlobals()
    }
  })

  it('shows error when offline', async () => {
    vi.stubGlobal('fetch', async () => {
      throw new Error('offline')
    })
    try {
      render(<UserList />)
      expect(await screen.findByText('Error: cannot load')).toBeTruthy()
    } finally {
      vi.unstubAllGlobals()
    }
  })
})
