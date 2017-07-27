import { values } from 'lodash';

export const selectAllCities = cities => values(cities);

export const selectAllEvents = ({ entities }) => values(entities);

export const selectHostedEvents = (entities, currentUser) => {
  const hostedEvents = [];
  const allEventsIds = Object.keys(entities);
  for (let i = 0; i < allEventsIds.length; i++) {
    if (entities[allEventsIds[i]].host_id === currentUser.id) {
      hostedEvents.push(entities[allEventsIds[i]]);
    }
  }
  return hostedEvents;
};

export const selectJoinedEvents = (entities) => {
  const joinedEvents = [];
  const currentDay = new Date();
  const allEventsIds = Object.keys(entities);
  for (let i = 0; i < allEventsIds.length; i++) {
    let date = new Date(entities[allEventsIds[i]].date)
    if (entities[allEventsIds[i]].attending && currentDay < date) {
      joinedEvents.push(entities[allEventsIds[i]]);
    }
  }
  return joinedEvents;
};

export const selectPastEvents = (entities) => {
  const pastEvents = [];
  const currentDay = new Date();
  const allEventsIds = Object.keys(entities);
  for (let i = 0; i < allEventsIds.length; i++) {
    let date = new Date(entities[allEventsIds[i]].date)
    if (entities[allEventsIds[i]].attending && currentDay > date) {
      pastEvents.push(entities[allEventsIds[i]]);
    }
  }
  return pastEvents;
};
