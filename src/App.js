import React from 'react';
import Navbar from './NavBar';
import './App.css';
import './style.css';
import myImage from './images/photo-1531297484001-80022131f5a1.jpeg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



// Import the About and Contact components (create these files)
import About from './About';
import Contact from './Contact';

function App() {
  return (
    <Router>
      <Navbar />
      <div className='containerbody'>
        <div className='containerInto'>
          <div className='column-container'>
            <img src={myImage} alt="My Image" className='Prof' />
            <div className='code-background'>
              
            <div className='code'>
              I am Hezron, a computer <div className='dark'>enthusiast<div className='yello'>(Thanks)</div></div>. I am into programming and cyber security. This is my first portfolio project. Hopefully, we get to know each other better. 
            </div>
            <hr></hr>
            <div className='u'>Especially you!!</div>
            <hr></hr>
            ~Hezron Onyango
            </div>
            
          </div>
         
          
        </div>
        

      </div>

      <Routes>
        <Route exact path="/" component={<App />} />
        <Route path="/about" component={<About />} />
        <Route path="/contact" component={<Contact />} />
        </Routes>
    </Router>
  );
}

export default App;
