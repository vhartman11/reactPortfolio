import React from 'react';
import '../App.css';
//import { Button } from './Button';
import './HomeGreeting.css';

function HomeGreeting() {
  return (
    <div className='greeting-container'>
      <video src='/videos/portfolio-background.mp4' autoPlay loop muted />
      <h1>MY PORTFOLIO</h1>
      <p>Explore this site to learn more about me.</p>
      <div className='greeting-btns'>
        {/*<Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          WATCH YOUTUBE <i className='far fa-play-circle' />
        </Button>*/}
      </div>
    </div>
  );
};

export default HomeGreeting;