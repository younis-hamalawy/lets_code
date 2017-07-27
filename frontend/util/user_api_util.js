export const setCity = (user_id, user) => (
  $.ajax({
    method: 'PATCH',
    url: `/api/users/${user_id}`,
    data: { user: user }
  })
);


export const fetchAllUsers = () => {
  return $.ajax({
    method: 'GET',
    url: `api/users/`
  });
};
