import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

import { signin, signout, signup } from './actions/session_actions';
import { fetchAllCities, fetchSingleCity } from './actions/cities_actions'
import {selectAllCities} from './reducers/selectors'
import { setCity } from './actions/user_actions'

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');

  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.signin = signin;
  window.signout = signout;
  window.signup = signup;
  window.fetchAllCities = fetchAllCities;
  window.fetchSingleCity = fetchSingleCity;
  window.selectAllCities = selectAllCities;
  window.setCity = setCity;

  ReactDOM.render(<Root store={ store }/>, root);
});
