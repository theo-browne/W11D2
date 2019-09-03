import React from 'react'
import PokemonIndexItem from './pokemon_index_item'
import {Route} from 'react-router-dom';
import PokemonDetailViewContainer from './pokemon_detail_container'
import ItemDetailContainer from './item_detail_container';

class PokemonIndex extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchAllPokemons();
  }

  render(){
    
    if (this.props.pokemons.length === 0) return null
    return (
      <div className="container">
        <ul className="index">
          {this.props.pokemons.map(pokemon => <PokemonIndexItem key={pokemon.id} pokemon={pokemon} />)}
        </ul>
        <div className="detail-view">
          <Route path="/pokemon/:id" component={PokemonDetailViewContainer} />
        </div>
      </div>

    )
  }
}


export default PokemonIndex