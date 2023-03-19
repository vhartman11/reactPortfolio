import React  from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Home        from './components/pages/Home';
import AboutMe     from './components/pages/AboutMe';
import Projects    from './components/pages/Projects';
import Certificate from './components/pages/Certificate';
import Footer      from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <>
    <Router>
    <ScrollToTop />
    <Navbar />
      <Routes>
        <Route path="/"      exact element={<Home />} />
        <Route path="/aboutMe"     element={<AboutMe />} />
        <Route path="/projects"    element={<Projects />} />
        <Route path="/certificate" element={<Certificate />} />
      </Routes>
    <Footer />  
    </Router>    
    </>
  );
};

export default App;
