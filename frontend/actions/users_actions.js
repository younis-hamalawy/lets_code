import * as UserAPIUtil from '../util/user_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ALL_USERS = 'RECEIVE_ALL_USERS';

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveAllUsers = (users) => ({
  type: RECEIVE_ALL_USERS,
  users
});

export const setCity = (cityId, user) => dispatch => (
  UserAPIUtil.setCity(cityId, user).then(user => (
    dispatch(receiveCurrentUser(user))
  ))
);

// export const registerEvent = (event_id, user_id) => dispatch => (
//   UserAPIUtil.registerEvent(event_id, user_id).then(user => (
//     dispatch(receiveCurrentUser(user))
//   ))
// );

export const fetchAllUsers = () => dispatch(
  UsersAPIUtil.fetchAllusers().then(users => (
      dispatch(receiveAllUsers(users))
  ))
);
