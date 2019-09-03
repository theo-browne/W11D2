import React from 'react'

class PokemonDetail extends React.Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.fetchPokemon(this.props.match.params.id)
  }

  render(){
    debugger
    return(
      <p>detail</p>
    )
  }
}

export default PokemonDetail;