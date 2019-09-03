import React from 'react';
import { Link } from "react-router-dom";


const PokemonIndexItem = props => {
  return(
    <div className="list-item">
    <Link to={`/pokemon/${props.pokemon.id}`}> 
      <div className="poke-link" >
          <img className="small-image" src={props.pokemon.image_url} />
          <li>{props.pokemon.name}</li>
      
    </div>
    </Link>
    </div>
  )
}


export default PokemonIndexItem