export const RECEIVE_POKEMONS = "RECEIVE_POKEMONS";
export const RECEIVE_POKEMON = "RECEIVE_POKEMON";
export const CREATE_POKEMON = "CREATE_POKEMON";
import * as ApiUtils from '../util/api_util'

export function receivePokemons(pokemons){
  return {
    type: RECEIVE_POKEMONS,
    payload: pokemons
  }
}

export function receivePokemon(pokemon) {
  return {
    type: RECEIVE_POKEMON,
    payload: pokemon
  }
}

// export function createPokemon(pokemon) {
//   return {
//     type: CREATE_POKEMON,
//     pokemon
//   }
// }

export function fetchAllPokemons() {
  return function(dispatch) {
    ApiUtils.fetchAllPokemons().then(res => dispatch(receivePokemons(res)))
  }
}

export function fetchPokemon(pokemonId) {
  return function (dispatch) {
    ApiUtils.fetchPokemon(pokemonId).then(res => dispatch(receivePokemon(res)))
  }
}

export function createPokemon(pokemon) {
  return function(dispatch) {
    ApiUtils.createPokemon(pokemon).then(res => dispatch(receivePokemon(res)) )
  }
}

window.fetchAllPokemons = fetchAllPokemons
window.fetchPokemon = fetchPokemon
