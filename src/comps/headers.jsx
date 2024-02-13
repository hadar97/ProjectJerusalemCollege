import React from 'react'
import {Link} from "react-router-dom"
import "../App.css"
const Header = () => {
  return (
<>
<header  style={{width:"1100px"}} className="container-fluid  navbar navbar-expand bg-dark ">
    <div className="container"style={{width:"100%"}}>
        <div className="row align-items-center">
            <div className='col-auto'>
                <h2 className='text-white'>CV Creator</h2>
            </div>
            <nav className='nav-col-auto  navbar-nav p-0'>
                <ul className='d-flex '>
                    <li className='nav-item'><Link className='m-3  text-light' to="/">Home</Link></li>
                    <li><Link className='m-3 text-light ' to="/Login" > Login</Link></li>
                    <li><Link  className='m-3  text-light'to="/Logout"> Logout</Link></li>
                    <li><Link  className='m-3  text-light 'to="/Signup" > signUp</Link></li>
                    <li><Link  className='m-3  text-light 'to="/showYourData" > showYourData</Link></li>
                </ul>
            </nav>
        </div>
    </div>
</header>
</>
  )
}

export default Header