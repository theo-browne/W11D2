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
      <label > Name
      <input type="text" value={this.state.name}/>
      </label>
      <label > Attack
      <input type="number" value={this.state.attack}/>
      </label>
      <label > Defense
      <input type="text" value={this.state.defense}/>
      </label>
      <label > Type
      <input type="text" value={this.state.poke_type}/>
      </label>
      </form>
    )
  }
}

export default PokemonForm