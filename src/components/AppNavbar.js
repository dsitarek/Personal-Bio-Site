import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button,
} from 'reactstrap';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { signInUser, signOutUser } from '../api/auth';
import dsLogo from '../assets/ds-logo.png';

const AppNavbar = ({ isAdmin }) => {
  const history = useHistory();
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar light expand="md" className="navbar">
        <NavbarBrand href="/"><img src={dsLogo} className="nav-logo" alt="DS Logo" /></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="container-fluid" navbar>
            <NavItem>
              <NavLink href="/" className="navlink">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Projects" className="navlink">Projects</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/tech" className="navlink">Technologies</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/contact" className="navlink">Contact</NavLink>
            </NavItem>
            {isAdmin ? (
              <NavItem>
                <NavLink href="/adminTools" className="navlink">Admin Tools</NavLink>
              </NavItem>
            ) : ''}
            <Button onClick={signInUser}>in</Button>
            <Button onClick={() => signOutUser().then(history.push('/'))}>out</Button>
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
