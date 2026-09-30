import { cleanup } from '@testing-library/react'
import { afterEach } from 'vitest'

// Clean the fake browser page after each test.
afterEach(() => {
  cleanup()
})
