import PokemonCards from './PokemonCards'
import React from 'react'

 const PokemonsList = ({ pokemons }) => {
  return (
    <section className='pt-14 grid grid-cols-[repeat(auto-fit,_minmax(180px,_1fr))] gap-4 gap-y-14'>
      {
      pokemons?.map(pokemon => (
      <PokemonCards key={pokemon.id} pokemonURL={pokemon.url} />
      ))}
    </section>
  )
}

export default PokemonsList