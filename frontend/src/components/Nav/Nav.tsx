import React, { useContext } from 'react'
import { TokenContext } from '../../context/TokenProvider'
import NavUser from './NavUser'
import NavGuest from './NavGuest'
import './nav.css'

function Nav() {
    const {token} = useContext(TokenContext)
  return (
    token? <NavUser /> : <NavGuest />
  )
}

export default Nav
