
import React from 'react';
import './NavigationBar';
import './App.css';
import Navbar from './NavigationBar';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2






function App() {
  return (
    <div>
      <div className='body'>
        <Navbar />
        <div className='Body'>

          <div className='Container'>

            <h2>Hezron's Portfolio
              <hr color='black'></hr>
            </h2>
            <Grid container spacing={1}>
              <Grid xs={6}>
              <div className='introCont'>
                <p>AM Hezron (localhost), a Computer Science student at the Technical University of Mombasa, I will be graduating in 2025.</p>
                <p>I have specialized in Software Development and Cyber-Security.</p>
              </div>
              <div className='skillOverview'>
                <h3>
                  Skill Overview
                </h3>
                <hr color='black'></hr>
                <ol>
                  <li>
                    <h3>Programming Languages:</h3> Python, C/C++, NodeJs, React, Java, JavaScript, HTML, CSS
                  </li>
                  <li>
                    <h3>Tools:</h3> Git, GitHub, Visual Studio Code, Android Studio, X-Code
                  </li>
                  <li>
                    <h3>Skills:</h3> Android & iOS Development, Data Science, Data Visualization, Graphic Design, Web Development, ICP
                  </li>
                </ol>
              </div>
              </Grid>
              <Grid xs={6}>
              <div className="featuredProjects">
                <h3>
                  Featured Projects
                </h3>
                <hr color='black'></hr>
                <ol>
                  <li>
                   Todo Flutter Project <div className="gitIcon">
                    <a href='https://github.com/hezron-sketch/todo_app.git'>
                    github</a>
                    </div> 
                  </li>
                  <li>
                    Python Anaconda Project <div className="gitIcon">
                    <a href='https://github.com/hezron-sketch/todo_app.git'>
                    github</a>
                    </div> 
                    </li>
                    <li>
                      Web Development Project <div className="gitIcon">
                    <a href='https://github.com/hezron-sketch/todo_app.git'>
                    github</a>
                    </div> 
                    </li>
                </ol>
              </div>
              <a href='./about'>
              <div className="explore">
                Explore More
              </div>
              </a>
              </Grid>
            </Grid>

          </div>

        </div>
      </div>
    </div>
  );
};

export default App;