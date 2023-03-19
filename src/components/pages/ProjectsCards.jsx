import React            from 'react';
import ProjectsCardItem from './ProjectsCardItem';
import './ProjectsCards.css';

function ProjectsCards() {
  return (
    <div className='cards'>

      <div className='welcome-container'>
        <section className='welcome'>
          <h1 className='welcome-heading'>
          Just a quick sample of a few of my projects.
          </h1>
          <br />
          <p>Feel free to checkout my <a href='https://github.com/vhartman11' target='_blank' rel='noreferrer'>GitHub</a> to see more.</p>
        </section>
      </div>

      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <ProjectsCardItem
              src='images/projects/eyes.png'
              alt='eyes that follow your mouse on screen'
              text='This was one of my first projects while attending MIT.  We were given some starter code which we had to build upon.  The goal was to make a pair of eyes that could follow the mouse pointer. To finish this project off, we could style it however we liked.'
              label='Always Watching'
              path='https://github.com/vhartman11/Eyes'
            />
            <ProjectsCardItem
              src='images/projects/pacman.png'
              alt='a pacman that bounces around the screen'
              text='For this project, we had to take an image of pacman and have it bounce off the edges of the screen.  You could click the start button over and over, each time creating another pacman that would travel upon a random path.'
              label='Pacman'
              path='https://github.com/vhartman11/Pacman'
            />
            <ProjectsCardItem
              src='images/projects/map.png'
              alt='app that updates every 15 seconds and shows the location of the buses'
              text='In this project we had to update a map every 15 seconds to show how many buses were on a particular route and each of their locations.  We used Mapbox to help put this project together.'
              label='Bus Map'
              path='https://github.com/vhartman11/bus-tracker'
            />
          </ul>
        </div>
      </div>
      
    </div>
  );
};

export default ProjectsCards;