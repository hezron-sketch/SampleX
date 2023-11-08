import React from 'react';
import Navbar from './NavBar';
import './App.css';
import './style.css';
import myImage from './images/photo-1531297484001-80022131f5a1.jpeg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { Container, Row, Col } from 'react-bootstrap';

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import About from './About';
import Contact from './Contact';

import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A202700' : '#FFF9AA00',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   color: theme.palette.text.secondary,
// }));

// Import the About and Contact components (create these files)


// const SplitscreenLayout = ({
//   leftSide:LeftSide,
//   rightSide:RightSide
// })
function App() {
  return (
    <Router>
      <Navbar />

      <Box sx={12}>
        <Grid container spacing={2}>
          <Grid xs={6}>
              <div className="containerInto">
                <h3>Introduction:</h3>
                <hr></hr>
                <div className='column-container'>
                  <img src={myImage} alt="My Image" className='Prof' />
                  <div className='code-background'>

                    <div className='code'>
                      I am Hezron, a computer <div className='dark'>enthusiast</div>. I am into programming and cyber security. This is my first portfolio project. Hopefully, we get to know each other better.  Let's connect and explore the endless possibilities of the digital realm together."
                    </div>
                    <hr></hr>
                    <div className='u'>Especially you!!</div>
                    <hr></hr>
                    <p className='ct'>~Hezron Onyango (The Cutting Edge of Digital World)</p>
                  </div>
                </div>
              </div>
            {/* </Item> */}
          </Grid>
          <Grid>
        
          {/* <Item> */}
            <div className='containerI'>

                <h3>Computer Languages:
                </h3>
                <hr></hr>
                <div className='comlang'>
                  <ol>
                    <li>Python</li>
                    <hr></hr>
                    <li>Javascript</li>
                    <hr></hr>
                    <li>C & C++</li>
                    <hr></hr>
                    <li>NodeJs</li>
                    <hr></hr>
                    <li>React</li>
                  </ol>
                </div>

              </div>
              </Grid>
              <Grid>
                <div className='container'>
                  <h3>
                    Sample Projects:
                    </h3>
                    <hr></hr>
                    <div className='comlang'>
                      <ol>
                        <li>Namer app <FileDownloadOutlinedIcon/></li>
                        <hr></hr>
                        <li>To do app <FileDownloadOutlinedIcon/></li>
                        <hr></hr>
                        <li>Portfolio React & Nodejs app <FileDownloadOutlinedIcon/></li>
                        <hr></hr>
                        <li>[project 4 - pending] <FileDownloadOutlinedIcon/></li>
                        <hr></hr>
                        <li>[project 5 - pending] <FileDownloadOutlinedIcon/></li>
                      </ol>
                    </div>
                 
                </div>
              </Grid>
        </Grid>
      </Box>

      



      <Routes>
        <Route exact path="/" component={<App />} />
        <Route path="/about" component={<About />} />
        <Route path="/contact" component={<Contact />} />
      </Routes>
    </Router>
  );

}

export default App;
