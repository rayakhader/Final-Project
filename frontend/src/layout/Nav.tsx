import React, { useContext } from 'react'
import './styles/nav.css'
import { TokenContext } from '../context/TokenProvider'
import NavUser from './NavUser'
import NavGuest from './NavGuest'

function Nav() {
    const {token} = useContext(TokenContext)
  return (
    token? <NavUser /> : <NavGuest />
  )
}

export default Nav
