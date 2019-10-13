export const fetchAllRegistrations = () => {
  return $.ajax({
    method: 'GET',
    url: `api/registrations/`
  });
};
