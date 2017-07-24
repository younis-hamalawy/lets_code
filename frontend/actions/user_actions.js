import * as UserAPIUtil from '../util/user_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';


export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const setCity = (id, user) => dispatch => (
  UserAPIUtil.setCity(id, user).then(user => (
    dispatch(receiveCurrentUser(user))
  ))
);

export const registerEvent = (event_id, user_id) => dispatch (
  UserAPIUtil.registerEvent(event_id, user_id).then(user => (
    dispatch(receiveCurrentUser(user))
  ))
);
