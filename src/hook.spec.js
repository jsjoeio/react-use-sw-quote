import { renderHook, act } from '@testing-library/react-hooks'
import { useStarWarsQuote } from './'
import expectExport from 'expect'

describe('useStarWarsQuote', () => {
  test('should return an object with the keys: loading, quote', () => {
    const { result } = renderHook(() => useStarWarsQuote())
    // console.log(result, 'here is the result')
    // should have key for quote
    // should have key for loading
    const keys = Object.keys(result)
    expect(keys).toHaveLength(2)
    // expect(keys).toEqual(['loading', 'quote'])
  })

  test('should set loading to true after initial call', () => {
    // const { result } = renderHook(() => useStarWarsQuote())

    // expect(result.loading)
    // add tests here
  })

  test('should return a quote and set loading to false', async () => {
    const { result } = renderHook(() => useStarWarsQuote())
    const { loading, quote } = result.current
    expect(loading).toBe(true)
    act(() => {
      const value = result.current.quote
      console.log(value, 'value inside act')
    })
    console.log(quote, 'what is the quote')
    // expect(quote)
    // add tests here
  })
})
