import React from 'react'
import UseCustomHook from './UseCustomHook'

const Counter = () => {
    const [count, increment, decrement] = UseCustomHook(0)
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => increment()}>Increament</button>
      <button onClick={() => decrement()}>Decrement</button>
    </div>
  )
}

export default Counter
