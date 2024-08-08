import React from 'react';
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import '../components/Home.css';
import { Link, Route, Routes } from "react-router-dom";

//slide show
const images = [
  {
    original: require("./images/tiger.jpg"),
  },
  {
    original: require('./images/redPanda.jpg'),
  },
  {
    original: require('./images/panda.jpg'),
  },
  {
    original: require('./images/giraffe.jpg'),
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
          disableSwipe={true}
          showPlayButton={false} 
          autoPlay={true}
          slideDuration={1000} 
          slideInterval={5000}
        />
        <div>
          <p className='planVisit'>Plan your visit</p>
          <h1 className='wildFun'>Wild fun awaits!</h1>
        </div>
      </div> {/* NEED TO RESIZE IMAGES TO BE SAME LENGTH AND WIDTH */}
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <h1 className='explore'>Explore!</h1>
        <div className='container mt-3' style={{display: 'flex', gap: '20px', width: '100%'}}>
          <div className='card'>
              <a href='#/Kids'>
                <img className='card-img-top' src={require('./images/kidsCorner.jpg')} alt='kidsCorner' />
              </a>
              <div className='card-body'>
                  <h4 className='card-title'><Link to="/Kids">Kids Corner</Link></h4>
              </div>
          </div>
          <div className='card'>
              <a href='#/Shop'>
                <img className='card-img-top' src={require('./images/cheetahStuff.jpeg')} alt='teddyStuff' />
              </a>
              <div className='card-body'>
                  <h4 className='card-title'><Link to="/Shop">Shop</Link></h4>
              </div>
          </div>
          <div className='card'>
              <a href='#/Events'>
                <img className='card-img-top' src={require('./images/pandaHi.jpg')} alt='panda' />
              </a>
              <div className='card-body'>
                  <h4 className='card-title'><Link to="/Events">Panda Extravaganza</Link></h4>
              </div>
          </div>
        </div>
        <div className='container mt-3' style={{display: 'flex', gap: '20px', width: '100%'}}>
          <div className='card'>
              <a href='#/Events'>
                <img className='card-img-top' src={require('./images/parade.jpg')} alt='parade' />
              </a>
              <div className='card-body'>
                  <h4 className='card-title'><Link to="/Events">Events</Link></h4>
              </div>
          </div>
          <div className='card'>
              <a href='#/Tickets'>
                <img className='card-img-top' src={require('./images/ticket.jpg')} alt='ticket' />
              </a>
              <div className='card-body'>
                  <h4 className='card-title'><Link to="/Tickets">Tickets</Link></h4>
              </div>
          </div>
          <div className='card'>
              <a href='#/Mission'>
                <img className='card-img-top' src={require('./images/forest.jpg')} alt='mission' />
              </a>
              <div className='card-body'>
                  <h4 className='card-title'><Link to="/Mission">Our Mission</Link></h4>
              </div>
          </div>
        </div><br/>
      </div>
    </div>
  );
}
