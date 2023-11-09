import React from "react";
import Navbar from "./NavBar";
import "./App.css";
import "./style.css";
import myImage from "./images/photo-1531297484001-80022131f5a1.jpeg";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";


import Box from "@mui/material/Box";
// import Paper from '@mui/material/Paper';
import Grid from "@mui/material/Unstable_Grid2";
import About from "./About";
import Contact from "./Contact";
import GitHubIcon from "@mui/icons-material/GitHub";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import RedditIcon from "@mui/icons-material/Reddit";
import Slideshow from "./Slideshow";

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
        <Grid container spacing={4}>
          <Grid xs={6}>
            <div className="containerInto">
              <h3>Introduction:</h3>
              <hr></hr>
              <div className="column-container">
                <img src={myImage} alt="My Image" className="Prof" />
                <div className="code-background">
                  <div className="code">
                    I am Hezron, a computer{" "}
                    <div className="dark">enthusiast</div>. I am into
                    programming and cyber security. This is my first portfolio
                    project. Hopefully, we get to know each other better. Let's
                    connect and explore the endless possibilities of the digital
                    realm together.
                  </div>
                  <hr></hr>
                  <div className="u">Especially you!!</div>
                  <hr></hr>
                  <p className="ct">
                    ~Hezron Onyango (The Cutting Edge of The Digital World)
                  </p>
                </div>
              </div>
            </div>
            {/* </Item> */}
          </Grid>
          <Grid>
            {/* <Item> */}
            <div className="containerI">
              <h3>Computer Languages Learned:</h3>
              <hr></hr>
              <div className="comlang">
                Python
                <hr></hr>
                Javascript
                <hr></hr>C & C++
                <hr></hr>
                NodeJs
                <hr></hr>
                React
              </div>
            </div>
          </Grid>
          <Grid>
            <div className="container">
              <h3>Sample Projects:</h3>
              <hr></hr>
              <div className="comlang">
              <Stack direction="row" alignItems="center" gap={1}>
                  Namer App
                  <Typography variant="body1"><FileDownloadOutlinedIcon /></Typography>
                </Stack>
                <hr></hr>
                <Stack direction="row" alignItems="center" gap={1}>
                  Portfolio React & NodeJs
                  <Typography variant="body1"><FileDownloadOutlinedIcon /></Typography>
                </Stack>
                <hr></hr>
                <Stack direction="row" alignItems="center" gap={1}>
                  Todo App
                  <Typography variant="body1"><FileDownloadOutlinedIcon /></Typography>
                </Stack>
                <hr></hr>
                <Stack direction="row" alignItems="center" gap={1}>
                  Pending - project 4
                  <Typography variant="body1"><FileDownloadOutlinedIcon /></Typography>
                </Stack>
                <hr></hr>
                <Stack direction="row" alignItems="center" gap={1}>
                  Pending - project 5
                  <Typography variant="body1"><FileDownloadOutlinedIcon /></Typography>
                </Stack>
              </div>
            </div>
          </Grid>
        </Grid>
      </Box>

      <br></br>
      <br></br>

      
      <Box sx={12}>
        <Grid container spacing={2}>
          <Grid>
           <div className="container">
        <Box sx={6}>
          <Grid container spacing={2}>
            <Grid>
              <div className="">
                <h3>Social Media:</h3>
                <hr></hr>
                <a className="slinks" href="https://github.com/hezron-sketch">
                <Stack direction="row" alignItems="center" gap={1}>
                  <GitHubIcon />
                  <Typography variant="body1">Github @hezron-sketch</Typography>
                </Stack>
                </a>
                <hr></hr><a className="slinks" href="https://instagram.com/_humbly_hezron">
                <Stack direction="row" alignItems="center" gap={1}>
                  <InstagramIcon />
                  <Typography variant="body1">Instagram @_humbly_hezron</Typography>
                </Stack></a>
                <hr></hr>
                <Stack direction="row" alignItems="center" gap={1}>
                  <LinkedInIcon />
                  <Typography variant="body1">LinkedIn</Typography>
                </Stack>
                <hr></hr>
                <Stack direction="row" alignItems="center" gap={1}>
                  <RedditIcon />
                  <Typography variant="body1">Reddit</Typography>
                </Stack>
                <hr></hr>
              </div>
            </Grid>
            <Grid>
              <div className="">
                <h3>Skills and Expertise:</h3>
                <hr></hr>
                Programming
                <hr></hr>
                Web Development
                <hr></hr>
                Database Management
                <hr></hr>
                Mobile App Development
                <hr></hr>
                Problem Solving
                <hr></hr>
              </div>
            </Grid>
            <Grid>
              <div className="">
                <h3>Achievements and Rewards</h3>
                <hr></hr>
                Flutter framework
                <hr></hr>
                GDG Pwani
                <hr></hr>
                Bachelors Degree CS
                <hr></hr>
              </div>
            </Grid>
            
          </Grid>
        </Box>
        
      </div>
          </Grid>
          <Grid xs={4}>
           
         <div className="slide"><h3 className="g">Gallery</h3><hr style={{margin: '0'}}></hr>
        <Slideshow />
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
