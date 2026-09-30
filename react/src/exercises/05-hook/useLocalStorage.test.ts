import { act, renderHook } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { useLocalStorage } from './useLocalStorage'

describe('05 useLocalStorage', () => {
  it('starts with initial and saves', () => {
    localStorage.clear()
    const { result, unmount } = renderHook(() => useLocalStorage('name', ''))
    expect(result.current[0]).toBe('')
    act(() => {
      result.current[1]('Ana')
    })
    expect(result.current[0]).toBe('Ana')
    expect(localStorage.getItem('name')).toBe('"Ana"')
    unmount()
    const second = renderHook(() => useLocalStorage('name', ''))
    expect(second.result.current[0]).toBe('Ana')
    second.unmount()
  })

  it('reads bad data safely', () => {
    localStorage.clear()
    localStorage.setItem('broken', '{oops')
    const { result, unmount } = renderHook(() =>
      useLocalStorage('broken', 'fallback'),
    )
    expect(result.current[0]).toBe('fallback')
    unmount()
  })
})
