import { ADMIN_LOGGED_IN } from '../actions/actionTypes';

export const AdminLoggedIn = (state=[], action) => {
  switch (action.type) {
    case ADMIN_LOGGED_IN:
    return action.payload;
      default:
    return state
  }
}