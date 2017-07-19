import React from 'react';
import ReactDOM from 'react-dom';
import { signin, signout, signup } from './util/session_api_util'

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  // window.state = store.getState;
  window.signin = signin;
  window.signout = signout;
  window.signup = signup;
  ReactDOM.render(<h1>Welcome to Let's Code</h1>, root);
});
