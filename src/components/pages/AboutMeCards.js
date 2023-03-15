import React from 'react';
import './AboutMeCards.css';
import AboutMeCardItem from './AboutMeCardItem';

function AboutMeCards() {
  return (
    <div className='cards'>
      <h1>Check out some of my favorite things to do!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            
            <AboutMeCardItem
              src='images/hobbies/logo.jpg'
              alt='this is the logo for the next website that i want to build'
              text='My next web development project would be to build a website for our homestead.  On our homestead we have chickens, honey bees, fruit and nut trees, and a garden.  I would want to incorperate these things into the site by using many forms of media.  At some point in the future we may sell goods from the site.'
              label='Website Building'
              path='#'
            />
            <AboutMeCardItem
              src='images/hobbies/fish.jpg'
              alt='9.48 pound carp'
              text='I enjoy fishing for all species of fish but usually I target bass, trout, and catfish.  In the cover photo I am holding a carp that weighed in at 9.48 pounds that was caught on the French Broad River in Tennessee on a family vacation.  This is the largest fish I have caught.'
              label='Fishing'
              path='#'
            />
          </ul>

          <ul className='cards__items'>
            <AboutMeCardItem
              src='images/hobbies/carpentry.jpg'
              alt='a complete bee hive that I built'
              text='I have a small work shop in my basement and I have built or fixed many things there.  I have fixed a large sign for a sales booth at the Philadelphia Flower Show to our own kitchen table chairs.  I built the beehive in this picture as well as several others and other components needed to have a sucessful apairy.'
              label='Wood Working'
              path='#'
            />
            <AboutMeCardItem
              src='images/hobbies/homestead.jpg'
              alt='a young black australorp chicken'
              text='One of my personal goals is to become self suffient as possible.  To help acheive this goal we added a small flock of chickens and started a small apairy.  I collect tap my maple trees in the winter to collect sap and boil it down to deliouse maple syrup.  I also have a large garden, many berry plants, an assortment of fruiting trees, and grape vines.'
              label='Homesteading'
              path='#'
            />
          </ul>

        </div>
      </div>
    </div>
  );
};

export default AboutMeCards;