import merge from 'lodash/merge';

import {
  RECEIVE_ALL_CITIES,
  RECEIEVE_SINGLE_CITY
} from '../actions/cities_actions';

const defaultState = {
  name: "",
  city_abrv: "",
  image_url: "",
};


const CitiesReducer = (state = defaultState, action) => {
  Object.freeze(state)
  let newState = merge({}, state);

  switch (action.type) {
    case RECEIVE_ALL_CITIES:
      return merge({}, action.cities);
    case RECEIEVE_SINGLE_CITY:
      return merge({},state,{[action.city.id]: action.city})
    default:
      return state;
  }
};

export default CitiesReducer;
