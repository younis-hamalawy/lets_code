import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <div className="footer-div">
    <nav className="footer">
      <div className="footer-buttons">
        <Link to="/cities">
        <button className="sign-button">Cities</button>
        </Link>

        <button className="sign-button">Hosting
        </button>
        
      </div>
      <div className="footer-paragraph">
        <p className="footer-paragraph">Let's Code is all about making coding more fun. We're more connected than ever before, but we're also more alone. And all we want to do is bring people together - the world is better that way.</p>
        <p className="footer-paragraph">Be it a grandmother or a long lost high school friend, you never know who you'll encounter when coding with strangers.</p>
      </div>
    </nav>
  </div>
);

export default Footer;
