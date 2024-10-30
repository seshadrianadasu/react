import React from 'react'
function Add() {
  return (
    <div className='container my-3 w-50'>
        
        <div className="mb-3 ">
            <label for="exampleFormControlInput1" className="form-label">Enter id</label>
            <input type="Id" class="form-control  " id="exampleFormControlInput1" placeholder="eg: 01"/>
        </div>
        <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">Enter name</label>
            <input type="Name" class="form-control" id="exampleFormControlInput1" placeholder="eg: seshadri"/>
        </div>
        <div class="mb-3">
            <label htmlForfor="exampleFormControlInput1" className="form-label">Enter email</label>
            <input type="email" className="form-control " id="exampleFormControlInput1" placeholder="eg: seshadri@gmail.com"/>

        </div>
       <button className='btn bg-success text-white container'>add</button>
    </div>
    
  )
}

export default Add