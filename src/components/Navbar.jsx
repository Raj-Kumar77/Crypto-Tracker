import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <Link className="navbar-brand mx-auto fw-bolder" style={{fontSize:'40px'}} to="/">Crypto<span className='text-primary'>Journal</span></Link>
            </div>
        </nav>
    )
}

export default Navbar
