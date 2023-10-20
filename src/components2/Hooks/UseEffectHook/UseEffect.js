import React, { useEffect, useState } from 'react'

const UseEffect = () => {
    const [count, setCount] = useState(0)
    useEffect(()=> {
        console.log("useEffect")
        const id = setTimeout(() => {
            setCount((count)=> count + 1)
        },1000)
        return () => clearTimeout(id);
    }, [])

  return (
    <div>
      <h1>{count}</h1>
    </div>
  )
}

export default UseEffect
