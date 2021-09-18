import { WEB3_PROVIDER } from '../actions/actionTypes';
export const Web3Provider = (state=[], action) => {
  switch (action.type) {
    case WEB3_PROVIDER:
    return action.payload;
      default:
    return state
  }
}
