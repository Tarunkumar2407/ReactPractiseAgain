import React, { useState } from 'react'

const Variables = () => {

    const [name, setName] = useState({
        fName : "",
        lName : ""
    })
    return (
    <div>

      <input type='text' value={name.fName} onChange={(e) => setName({...name, fName : e.target.value})}></input>
      <input type='text' value={name.lName} onChange={(e) => setName({...name, lName : e.target.value})}></input>
      <h2>{name.fName}</h2>
      <h2>{name.lName}</h2>
    </div>
  )
}

export default Variables
