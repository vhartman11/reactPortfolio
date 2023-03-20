import React    from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out some of my favorite projects and things to do!</h1>


      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            
            <CardItem
              src='images/MITcertificate.png'
              alt='my MIT certificate in coding'
              text='My Professional Certificate in Coding that I received in October 2022.'
              label='My Certificate'
              path='/certificate'
              target=''
              rel=''
            />
            <CardItem
              src='images/hobbies/logo.jpg'
              alt='this is the logo for the next website that i want to build'
              text='Creating a website for my homestead will become my next coding project.'
              label='Coding'
              path='/aboutMe'
              target=''
              rel=''
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/hobbies/fish.jpg'
              alt='9.48 pound carp'
              text='This 9.48 pound carp was caught on the French Broad River in Tennessee.'
              label='Fishing'
              path='/aboutMe'
              target=''
              rel=''
            />
            <CardItem
              src='images/projects/eyes.png'
              alt='eyes that follow your mouse on screen'
              text='One of my first projects. The eyes follow the movements of your mouse.'
              label='A fun project'
              path='/projects'
              target=''
              rel=''
            />
            <CardItem
              src='images/projects/map.png'
              alt='app that updates every 15 seconds and shows the location of the buses'
              text='This map updates every 15 seconds to show buses on a particular route.'
              label='Real time mapping'
              path='/projects'
              target=''
              rel=''
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Cards;