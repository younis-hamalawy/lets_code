export const fetchAllCities = () => {
  return $.ajax({
    method: 'GET',
    url: `api/cities`
  });
};

export const fetchSingleCity = (cityId) => {
  return $.ajax({
    method: 'GET',
    url: `api/cities/${cityId}`
  });
};
