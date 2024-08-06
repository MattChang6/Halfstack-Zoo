import React from 'react';
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import '../components/Home.css';

//slide show
const images = [
  {
    original: require("./images/tiger.jpg"),
  },
  {
    original: require('./images/bat.jpg'),
  },
  {
    original: require('./images/chameleon.jpg'),
  },
];

export function Home() {
  return (
    <div>
      <div style={{ position: 'relative' }}>
        <ImageGallery 
          items={images} 
          showFullscreenButton={false} 
          showThumbnails={false} 
          showNav={false} 
          showPlayButton={false} 
          autoPlay={true} 
          slideDuration={1000} 
          slideInterval={5000}
        />
        <div>
          <h3 style={{ 
            position: 'absolute', 
            top: '10%', 
            left: '50%', 
            transform: 'translate(-50%, -50%)', 
            color: 'white' 
          }}>Plan your visit</h3>
          <h1 style={{ 
            position: 'absolute', 
            top: '20%', 
            left: '50%', 
            transform: 'translate(-50%, -50%)', 
            color: 'yellow' 
          }}>Wild fun awaits!</h1>
        </div>
      </div>
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <h6>Explore!</h6>
        <div>
          <a href="#/Kids" style={{ margin: '0 10px' }}>Kids Corner</a>
          <a href="#/Shop" style={{ margin: '0 10px' }}>Shop</a>
          <a href="#/Events" style={{ margin: '0 10px' }}>Panda Extravaganza</a>
        </div>
        <div>
          <a href="#/Events" style={{ margin: '0 10px' }}>Summer Parade</a>
          <a href="#/Tours" style={{ margin: '0 10px' }}>Tickets</a>
          <a href="#/Mission" style={{ margin: '0 10px' }}>Our Mission</a>
        </div>
      </div>
    </div>
  );
}
