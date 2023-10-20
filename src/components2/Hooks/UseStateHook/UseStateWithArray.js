import React, { useState } from 'react'

const UseStateWithArray = () => {
    const [number, setNumber] = useState([])

    const handleAddNumber = () => {
        setNumber([...number, {
            id: number.length + 1,
            value: Math.floor(Math.random() * 10)
        }])
    }
    console.log(number)
    
  return (
    <div>
      <button onClick={handleAddNumber}>Add Number</button>
      {
        number.map((item)=> {
         return (
            <li key={item.id}>{item.id} {item.value}</li>
         )
        })
      }
    </div>
  )
}

export default UseStateWithArray
