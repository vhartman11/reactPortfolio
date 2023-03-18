import React from 'react';
import '../App.css';
import './HomeGreeting.css';
import BackgroundVideo from '../assets/videos/portfolio-background.mp4'

function HomeGreeting() {
  return (
    <div className='greeting-container'>
      <video src={ BackgroundVideo } autoPlay loop muted />
      <h1>MY PORTFOLIO</h1>
      <p>Explore this site to learn more about me.</p>
      <div className='greeting-btns'>
        {/* see: https://github.com/briancodex/react-website-v1/blob/master/src/components/HeroSection.js to add video and links */}
      </div>
    </div>
  );
};

export default HomeGreeting;