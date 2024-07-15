import axios from "axios";
import { useState, useEffect } from "react";


const PokemonDetalles = ({ pokemonURL }) => {

    //console.log({pokemonURL});
    const [pokemon, setPokemon] = useState(null);

    const colorTipo = {
        grass: "bg-green-500",
        fire: "bg-orange-500",
        water: "bg-blue-500",
        poison: "bg-red-500",
        flying: "bg-pink-500",
        normal: "bg-gray-500",
        electric: "bg-purple-500",
        ground: "bg-yellow-500",
        fairy: "bg-violet-500",
        bug: "bg-amber-500",
        fighting: "bg-green-500",
        psychic: "bg-orange-500",
        rock: "bg-blue-500",
        steel: "bg-pink-500",
        ice: "bg-gray-500",
        ghost: "bg-purple-500",
        dragon: "bg-red-500",
        dark: "bg-yellow-500",

    }
  
    useEffect(() => {
        axios
        .get(pokemonURL)
        .then(({ data }) => setPokemon(data))
        .catch((err) => console.log(err))
    }, [])

  return (
  <article className="text-center bg-white rounded-[30px] relative font-semibold capitalize pb-4 shadow-lg shadow-slate-400/10 border-2 border-transparent hover:border-slate-200 cursor-pointer group grid gap-2">
    <header className="h-9 shadow-lg">
        <img 
        className="absolute left-1/2 -translate-x-1/2 top-0 -translate-y-1/2 group-hover:scale-150 transition-transform pixelated"
        src={pokemon?.sprites.versions["generation-v"]["black-white"].animated.front_default} alt="" />
    </header>
    <span className="text-sm text-slate-400">No. {pokemon?.id}</span>
    <h4 className="text-lg">{pokemon?.name}</h4>
    <ul className="flex gap justify-center">
        {pokemon?.types.map((type) => (
            <li 
        className={`p-1 rounded-md px-2 text-sm mx-1 ${colorTipo[type.type.name]}`} key={type.type.name}> 
            {type.type.name}
            </li>
        ))}
    </ul>
    </article>
  )
}

export default PokemonDetalles
