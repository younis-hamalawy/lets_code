import merge from 'lodash/merge';

import {
  RECEIVE_ALL_CITIES,
  // RECEIEVE_SINGLE_CITY
} from '../actions/cities_actions';

const defaultState = {
  entities: {},
  // currentCity: null
};


const CitiesReducer = (state = defaultState, action) => {
  Object.freeze(state)


  switch (action.type) {
    case RECEIVE_ALL_CITIES:
      return merge({}, state, {
        entities: action.cities
      });
    // case RECEIEVE_SINGLE_CITY:
    //   return merge({}, state, {
    //     entities: action.city.city,
    //     currentCity: action.city.currentCity
    //   })
    default:
      return state;
  }
};

export default CitiesReducer;
