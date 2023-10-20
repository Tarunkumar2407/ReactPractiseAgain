import React from 'react'

const Child = ({name, func}) => {
  return (
    <div>
      <h1>Hello {name}</h1>
      <button onClick={func}>Click Me</button>
    </div>
  )
}

export default Child

