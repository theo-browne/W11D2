import React from 'react'
import { connect } from 'react-redux'
import ItemDetail from './item_detail';
import { selectAllPokemons } from '../reducers/selectors'
import { fetchAllPokemons, fetchPokemon } from '../actions/pokemon_actions'



function mapStateToProps(state, props) {
  
  return {
    item: state.entities.items[+props.match.params.itemId]
  }
}

function mapDispatchToProps(dispatch, props) {
  return {
    fetchAllPokemons: () => dispatch(fetchAllPokemons()),
    fetchPokemon: (pokemonId) => dispatch(fetchPokemon(pokemonId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemDetail)