import { CITIZENS } from '../actions/actionTypes';
export const Citizens = (state=[], action) => {
  switch (action.type) {
    case CITIZENS:
    return action.payload;
      default:
    return state
  }
}
