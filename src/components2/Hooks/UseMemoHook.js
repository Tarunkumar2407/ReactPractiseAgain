import React, { useState, useMemo } from 'react'

const UseMemoHook = () => {
    const [count, setCount] = useState(0)
    const [item, setItem] = useState(100)
    const multiply = useMemo(() => {
        console.log("useMemo")
        return count * 2;
    }, [count])
  return (
    <div>
      <h1>useMemo Hook</h1>
      <h2>{multiply}</h2>
      <h2>Count : {count}</h2>
      <h2>Item : {item}</h2>
      <button onClick={()=> setCount(count + 1)}>Update Count</button>
      <button onClick={()=> setItem(item + 10)}>Update Items</button>
    </div>
  )
}

export default UseMemoHook
