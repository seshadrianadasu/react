import React from 'react'
import { Link,Outlet } from 'react-router-dom'
import blog from '../src/assets/image.png'
import 'bootstrap-icons/font/bootstrap-icons.css'
function Menu() {
  return (
  <div>
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark container p-2 my-2 rounded '>
      <span>
        <img src={blog} alt="no img" style={{width:'40px',height:'40px'}} className='rounded-circle p-1'/>
      </span>
      <button className='navbar-toggler' type="button" data-bs-toggle="collapse" data-bs-target='#navbarmenu'>
      <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse " id='navbarmenu'>
        <ul className='navbar-nav ms-auto  gap-2'>
          <li className="nav-item ">
            <Link  className="nav-link gap-2"to="/Javascript"><i className='bi bi-house'></i> Javascript</Link>
          </li>
          <li className="nav-item">
            <Link  className="nav-link"to="/Angular">Angular</Link>
          </li>
          <li className="nav-item">
            <Link  className="nav-link" to="/Vue">Vue</Link>
          </li>
          <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdownMenulink" role="button" data-bs-toggle="dropdown" >
            Details
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenulink">
            <li><Link className="dropdown-item" to="/details/name">Name</Link></li>
            <li><Link className="dropdown-item" to="/details/signup">Sign up</Link></li>
            <li><Link className="dropdown-item" to="/details/signin">Sign in</Link></li>
          </ul>
        </li>
        </ul>
      </div>
    </nav>
    <Outlet/>
    </div>
  )
}
export default Menu