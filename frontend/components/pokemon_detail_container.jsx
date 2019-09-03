import React from 'react';
import { connect } from 'react-redux';
import { selectPokemonItems } from '../reducers/selectors'
import { fetchAllPokemons, fetchPokemon } from '../actions/pokemon_actions'
import PokemonDetail from './pokemon_detail'


// debugger
function mapStateToProps(state, props) {
  return {
    pokemon: state.entities.pokemons[props.match.params.id],
    items: selectPokemonItems(state, props.match.params.id)
    // items: Object.values(state.entities.items).filter(item => item.pokemon_id === +props.match.params.id)
  }
}

function mapDispatchToProps(dispatch, props) {
  return {
    fetchPokemon: (pokemonId) => dispatch(fetchPokemon(pokemonId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetail)