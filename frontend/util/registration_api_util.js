export const fetchAllRegistrations = () => {
  return $.ajax({
    method: 'GET',
    url: `api/registrations/`
  });
};

// export const fetchSingleRegistration = (registration_id) => {
//   return $.ajax({
//     method: 'GET',
//     url: `api/cities/${city_id}/registrations`
//   });
// };
