import { RECEIVE_POKEMON, RECEIVE_POKEMONS, CREATE_POKEMON } from '../actions/pokemon_actions'

export default function pokemonsReducer(state = {} , action) {
  let newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_POKEMON:
      newState[action.payload.pokemon.id] = action.payload.pokemon
      return newState
      break;

    case RECEIVE_POKEMONS:
      Object.values(action.payload).forEach( (pokemon) => {
        newState[pokemon.id] = pokemon; 
      });
      
      return newState;
      break;

    default:
      return state;
      break;
  }
}