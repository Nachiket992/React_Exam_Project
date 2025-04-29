import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>

    <input id='Hamburger' type="checkbox" defaultChecked />

      <nav>
        
        <h1>NBA Alliance</h1>

        <ul>
            <li><Link to={'/Home'} >Home</Link></li>
            <li><Link>About</Link></li>
            <li><Link>Services</Link></li>
            <li><Link>Services</Link></li>
            <li><Link to={'/Login'}>Log In</Link> </li>
            <li><Link to={'/'}>Sign Up</Link></li>
        </ul>

        <label htmlFor="Hamburger">
            <img src="/Hamburger.svg" height={"100%"} width={"100%"} />
        </label>

      </nav>
    </>
  )
}

export default Navbar
