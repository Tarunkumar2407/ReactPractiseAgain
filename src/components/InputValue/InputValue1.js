import React, { useState } from 'react'

const InputValue1 = () => {

    const [data, setData] = useState("")
    const [print, setPrint] = useState(false)
    const handleInput = (e) => {
          setData(e.target.value)
    }
  return (
    <div>
    {
        print ? <h1>{data}</h1> : null
    }
      
      <input type='text' onChange={handleInput}></input>
      <button onClick={()=> setPrint(!print)}>Toggle</button>
    </div>
  )
}

export default InputValue1
