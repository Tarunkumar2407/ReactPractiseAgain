import React, { useState } from 'react'

const GetInputBoxValue = () => {
  const [value, setValue] = useState("")
  const [print, setPrint] = useState(false)
  return (
    <div>
    {
        print ? <h2>{value}</h2> : null
    }
    <input onChange={(e)=> setValue(e.target.value)} type='text'></input>
    <button onClick={() => setPrint(!print)}>Toggle</button>
    </div>
  )
}

export default GetInputBoxValue
