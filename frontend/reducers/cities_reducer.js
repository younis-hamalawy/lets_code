import merge from 'lodash/merge';

import {
  RECEIVE_ALL_CITIES,
  RECEIEVE_SINGLE_CITY
} from '../actions/cities_actions';

const defaultState = {
  entities: {},
};


const CitiesReducer = (state = {}, action) => {
  Object.freeze(state)


  switch (action.type) {
    case RECEIVE_ALL_CITIES:
      return action.cities;
    case RECEIEVE_SINGLE_CITY:
      return merge({}, state, action.city)
    default:
      return state;
  }
};

export default CitiesReducer;
