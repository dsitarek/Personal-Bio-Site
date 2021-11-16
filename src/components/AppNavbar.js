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

const AppNavbar = ({ isAdmin }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar light expand="md" className="navbar">
        <NavbarBrand href="/">Daniel Sitarek</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="container-fluid" navbar>
            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Projects">Projects</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/tech">Technologies</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/contact">Contact</NavLink>
            </NavItem>
            {isAdmin ? (
              <NavItem>
                <NavLink href="/adminTools">Admin Tools</NavLink>
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
