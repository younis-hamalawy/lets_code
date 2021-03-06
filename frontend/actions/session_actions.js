import * as APIUtil from '../util/session_api_util'

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const CLEAR_SESSION_ERRORS = 'CLEAR_SESSION_ERRORS';

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});
export const clearErrors = () => ({
  type: CLEAR_SESSION_ERRORS
});


export const signup = user => dispatch => (
  APIUtil.signup(user).then(user => {
    return (
    dispatch(receiveCurrentUser(user)),
    dispatch(clearErrors())
  )}, err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const signin = user => dispatch => (
  APIUtil.signin(user).then(user => {
    return (
    dispatch(receiveCurrentUser(user)),
    dispatch(clearErrors())
  )}, err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const signout = () => dispatch => (
  APIUtil.signout().then(user => (
    dispatch(receiveCurrentUser(null))
  ))
);
