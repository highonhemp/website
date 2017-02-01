import React, { Component } from 'react';
import MenuItem from './MenuItem';

class Menu extends Component {
  render() {
    return (
      <MenuItem name="Home"/>
      <MenuItem name="Brands"/>
      <MenuItem name="Collab"/>
      <MenuItem name="Shop"/>
      <MenuItem name="Blog"/>
    )
  }
}

export default Menu;
