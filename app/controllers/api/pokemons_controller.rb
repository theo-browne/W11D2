class Api::PokemonsController < ApplicationController

  def show 
    @pokemon = Pokemon.find(params[:id])
  end 

  def index 
    @pokemons = Pokemon.all
  end

  def create
    @pokemon = Pokemon.new(pokemon_params)
    

    if @pokemon.save
      render :show
    else 
      render @pokemon.errors.full_messages, status: 422
    end
  end

  def pokemon_params
    params.require(:pokemon).permit(:name, :attack, :defense, :poke_type, :moves, :image_url)
  end

  
end
