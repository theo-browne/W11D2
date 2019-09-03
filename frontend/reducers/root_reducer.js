import { combineReducers } from 'redux';
import pokemonsReducer from './pokemons_reducer';
import itemsReducer from './items_reducer';


export default combineReducers(
  {
    entities: combineReducers({
    pokemons: pokemonsReducer,
    items: itemsReducer
  })}
  )