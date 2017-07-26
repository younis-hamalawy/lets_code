export const setCity = (id, user) => (
  $.ajax({
    method: 'PATCH',
    url: `/api/users/${id}`,
    data: { user: user }
  })
);


export const fetchAllUsers = () => {
  return $.ajax({
    method: 'GET',
    url: `api/users/`
  });
};
