import React from "react";
import './NavBar.css';
import './App.css';
import './About';
import './Contact';


function NavigationBar() {
  return (
    <div >
      <nav>
      <ul>
        <li><a href="./App">Home</a></li>
        <li><a href="./About">About</a></li>
        <li><a href="./Contact">Contact</a></li>
      </ul>
      </nav>
    </div>
  );
};

export default NavigationBar;