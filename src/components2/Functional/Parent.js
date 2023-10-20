import React from 'react'
import Child from './Child'

const Parent = () => {
    function passMe(){
        alert("I am passed to child")
    }
  return (
    <div>
      <Child name= "Tarun" func = {passMe}/>
    </div>
  )
}

export default Parent
