import React from 'react'
import Child from './Child'

const Parent = () => {
    function myFunc(data) {
        alert(data)
    }
  return (
    <div>
      <Child alert = {myFunc}/>
    </div>
  )
}

export default Parent
