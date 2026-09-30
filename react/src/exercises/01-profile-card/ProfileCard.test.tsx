import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { ProfileCard } from './ProfileCard'

describe('01 ProfileCard', () => {
  it('shows name and age', () => {
    render(<ProfileCard name="Ada" age={36} />)
    expect(screen.getByText('Ada')).toBeTruthy()
    expect(screen.getByText('Age: 36')).toBeTruthy()
  })

  it('shows email or fallback', () => {
    const { rerender } = render(
      <ProfileCard name="Ada" age={36} email="ada@x.com" />,
    )
    expect(screen.getByText('ada@x.com')).toBeTruthy()
    rerender(<ProfileCard name="Ada" age={36} />)
    expect(screen.getByText('no email')).toBeTruthy()
  })
})
