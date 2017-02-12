import React, { Component } from 'react';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import NavDropdown from 'react-bootstrap/lib/NavDropdown';
import MenuItem from 'react-bootstrap/lib/MenuItem';
import Button from 'react-bootstrap/lib/Button';
import styles from '../style/MainMenu.css';

class MainMenu extends Component {
  render() {
    let brand = <a href='#'>High on Hemp</a>;
    return (
      <Navbar inverse toggleNavKey={0} className="NavBar">
        <Nav right eventKey={0} className='Nav'>
          <NavItem eventKey={1} href="#" className='NavItem'>Home</NavItem>
          <NavDropdown eventKey={3} title="Brands" id="basic-nav-dropdown" className='NavItem'>
             <MenuItem eventKey={3.1}>Action</MenuItem>
             <MenuItem eventKey={3.2}>Another action</MenuItem>
             <MenuItem eventKey={3.3}>Something else here</MenuItem>
             <MenuItem divider />
             <MenuItem eventKey={3.3}>Separated link</MenuItem>
          </NavDropdown>
          <NavItem eventKey={3} href="#" className='NavItem'>Collab</NavItem>
          <NavItem eventKey={4} href="#" className='NavItem'>Shop</NavItem>
          <NavItem eventKey={5} href="#" className='NavItem'>Blog</NavItem>
        </Nav>
      </Navbar>
    );
  }
}

export default MainMenu;
