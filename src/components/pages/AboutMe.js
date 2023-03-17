import React from 'react';
import '../../App.css';
import './AboutMe.css';
import AboutMeCards from './AboutMeCards';

function AboutMe() {
  return (
    <>
    <h1 id='about-me-title' className='aboutMe'>About Me</h1>

      <div className='welcome-container'>
        <section className='welcome'>
          <h1 className='welcome-heading'>
            Welcome to the page that's all about me!
          </h1>
          <br />
          <p>Here you will find a link to my <a href='https://www.linkedin.com/in/vhartman11/' target='_blank' rel='noreferrer'>LinkedIn profile</a> were you can view my resume.</p>
          <br />
          <p>You can also see a little of my story on how I found coding and why I chose to pursue a web development career.</p>
          <br />
          <p>Further down this page you will also get to see some of my favorite things to do.</p>
          <br />
          <p>Enjoy!</p>
        </section>
      </div>

      <div className='faq-container'>
        <section className='faq'>
          <h1 className='faq-heading'>
            Here I will answer a few common questions that would come up in an interview.
          </h1>
          <p>How did you find web development?</p>
          <br />
          <p>
            In 2021 I was looking for a way that I could meet my personal goals while working in a profession that I would enjoy.  
            While doing some initial research on possible career options, a family member mentioned coding.  
            I did some searching and found some random free online crash courses and found myself wanting to learn more.
          </p>
          <br /><br />
          <p>Why I chose web development?</p>
          <br />
          <p>
            I ended up choosing web development not only because I believe it may help me reach some of my goals but I also find it fascinating.  
            I really enjoy the fact that potentially thousands of people may end up using something that I helped to build.
          </p>
          <br /><br />
          <p>What have I enjoyed most about web development?</p>
          <br />
          <p>
            I ended up choosing a full stack program because after the free online crash courses it all seemed so fasicinating and I wanted to learn more.  
            After completing my program at MIT, I found that I enjoyed the front end of the development process the most.  
            However, nothing beats the feeling of putting a whole project together and getting to experience it all working.
          </p>
        </section>
      </div>
    <AboutMeCards />
    </>
  );
};

export default AboutMe;