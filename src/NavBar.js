// Navbar.js
import './NavBar.css';
import React from 'react';
import './About';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><a href="./About">About</a></li>
        <li><a href="#works">Works</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
