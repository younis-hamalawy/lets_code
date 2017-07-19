import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

import { signin, signout, signup } from './actions/session_actions';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');

  const store = configureStore();
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.signin = signin;
  window.signout = signout;
  window.signup = signup;

  ReactDOM.render(<Root store={ store }/>, root);
});
