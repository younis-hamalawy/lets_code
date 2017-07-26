import { values } from 'lodash';

export const selectAllCities = cities => values(cities);

export const selectAllEvents = ({ events }) => values(events);

export const selectAllRegisteredUsers = ( city , eventId ) => values(city.events[eventId].registered_users);
