import React, { useState } from 'react'

const UseStateWithArray2 = () => {
    const [name, setName] = useState("")
    const [arr, setArr] = useState([])
    const handleAddElementToArray = () => {
        setArr([...arr, {
            id: arr.length,
            value: name
        }])
    }
  return (
    <div>
      <input type='text' placeholder='Enter any name' onChange={(e) => setName(e.target.value)}></input>
      <button onClick={handleAddElementToArray}>Add Task</button>
      {
        arr.map((item) => {
            return (
                <li key={item.id}>{item.value}</li>
            )
        })
      }
    </div>
  )
}

export default UseStateWithArray2
