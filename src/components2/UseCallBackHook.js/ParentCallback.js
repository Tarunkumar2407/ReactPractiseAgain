import React, { useCallback, useState } from 'react'
import Child from './Child'

const ParentCallback = () => {
    const [count, setCount] = useState(0)

    const learning = useCallback(() => {
        console.log("learning")
    },[])
  return (
    <div>
      <Child learning = { learning }/>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>Add</button>
    </div>
  )
}

export default ParentCallback
