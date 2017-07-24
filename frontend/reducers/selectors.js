import { values } from 'lodash';

export const selectAllCities = ({ cities }) => values(cities);

export const selectAllEvents = ({ events }) => values(events);
