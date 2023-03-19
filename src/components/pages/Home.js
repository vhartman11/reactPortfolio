import React        from 'react';
import Cards        from '../Cards';
import HomeGreeting from '../HomeGreeting';
import '../../App.css';

function Home() {
  return (
    <>
    <HomeGreeting />
    <Cards />
    </>
  );
};

export default Home;