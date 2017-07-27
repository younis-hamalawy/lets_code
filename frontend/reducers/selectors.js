import { values } from 'lodash';

export const selectAllCities = cities => values(cities);

export const selectAllEvents = ({ entities }) => values(entities);
