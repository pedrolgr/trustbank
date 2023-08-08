import React from 'react'
import { LogoImg } from '../Navbar/NavbarStyles';
import logo from '../../assets/logo.svg'

function Logo() {
  return (
    <LogoImg src={logo} alt="Bank logo"/>
  )
}

export default Logo;