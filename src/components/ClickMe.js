import React from 'react'

const ClickMe = () => {
    const name = "Tarun";
    const handleClick = () => {
        alert("i am clicked")
    }
  return (
    <div>
      <h1>My name is {name}</h1>
      <h2>{4+2}</h2>
      <button onClick={() => handleClick()}>click me</button>
    </div>
  )
}

export default ClickMe


