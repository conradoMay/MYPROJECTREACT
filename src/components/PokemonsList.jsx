import usePokemonContext from '../hooks/usePokemonContext'
import PokemonCards from './PokemonCards'
import React from 'react'

 const PokemonsList = ({ pokemons }) => {

  const { showPokemonById } = usePokemonContext()

  return (
    <section className='pt-14 grid grid-cols-[repeat(auto-fit,_minmax(180px,_1fr))] gap-4 gap-y-14'>
      {
      pokemons.map((pokemon) => (
      <PokemonCards key={pokemon.url} pokemonURL={pokemon.url} onClick={showPokemonById}/>
      ))}
    </section>
  )
}

export default PokemonsList