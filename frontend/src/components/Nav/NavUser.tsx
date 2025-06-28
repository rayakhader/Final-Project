import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { TokenContext } from '../../context/TokenProvider';

function NavUser() {
  const navigate = useNavigate();
  const { setToken } = useContext(TokenContext)

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userType');
    setTimeout(() => {
      setToken(null)
      navigate('/login');
    }, 2000)
  }

  return (
    <nav className="nav nav-user">
      <div className="nav-logo">
        <Link to="/">🏨 StayFinder</Link>
      </div>
      <ul className="nav-links">
        <li><Link to="/bookings">My Bookings</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><button onClick={handleLogout}>Logout</button></li>
      </ul>
    </nav>
  )
}

export default NavUser
