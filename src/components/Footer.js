import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Thank you for visiting!
        </p>
      </section>
      {/* see: 
https://github.com/briancodex/react-website-v1/blob/master/src/components/Footer.js
for ideas on adding links */}
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='social-icons'>
            <Link
              className='social-icon-link linkedin'
              to='https://www.linkedin.com/in/vhartman11/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i className='fab fa-linkedin' />
            </Link>
            <Link
              className='social-icon-link github'
              to='https://github.com/vhartman11'
              target='_blank'
              aria-label='github'
            >
              <i className='fab fa-github' />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Footer;

