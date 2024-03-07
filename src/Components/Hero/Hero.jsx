import React from 'react';
import './Hero.css';
import video from '../Assets/WEBSITE-VIDEO.mp4';

const Hero = () => {
  return (
    <div className='hero'>
        <div className="home-icon">
          <h6>Origami</h6>
          <h1>Writings from our team</h1>
          <p>The latest industry of basketball</p>
            <video autoPlay loop muted>
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    </div>
  );
}

export default Hero;