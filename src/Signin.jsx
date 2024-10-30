import React from 'react'
import Signup from './Signup'

function Signin() {
    const obj={name:"seshadri"}
  return (
    <div>
        <h1>
          name is {obj.name}
        </h1>
        <Signup/>  
    </div>
  )
}

export default Signin