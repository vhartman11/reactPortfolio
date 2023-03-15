import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import AboutMe from './components/pages/AboutMe';
import Projects from './components/pages/Projects';
import Certificate from './components/pages/Certificate';
// import SignUp from './components/pages/SignUp';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <>
    <Router>
    <ScrollToTop />
    <Navbar />
      <Routes>
        <Route path="/" forceRefresh={true} exact element={<Home key='0'/>} />
        <Route path="/aboutMe" forceRefresh={true} element={<AboutMe key='1'/>} />
        <Route path="/projects" forceRefresh={true} element={<Projects key='2' />} />
        <Route path="/certificate" forceRefresh={true} element={<Certificate key='3' />} />
        {/*} <Route path='/sign-up' element={<SignUp/>} /> */}
      </Routes>
    <Footer />  
    </Router>    
    </>
  );
};

export default App;
