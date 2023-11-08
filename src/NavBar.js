// Navbar.js
import './NavBar.css';
import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">About |</Link></li>
        <li><Link to="/about"> Works</Link></li>
        <li><Link to="/contact"> | Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
