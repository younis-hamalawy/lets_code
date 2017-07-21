import _ from 'lodash';

import {
  RECEIEVE_SINGLE_CITY
} from '../actions/cities_actions';

const defaultState = {};


const CityReducer = (state = defaultState, action) => {
  Object.freeze(state)


  switch (action.type) {
    case RECEIEVE_SINGLE_CITY:
      return action.city
    default:
      return state;
  }
};

export default CityReducer;
