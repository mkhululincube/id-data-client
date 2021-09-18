import { SCREEN_SIZE, SHOW_HEADER } from '../actions/actionTypes';
export const ScreenSize = (state=[], action) => {
  switch (action.type) {
    case SCREEN_SIZE:
    return action.payload;
      default:
    return state
  }
}
export const ShowHeader = (state=[], action) => {
  switch (action.type) {
    case SHOW_HEADER:
    return action.payload;
      default:
    return state
  }
}