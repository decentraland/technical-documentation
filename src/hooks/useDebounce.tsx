import { useEffect, useState } from 'react'

export const useDebounce = (value, delay) => {
  const [deboucedValue, setDebouncedValue] = useState()
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    return () => {
      clearTimeout(handler)
    }
  }, [value, delay])

  return deboucedValue
}
