import React from 'react';
import Navbar from './NavBar';
import './App.css';
import './style.css';
import myImage from './images/photo-1531297484001-80022131f5a1.jpeg';




function App() {
  return (
    <>
    
    <Navbar />
    <div className='containerbody'>
    <div className='containerInto'>
     <div className='column-container' >
        
        <img src={myImage} alt="My Image" className='Prof' />
       
    <div className='code'>
      I am Hezron, a computer enthusiastic, I am into programming and cyber security, this is my first portfolio project. Hopefully we get to know each other much
    </div>
    </div>
    </div>
    
    </div>
    </>
  );
}

export default App;
