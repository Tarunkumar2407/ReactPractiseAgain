import React,{ useState } from 'react'

const UseStatewithObject = () => {
    const [input, setInput] = useState({
        fName : "",
        lName : ""
    })
  return (
    <div>
      <input type='text' value={input.fName} placeholder='Enter first name' onChange={(e)=> setInput({...input, fName: e.target.value})}></input><br></br>
      <input type="text" value={input.lName} placeholder='Enter last name' onChange={(e)=> setInput({...input, lName: e.target.value})}></input>
      <h1>{input.fName}</h1>
      <h1>{input.lName}</h1>
    </div>
  )
}

export default UseStatewithObject
