import React, {memo} from 'react'

const Child = () => {
    console.log("Child Component")
  return (
    <div>
      
    </div>
  )
}

export default memo(Child)
