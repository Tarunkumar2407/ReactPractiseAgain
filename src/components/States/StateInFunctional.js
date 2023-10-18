import React, { useState } from 'react'

const StateInFunctional = () => {

    const [name, setName] = useState("Tarun");
    
    const handleName = () => {
        setName("Ravi")
    }

  return (
    <div>
      <h1>{name}</h1>
      <button onClick={handleName}>Update Name</button>
    </div>
  )
}

export default StateInFunctional
