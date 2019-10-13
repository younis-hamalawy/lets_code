export const fetchAllEvents = () => {
  return $.ajax({
    method: 'GET',
    url: `api/events`
  });
};

export const fetchSingleEvent = (event_id) => {
  return $.ajax({
    method: 'GET',
    url: `api/events/${event_id}`
  });
};

export const createEvent = (event) => {
  return $.ajax({
    method: 'POST',
    url: `api/events`,
    data: {event}
  });
};

export const destroyEvent = (event_id) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/events/${event_id}`
  });
};


export const registerEvent = (event_id, user_id) => (
  $.ajax({
    method: 'POST',
    url: `/api/events/${event_id}/registrations`
  })
);

export const deregisterEvent = (event_id, user_id) => (
  $.ajax({
    method: 'Delete',
    url: `/api/events/${event_id}/registrations/${user_id}`
  })
);
