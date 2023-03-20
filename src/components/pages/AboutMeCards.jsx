import React           from 'react';
import CardItem from '../CardItem';
import '../Cards.css';

function AboutMeCards() {
  return (
    <div className='cards'>
      <h1>Check out some of my favorite things to do!</h1>

      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            
            <CardItem
              src='images/hobbies/logo.jpg'
              alt='this is the logo for the next website that i want to build'
              text='My next web development project would be to build a website for our homestead.  On our homestead we have chickens, honey bees, fruit and nut trees, and a garden.  I would want to incorperate these things into the site by using many forms of media.  At some point in the future we may sell goods from the site.'
              label='Website Building'
              path=''
              target=''
              rel=''
            />
            <CardItem
              src='images/hobbies/fish.jpg'
              alt='9.48 pound carp'
              text='I enjoy fishing for all species of fish but usually target bass, trout, and catfish.  In this photo, I am holding a 9.48 pound carp that was caught on the French Broad River in Tennessee on a family vacation.  This is the largest fish I have caught.'
              label='Fishing'
              path=''
              target=''
              rel=''
            />
          </ul>

          <ul className='cards__items'>
            <CardItem
              src='images/hobbies/carpentry.jpg'
              alt='a complete bee hive that I built'
              text='I have a small workshop in my basement where I have built or fixed many things such as repairing a large sign for a sales booth at the Philadelphia Flower Show.  I built the beehive in this picture as well as several others and the components needed to have a sucessful apiary.'
              label='Wood Working'
              path=''
              target=''
              rel=''
            />
            <CardItem
              src='images/hobbies/homestead.jpg'
              alt='a young black australorp chicken'
              text='One of my personal goals is to become as self-sufficient as possible.  To help achieve this goal, we raised a small flock of chickens and started a small apiary.  In the winter, I tap my maple trees to collect sap and boil it down to delicious maple syrup.  I also have a large garden, many berry plants, an assortment of fruiting trees, and grape vines.'
              label='Homesteading'
              path=''
              target=''
              rel=''
            />
          </ul>

        </div>
      </div>
    </div>
  );
};

export default AboutMeCards;