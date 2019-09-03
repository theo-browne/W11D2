import React from 'react'
import PokemonIndexItem from './pokemon_index_item'
import {Route} from 'react-router-dom';
import PokemonDetailViewContainer from './pokemon_detail_container'

class PokemonIndex extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchAllPokemons();
  }

  render(){
    return (
      <div className="container">
        <ul className="index">
          {this.props.pokemons.map(pokemon => <PokemonIndexItem key={pokemon.id} pokemon={pokemon} />)}
        </ul>
        <div className="detail">
          <Route path="/pokemon/:id" component={PokemonDetailViewContainer} />
        </div>
      </div>

    )
  }
}


export default PokemonIndex