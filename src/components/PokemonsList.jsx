import PokemonDetalles from './PokemonDetalles'
import React from 'react'

 const PokemonsList = ({ pokemons }) => {
  return (
    <section className='pt-14 grid grid-cols-[repeat(auto-fit,_minmax(180px,_1fr))] gap-4 gap-y-14'>
      {
      pokemons?.map(pokemon => (
      <PokemonDetalles key={pokemon.id} pokemonURL={pokemon.url} />
      ))}
    </section>
  )
}

export default PokemonsList



/*const PokemonsList = ({pokemons}) => {
  return (
    <section>
        {pokemons && pokemons.results.map((pokemon) =>(
            <h1 key={pokemon.name}>{pokemon.name}</h1>
            //<PokemonDetalles key={pokemon.id} pokemonURL={pokemon}/>
        ))}
    </section>
  )
}*/