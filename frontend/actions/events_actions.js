import * as EventsAPIUtil from '../util/events_api_util';

export const RECEIVE_ALL_EVENTS = "RECEIEVE_ALL_EVENTS";
export const RECEIVE_SINGLE_EVENT = "RECEIEVE_SINGLE_EVENT";
export const "RECEIVE_ERRORS" = "RECEIVE_ERRORS";
export const "DELETE_EVENT" = "DELETE_EVENT";

export const receiveAllEvents = events => ({
  type: RECEIVE_ALL_EVENTS,
  events
});

export const receiveSingleEvent = event => ({
  type: RECEIEVE_SINGLE_EVENT,
  event
});


export const deleteEvent = (event) => ({
  type: DELETE_EVENT,
  event
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
})

export const fetchAllEvents = (city_id) => dispatch => (
  EventsAPIUtil.fetchAllEvents().then(events => (
      dispatch(receiveAllEvents(events))
  ))
);

// export const fetchSingleEvent = (event_id) => dispatch => (
//   EventsAPIUtil.fetchSingleEvent(eventId).then(event => dispatch(receiveSingleEvent(event)))
// );

export const destroyEvent = (eventId) => dispatch => (
  EventsAPIUtil.destroyEvent(eventId).then(event => dispatch(deleteEvent(event)))
);

export const createEvent = ({ event }) => (dispatch) => (
  EventsAPIUtil.createEvent({ event })
    .then((events) => dispatch(receiveAllEvents(events)),
                  (errors) => dispatch(receiveErrors(errors)))
);
