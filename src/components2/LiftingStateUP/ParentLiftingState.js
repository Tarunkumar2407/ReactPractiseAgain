import React from 'react'
import Child from './Child'

const ParentLiftingState = () => {
  
    function parent(data){
        alert(data)
    }
  return (
    <div>
      <Child func = {parent}/>
    </div>
  )
}

export default ParentLiftingState
