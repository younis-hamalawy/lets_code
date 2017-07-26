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

export const createRegistration = (registration) => {
  return $.ajax({
    method: 'POST',
    url: `api/registrations`,
    data: {registration}
  });
};

export const destroyRegistration = (registrationId) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/registrations/${registrationId}`
  });
};
