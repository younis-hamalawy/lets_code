import { merge } from 'lodash';

import {
  RECEIVE_ALL_EVENTS,
  RECEIVE_SINGLE_EVENT
} from '../actions/events_actions';

import {
  RECEIVE_SINGLE_REGISTRATION
} from '../actions/registrations_actions';

const defaultState = {
  entities: {},
  errors: []
};


const EventsReducer = (state = defaultState, action) => {
  Object.freeze(state)


  switch (action.type) {
    case RECEIVE_ALL_EVENTS:
      return merge({}, state, {
        entities: action.events
      });
    case RECEIVE_SINGLE_EVENT:
      return merge({}, state, {
        entities: action.event
      });
    case RECEIVE_SINGLE_REGISTRATION:
      const newState =  merge({}, state);
      newState.entities[action.registration.event_id].attending = true;
      return newState;
    default:
      return state;
  }
};

export default EventsReducer;
