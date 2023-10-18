import React from 'react'

const Child = (props) => {

    const data = "data from child"
  return (
    <div>
      <h2>Hi i am child</h2>
     <button onClick={() => props.alert(data)}>call function</button>
    </div>
  )
}

export default Child
