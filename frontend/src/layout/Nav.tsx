import React, { useContext } from 'react'
import { TokenContext } from '../context/TokenProvider'
import NavUser from './NavUser'
import NavGuest from './NavGuest'
import { Outlet } from 'react-router-dom'
import { UserTypeContext } from '../context/UserTypeProvider'
import NavAdmin from './NavAdmin'

function Nav() {
  const { token } = useContext(TokenContext)
  const { userType } = useContext(UserTypeContext)
  return (
    <>
      {token ? (userType === 'User' ? <NavUser /> : <NavAdmin />) : <NavGuest />}
      <Outlet />
    </>
  )
}

export default Nav
