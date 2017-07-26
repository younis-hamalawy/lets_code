import merge from 'lodash/merge';

import {
  RECEIVE_All_USERS,
} from '../actions/users_actions';


const UsersReducer = (state = {}, action) => {
  Object.freeze(state)
  switch(action.type) {
    case RECEIVE_ALL_USERS:
      return action.users
      });

    default:
      return state;
  }
};

export default UsersReducer;
