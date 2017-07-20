import React from 'react';
import { Link } from 'react-router-dom';

const sessionLinks = () => (
  <nav className="header-buttons">
    <button className="sign-button">
    <Link to="/signin">Sign In</Link>
    </button>

    <button className="sign-button">
    <Link to="/signup">Sign Up!</Link>
    </button>
  </nav>
);

const endsessionLink = (currentUser, signout) => (
	<nav className="header-buttons">
    <button className="sign-button" onClick={signout}>Sign Out</button>
	</nav>
);

const Greeting = ({ currentUser, signout }) => (
  currentUser ? endsessionLink(currentUser, signout) : sessionLinks()
);

export default Greeting;
