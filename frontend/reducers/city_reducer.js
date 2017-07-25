import _ from 'lodash';

import {
  RECEIEVE_SINGLE_CITY
} from '../actions/cities_actions';

import {
   RECEIEVE_SINGLE_REGISTRATION, RECEIVE_ERRORS, DELETE_REGISTRATION
} from '../actions/registrations_actions';



const defaultState = {};


const CityReducer = (state = defaultState, action) => {
  Object.freeze(state)

  switch (action.type) {
    case RECEIEVE_SINGLE_CITY:
      return action.city
    // case RECEIEVE_SINGLE_REGISTRATION:
    //   return merge({}, state, {
    //     action.city.event[event.id].registered_users
    //   })
    // case RECEIVE_ERRORS:
    //   return action.city.event[event.id].registered_users
    // case DELETE_REGISTRATION:
    //   return action.city

    default:
      return state;
  }
};

export default CityReducer;
