import React from 'react'
import { Link } from 'react-router-dom'

function NavGuest() {
  return (
    <nav className="nav nav-guest">
      <div className="nav-logo">
        <Link to="/">🏨 StayFinder</Link>
      </div>
      <ul className="nav-links">
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/signup">Sign Up</Link></li>
      </ul>
    </nav>
  )
}

export default NavGuest