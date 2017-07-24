export const fetchAllEvents = (city_id) => {
  return $.ajax({
    method: 'GET',
    url: `api/cities/${city_id}/events`
  });
};

// export const fetchSingleEvent = (event_id) => {
//   return $.ajax({
//     method: 'GET',
//     url: `api/cities/${city_id}/events`
//   });
// };

export const createEvent = ({ event }) => {
  return $.ajax({
    method: 'POST',
    url: `api/cities/${event.city_id}/events`,
    data: {event}
  });
};

export const destroyEvent = (eventId) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/events/${event_id}`
  });
};
