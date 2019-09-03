import React from 'react'

class PokemonForm extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      name: "",
      attack: 0,
      defense: 0,
      poke_type: "",
      moves: [],
      image_url: ""
    }

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit() {

  }

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
      <label >
      <input type="text" name="" id=""/>
      </label>
      </form>
    )
  }
}

export default PokemonForm