import * as EventsAPIUtil from '../util/event_api_util';

export const RECEIVE_ALL_EVENTS = "RECEIEVE_ALL_EVENTS";
export const RECEIVE_SINGLE_EVENT = "RECEIEVE_SINGLE_EVENT";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const CLEAR_ERRORS = 'CLEAR_ERRORS';
export const DELETE_EVENT = "DELETE_EVENT";

export const receiveAllEvents = events => ({
  type: RECEIVE_ALL_EVENTS,
  events
});

export const receiveSingleEvent = event => ({
  type: RECEIVE_SINGLE_EVENT,
  event
});


export const deleteEvent = event => ({
  type: DELETE_EVENT,
  event
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
})

export const clearErrors = () => ({
  type: CLEAR_ERRORS
});

export const fetchAllEvents = () => dispatch => (
  EventsAPIUtil.fetchAllEvents().then(events => (
      dispatch(receiveAllEvents(events))
  ))
);

export const fetchSingleEvent = (eventId) => dispatch => (
  EventsAPIUtil.fetchSingleEvent(eventId).then(event => dispatch(receiveSingleEvent(event)))
);

export const destroyEvent = (eventId) => dispatch => (
  EventsAPIUtil.destroyEvent(eventId).then(event => dispatch(deleteEvent(event)))
);

export const createEvent = ( event ) => (dispatch) => (
  EventsAPIUtil.createEvent( event )
    .then((event) => dispatch(receiveSingleEvent(event)),
                  (errors) => dispatch(receiveErrors(errors)))
);

export const registerEvent = (event_id, user_id) => dispatch => (
  EventsAPIUtil.registerEvent(event_id, user_id).then(event => (
    dispatch(receiveSingleEvent(event))
  ))
);
export const deregisterEvent = (event_id, user_id) => dispatch => (
  EventsAPIUtil.deregisterEvent(event_id, user_id).then(event => (
    dispatch(receiveSingleEvent(event))
  ))
);
