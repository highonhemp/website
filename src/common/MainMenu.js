import React, { Component } from 'react';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import NavDropdown from 'react-bootstrap/lib/NavDropdown';
import MenuItem from 'react-bootstrap/lib/MenuItem';
import Button from 'react-bootstrap/lib/Button';
class MainMenu extends Component {
  render() {
    let brand = <a href='#'>High on Hemp</a>;
    return (
      <Navbar inverse toggleNavKey={0}>
        <Nav right eventKey={0}>
          <NavItem eventKey={1} href="#">Home</NavItem>
          <NavDropdown eventKey={3} title="Brands" id="basic-nav-dropdown">
             <MenuItem eventKey={3.1}>Action</MenuItem>
             <MenuItem eventKey={3.2}>Another action</MenuItem>
             <MenuItem eventKey={3.3}>Something else here</MenuItem>
             <MenuItem divider />
             <MenuItem eventKey={3.3}>Separated link</MenuItem>
          </NavDropdown>
          <NavItem eventKey={3} href="#">Collab</NavItem>
          <NavItem eventKey={4} href="#">Shop</NavItem>
          <NavItem eventKey={5} href="#">Blog</NavItem>
        </Nav>
      </Navbar>
    );
  }
}

export default MainMenu;
