import React, { useState } from 'react';
import NavbarStyles, { NavbarContainer, LeftContainer, RightContainer, 
                      NavLinksContainer, NavLink, 
                      MarginRightNavLink, NavbarInnerContainer,
                      StyledMenuIcon} from './NavbarStyles';
import Logo from '../Logo/Logo';
import Button from '../Button/Button';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  const [active, setActive] = useState(false);
  return (
    <NavbarContainer>
        <Logo />
        <StyledMenuIcon icon={faBars} onClick={() => setActive(!active)}/>
        <NavLinksContainer active={active}>
          <NavLink href='/'>
            Home
          </NavLink>
          <NavLink href='/'>
            About us
          </NavLink>
          <NavLink href='/'>
            Services
          </NavLink>
          <NavLink href='/'>
            Fees
          </NavLink>
              
          <MarginRightNavLink href='/'>
            Sign in
          </MarginRightNavLink>
          <Button title="Create free account" />
        </NavLinksContainer>
    </NavbarContainer>
  )
}

export default Navbar