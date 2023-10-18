import React from 'react'
import Student from './Student'

const PassFunction = () => {
    function apple() {
        alert("function from parent component")
    }
  return (
    <div>
      <Student data = {apple}/>
    </div>
  )
}

export default PassFunction
