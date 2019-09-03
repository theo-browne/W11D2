import { RECEIVE_POKEMON } from "../actions/pokemon_actions";

export default function pokemonsReducer(state = {}, action) {
  let newState = Object.assign({}, state);
  switch (action.type) {

    case RECEIVE_POKEMON:
      Object.values(action.payload.items).forEach(item => {
        newState[item.id] = item
      })
    return newState
    default:
      return state;
      break;
  }
}