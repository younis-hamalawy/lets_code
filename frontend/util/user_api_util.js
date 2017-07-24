export const setCity = (id, user) => (
  $.ajax({
    method: 'PATCH',
    url: `/api/users/${id}`,
    data: user
  })
);
