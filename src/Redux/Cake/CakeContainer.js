import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import buyCake from './CakeAction'
import buyIceCream from '../IceCream/IceCreamAction'

const CakeContainer = () => {
  const [number, setNumber] = useState(1)
    const numOfCakes = useSelector(state => state.cake.NumberOfCakes)
    const numOfIceCream = useSelector(state => state.icecream.NumberOfIceCream)

    console.log(numOfCakes)
    const dispatch = useDispatch()
  return (
    <div>
      <h2>Number of Cakes : {numOfCakes}</h2>
      <h2>Number of Cakes : {numOfIceCream}</h2>
      <button onClick={()=>dispatch(buyCake())}>Buy Cakes</button>
      <button onClick={()=>dispatch(buyIceCream())}>Buy IceCream</button>

      <input type='text' onChange={(e)=> setNumber(e.target.value)}></input>
      <button onClick={()=>dispatch(buyCake(number))}>Buy {number} Cakes</button>
    </div>
  )
}

export default CakeContainer
