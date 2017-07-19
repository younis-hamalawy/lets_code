import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

import { signin, signout, signup } from './util/session_api_util'

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');

  const store = configureStore();
  window.getState = store.getState;
  window.signin = signin;
  window.signout = signout;
  window.signup = signup;

  ReactDOM.render(<Root store={ store }/>, root);
});
