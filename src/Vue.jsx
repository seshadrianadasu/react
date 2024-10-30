import React from 'react'
import { useEffect,useState } from 'react'
import {Link} from 'react-router-dom'



function Vue() {
  const URL='https://jsonplaceholder.typicode.com/comments'
  const[data,setdata]=useState([]);
  const fetchUserData=async(apiURL)=>{
    const response=await fetch(apiURL);
    const data=await response.json();
    console.log(data)
    setdata(data);
  }
  useEffect(()=>{
    fetchUserData(URL);
  },[])
 
  return (
    <div>
      
        <Link to='/add'>
        <button className='btn bg-dark text-white  '>add+</button>
        </Link>
        
       <table className='table container my-2'>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>email</th>
            <th>edit/delete</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((user)=>{
              const{id,name,email}=user;
              return <tr key={id}>
                <td>{id}</td>
                <td>{name}</td>
                <td>{email}</td>
                <td>
                  <Link to='/edit'>
                  <button className='btn btn-warning text-white'> edit</button>
                  </Link>
                  /
                  <Link to='/delete'>
                  <button className='btn btn-danger text-dark'>delete</button>
                  </Link>
                </td>
                
              </tr>
            })
          }
        </tbody>
       </table>   
    </div>
  )
}

export default Vue