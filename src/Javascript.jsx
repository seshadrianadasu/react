import React from 'react'
import { useState,useEffect } from 'react'


function Javascript() {
  const[color,setcolor]=useState("red");
  const [about]=useState({
    name:"seshadri",
    age:23,
    from:"kapavaram",   
  })
  useEffect( ()=>{
    console.log("hello world")
  })

  return (
  <div className='container text-center ' >
    <h1> my name is {about.name}</h1>
    <p> age is {about.age}</p>
    <p>Iam from {about.from}</p>
    
   
     <h1>my favourate color is {color}</h1>
    <button className='btn bg success' onClick={()=>setcolor("blue")}>click me</button>
   
  </div>
    
  )
}

export default Javascript