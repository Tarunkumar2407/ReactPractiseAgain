import React, { useState } from "react"

const FunctionalComponent = () => {
    const [data, setData] = useState(0)
    const handleState = () => {
        setData(data + 1)
    }
    console.log("re-render")
    return (
        <>
        <h1>{data}</h1>
          <button onClick={handleState}>Click Me</button>
        </>
        
    )
}

export default FunctionalComponent