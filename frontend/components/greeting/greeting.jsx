import React from 'react';
import { Link } from 'react-router-dom';

const sessionLinks = () => (
  <nav className="header-buttons">
    <button className="sign-button">Cities
    </button>
    <button className="sign-button">Hosting
    </button>

    <Link to="/signin">
      <button className="sign-button">Sign In</button>
    </Link>

    <Link to="/signup">
      <button className="sign-button">Sign Up!</button>
    </Link>

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
