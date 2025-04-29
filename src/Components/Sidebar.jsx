import React from 'react'
import './Sidebar.css'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    return (
        <>

            <div className="Sidebar">

                <div>

                    <div>

                        <h1>NBA Alliance</h1>

                        <label htmlFor="Hamburger">
                            <img src="/Xmark.svg" height={"100%"} width={"100%"} />
                        </label>

                    </div>

                    <ul>
                        <li><Link to={'/Home'} >Home</Link></li>
                        <li><Link>About</Link></li>
                        <li><Link>Services</Link></li>
                        <li><Link>Services</Link></li>
                        <li><Link to={'/Login'}>Log In</Link> </li>
                        <li><Link to={'/'}>Sign Up</Link></li>
                    </ul>

                </div>

            </div>

        </>
    )
}

export default Sidebar
