import _ from 'lodash';

import {
  RECEIVE_ALL_CITIES,
  // RECEIEVE_SINGLE_CITY
} from '../actions/cities_actions';

const defaultState = {};


const CitiesReducer = (state = defaultState, action) => {
  Object.freeze(state)


  switch (action.type) {
    case RECEIVE_ALL_CITIES:
      return action.cities
    // case RECEIEVE_SINGLE_CITY:
    //   return _.values(action.city)
    default:
      return state;
  }
};

export default CitiesReducer;
