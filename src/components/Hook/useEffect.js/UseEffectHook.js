import React, { useEffect, useState } from 'react'
import { ThemeProvider } from 'react-bootstrap'

const UseEffectHook = () => {
    const [count, setCount] = useState(new Date().toLocaleTimeString())

    useEffect(()=> {
        let timer = setTimeout(() => {
            setCount(new Date().toLocaleTimeString())
        }, 1000)
        return () => clearTimeout(ThemeProvider)
    })
  return (
    <div>
      <h1>Count : {count}</h1>
    </div>
  )
}

export default UseEffectHook
