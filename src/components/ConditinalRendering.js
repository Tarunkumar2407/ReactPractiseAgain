import React, { useState } from 'react'

const ConditinalRendering = () => {

    const [loggedIn, setLoggedIn] = useState(0)
  return (
    <div>
      <h1>conditional rendering</h1>
      {
        loggedIn === 0 ? <h1>Welcome Tarun</h1> :loggedIn === 1 ? <h1>Welcome Ravi </h1>  : <h1>Welcome User</h1>
      }
      <button onClick={() => setLoggedIn(loggedIn + 1)}>loggin</button>
    </div>
  )
}

export default ConditinalRendering
