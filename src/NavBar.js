// // Navbar.js
import './NavBar.css';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { debounce } from '../src/utilities/helpers';

// const Navbar = () => {
//   return (
//     
//   );
// };

// export default Navbar;
// src/utilities/helpers.js

// src/components/Navbar.js



const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = debounce(() => {
    const currentScrollPos = window.pageYOffset;

    setVisible((prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 70) || currentScrollPos < 10);

    setPrevScrollPos(currentScrollPos);
  }, 100);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);

  }, [prevScrollPos, visible, handleScroll]);

  const navbarStyles = {
    position: 'relative',
    width: '100%',
    textAlign: 'center',
    transition: 'top 0.6s'
  }

  return (
    <div style={{ ...navbarStyles, top: visible ? '0' : '-60px' }}>
      <nav>
       <ul>
         <li><Link to="/">About</Link></li>
         <li><Link to="/about">Works</Link></li>
         <li><Link to="/contact">Contact</Link></li>
       </ul>
     </nav>
    </div>
  );
};

export default Navbar;
