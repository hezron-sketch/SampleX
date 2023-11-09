import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import "./style.css";

const fadeImages = [
  {
    url: 'https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
    caption: 'First Slide'
  },
  {
    url: 'https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80',
    caption: 'Second Slide'
  },
  

];

const Slideshow = () => {
  return (
    <div className="slide-container" style={{
      padding: '0'
    }}>
      <Fade>
        {fadeImages.map((fadeImage, index) => (
          <div key={index}>
            <img className="slideshow"src={fadeImage.url} />
            
          </div>
        ))}
      </Fade>
    </div>
  )
}

export default Slideshow;