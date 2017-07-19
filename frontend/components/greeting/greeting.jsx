import React from 'react';
import { Link } from 'react-router-dom';

const sessionLinks = () => (
  <nav className="sign-button">
    <Link to="/signin">Sign In</Link>
    &nbsp;or&nbsp;
    <Link to="/signup">Sign Up!</Link>
  </nav>
);

const endsessionLink = (currentUser, signout) => (
	<nav className="sign-button">
    <button className="sign-button" onClick={signout}>Log Out</button>
	</nav>
);

const Greeting = ({ currentUser, signout }) => (
  currentUser ? endsessionLink(currentUser, signout) : sessionLinks()
);

export default Greeting;
