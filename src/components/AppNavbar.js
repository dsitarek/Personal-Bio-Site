import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import dsLogo from '../assets/ds-logo.png';

const AppNavbar = ({ isAdmin }) => {
  const [isOpen, setIsOpen] = useState(false);
  const isHome = (useLocation().pathname === '/');

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar light expand="md" className="navbar">
        <NavbarBrand href="/"><img src={dsLogo} className="nav-logo" alt="DS Logo" /></NavbarBrand>
        <NavbarToggler className="nav-toggle" onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="container-fluid" navbar>
            <NavItem>
              <NavLink href="/" className={isHome ? 'navlink nav1' : 'navlink'}>Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Projects" className={isHome ? 'navlink nav2' : 'navlink'}>Projects</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/tech" className={isHome ? 'navlink nav3' : 'navlink'}>Technologies</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/contact" className={isHome ? 'navlink nav4' : 'navlink'}>Contact</NavLink>
            </NavItem>
            {isAdmin ? (
              <NavItem>
                <NavLink href="/adminTools" className="navlink">Admin Tools</NavLink>
              </NavItem>
            ) : ''}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

AppNavbar.propTypes = {
  isAdmin: PropTypes.bool.isRequired,
};
export default AppNavbar;
