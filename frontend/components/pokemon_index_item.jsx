import React from 'react';
import { Link } from "react-router-dom";


const PokemonIndexItem = props => {
  return(
    <div className="list-item">
    <Link to={`/pokemon/${props.pokemon.id}`}> 
      <div className="poke-link" >
      {<li className="poke-id">{props.pokemon.id}</li>}
          <img className="small-image" src={props.pokemon.image_url} />
          <li className="poke-name">{props.pokemon.name}</li>
      
    </div>
    </Link>
    </div>
  )
}


export default PokemonIndexItem