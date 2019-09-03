import React from 'react'
import ItemDetailContainer from './item_detail_container'
import {Route, Link} from 'react-router-dom'

class PokemonDetail extends React.Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){
    
    this.props.fetchPokemon(this.props.match.params.id)
  }
  componentDidUpdate(prevProps) {
    if (prevProps.match.params.id !== this.props.match.params.id ) {
      this.props.fetchPokemon(this.props.match.params.id)
    }
  }

  render(){
    if (this.props.pokemon === undefined) return null
    if (this.props.pokemon.moves === undefined) return null
    
    const moves = this.props.pokemon.moves.join(", ")
    return(
      
      <div className="detail">
        <img className="poke-image" src={this.props.pokemon.image_url} alt=""/>
        <title>{this.props.pokemon.name}</title>
        <ul className="pokemon-detail">
          <li>Type: {this.props.pokemon.poke_type}</li>
          <li>Attack: {this.props.pokemon.attack}</li>
          <li>Defense: {this.props.pokemon.defense}</li>
          <li>
            Moves: {moves}
            {/* {this.props.pokemon.moves.map(move => <div> { move}</div>)} */}
            
            </li>
        </ul>
        <div className="items">
          <div className="item-images">
          {this.props.items.map(item => <Link to={`/pokemon/${this.props.pokemon.id}/items/${item.id}`}><img className="item-image" src={item.image_url}></img> </Link>)}
        </div>
          <Route path="/pokemon/:id/items/:itemId" component={ItemDetailContainer} />
        </div>
      </div>
    )
  }
}

export default PokemonDetail;