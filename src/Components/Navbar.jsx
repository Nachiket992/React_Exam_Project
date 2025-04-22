import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <>

    <input id='Hamburger' type="checkbox" />

      <nav>
        
        <h1>NBA Alliance</h1>

        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Services</li>
            <li>Log In</li>
            <li>Sign Up</li>
        </ul>

        <label htmlFor="Hamburger">
            <img src="/Hamburger.svg" height={"100%"} width={"100%"} />
        </label>

      </nav>
    </>
  )
}

export default Navbar
