import React from 'react'
import UseCustomHook from './UseCustomHook'

const Counter2 = () => {
    const [count, increment, decrement] = UseCustomHook(10)

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  )
}

export default Counter2
