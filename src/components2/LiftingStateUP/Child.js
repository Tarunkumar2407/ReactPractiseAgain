import React from 'react'

const Child = (props) => {
    const data = "Tarun"
  return (
    <div>
      <button onClick={() => props.func(data)}>Click Me</button>
    </div>
  )
}

export default Child
