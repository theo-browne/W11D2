import React from 'react'
import {connect} from 'react-redux'
import PokemonIndex from './pokemon_index';
import {selectAllPokemons} from '../reducers/selectors'
import {fetchAllPokemons, fetchPokemon} from '../actions/pokemon_actions'



function mapStateToProps(state, props) {
  return {
    pokemons: selectAllPokemons(state)
  }
}

function mapDispatchToProps(dispatch, props) {
  return {
    fetchAllPokemons: () => dispatch(fetchAllPokemons()),
    fetchPokemon: (pokemonId) => dispatch(fetchPokemon(pokemonId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PokemonIndex)