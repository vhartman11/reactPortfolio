import React           from 'react';
import BackgroundVideo from '../assets/videos/portfolio-background.mp4'
import '../App.css';
import './HomeGreeting.css';

function HomeGreeting() {
  return (
    <div className='greeting-container'>
      <video src={BackgroundVideo} autoPlay loop muted class='video=bg'/>
        <h1>MY PORTFOLIO</h1>
        <p>Explore this site to learn more about me.</p>
        {/* see: https://github.com/briancodex/react-website-v1/blob/master/src/components/HeroSection.js to add video and links */}
    </div>
  );
};

export default HomeGreeting;