export function fetchAllPokemons() {
  return $.ajax({
    method: 'GET',
    url: '/api/pokemons'
  })
}

export function fetchPokemon(pokemonId) {
  return $.ajax({
    method: 'GET',
    url: `/api/pokemons/${pokemonId}`
  })
}