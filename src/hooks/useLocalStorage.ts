import { useEffect, useState } from 'react'

function useLocalStorage(key: string, initialValue?: any): any {
  const [value, setValue] = useState(() => {
    // Initially this will be null.
    const jsonValue = localStorage.getItem(key)

    // If not null then return the parsed value.
    // Return it to where? To the 'value' identifier at the top of useLocalStorage.
    if (jsonValue !== null) {
      return JSON.parse(jsonValue)
    }

    // If jsonValue is null (i.e., no key yet exists) then either run
    // the function that returns the initialValue, or return the initialValue.
    if (typeof initialValue === 'function') {
      return initialValue()
    }

    return initialValue
  })

  // Any time value changes, automatically update storage.
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])

  return [value, setValue]
}

export { useLocalStorage }
