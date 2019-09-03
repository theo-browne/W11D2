export function selectAllPokemons(state) {
  return Object.values(state.entities.pokemons)
}

export function selectPokemonItems(state, pokemonId) {
  return Object.values(state.entities.items).filter(item => item.pokemon_id === +pokemonId)
}