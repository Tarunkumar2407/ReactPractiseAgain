import React, { useState } from 'react'

const UseCustomHook = (initialValue = 0) => {

  const [count, setCount] = useState(initialValue)

  function increment() {
    setCount(count + 1)
  }
  function decrement() {
    setCount(count - 1)
  }

  return [count, increment, decrement]
  
}

export default UseCustomHook
