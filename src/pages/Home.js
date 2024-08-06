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
          <h3 className='planVisit'>Plan your visit</h3>
          <h1 className='wildFun'>Wild fun awaits!</h1>
        </div>
      </div>
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <h6>Explore!</h6>
        <div> {/* Place links within cards */}
          <a href="#/Kids" className='links'>Kids Corner</a>
          <a href="#/Shop" className='links'>Shop</a>
          <a href="#/Events" className='links'>Panda Extravaganza</a>
        </div>
        <div>
          <a href="#/Events" className='links'>Summer Parade</a>
          <a href="#/Tours" className='links'>Tickets</a>
          <a href="#/Mission" className='links'>Our Mission</a>
        </div>
      </div>
    </div>
  );
}
