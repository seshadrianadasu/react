import React, { useState } from 'react'


function Name() {
  const users=[
    {
        id:1,
        name:"seshadri",
        age:"23",
        email:"seshadri@gmail.com"
    } ,
    {
        id:2,
        name:"seshadri",
        age:"23",
        email:"seshadri@gmail.com"
    }
]
const [name,setname]=useState([
   "text is changed "
]
   
)
    return (
    <div>
        {
            users.map(
                (user)=>{
                    const {id,name,age,email}=user
                    return (
                    <div key={id}>
                        <h1>{id}</h1>
                        <h1>{name}</h1>
                        <h1>{age}</h1>
                        <h1>{email}</h1>
                    </div>)
                })}
                <h1>hello {name}</h1>
                <button onClick={()=>{setname("seshadri")}}>click me!</button>
    </div>
    )
    
}
export default Name