import { RECEIVE_POKEMON } from "../actions/pokemon_actions";

export default function uiReducer(state = {}, action) {
  let newState = Object.assign({}, state);
  switch (action.type) {
    default:
      return state;
      break;
  }
}