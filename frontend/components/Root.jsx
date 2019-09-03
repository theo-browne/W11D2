import React from 'react'
import PokemonIndexContainer from './pokemon_index_container';
import {Route} from 'react-router-dom'

const Root = props => {
  return(
    <div>
      <Route path="/" component={PokemonIndexContainer} />
    </div>
  )
}

export default Root