export const fetchAllEvents = () => {
  return $.ajax({
    method: 'GET',
    url: `api/events`
  });
};

export const fetchSingleEvent = (event_id) => {
  return $.ajax({
    method: 'GET',
    url: `api/events`
  });
};

export const createEvent = (event) => {
  return $.ajax({
    method: 'POST',
    url: `api/events`,
    data: {event}
  });
};

export const destroyEvent = (eventId) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/events/${eventId}`
  });
};
