import * as CitiesAPIUtil from '../util/city_api_util';

export const RECEIVE_ALL_CITIES = 'RECEIVE_ALL_CITIES';
export const RECEIEVE_SINGLE_CITY = 'RECEIEVE_SINGLE_CITY';

export const receiveAllCities = cities => ({
  type: RECEIVE_ALL_CITIES,
  cities
});

export const receiveSingleCity = city => ({
  type: RECEIEVE_SINGLE_CITY,
  city
})

export const fetchAllCities = () => dispatch => (
  CitiesAPIUtil.fetchAllCities().then(cities => (
      dispatch(receiveAllCities(cities))
  ))
);

export const fetchSingleCity = (cityId) => dispatch => (
  CitiesAPIUtil.fetchSingleCity(cityId)
    .then(city => dispatch(receiveSingleCity(city)))
);
