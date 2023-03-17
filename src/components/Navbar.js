import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
    {/* see:
  https://github.com/briancodex/react-website-v1/blob/master/src/components/Navbar.js
  for ideas for adding icons, buttons, and links*/}
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            Vince Hartman
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/aboutMe'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                About Me
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/projects'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Projects
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/certificate'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Coding Certificate
              </Link>
            </li>

          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;