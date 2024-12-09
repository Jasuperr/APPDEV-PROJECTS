import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ padding: '10px', background: '#eee' }}>
      <NavLink to="/" style={{ margin: '0 10px' }}>Home</NavLink>
      <NavLink to="/about" style={{ margin: '0 10px' }}>About</NavLink>
      <NavLink to="/games" style={{ margin: '0 10px' }}>Games</NavLink>
    </nav>
  );
};

export default Navbar;
