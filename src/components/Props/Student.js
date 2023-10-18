import React, { useState } from 'react'

const Student = (props) => {
 console.log(props)
  return (
    <div>
    <button onClick={props.data}>Call function</button>
    </div>
  )
}

export default Student
