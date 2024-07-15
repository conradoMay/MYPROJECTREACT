import { IconSearch } from "@tabler/icons-react";
import { useState } from "react"
import { useEffect } from "react"
import axios from "axios";
import PokemonsList from "./PokemonsList";


export const Pokemons = () => {

  const [allPokemons, setAllPokemons] = useState([]);
  const [pokemonName, setPokemonName] = useState("");

  const pokemonsByName = allPokemons.filter(pokemon => pokemon.name.includes(pokemonName));

  console.log(pokemonsByName);

  const buscarPokemon = (e) =>{
    e.preventDefault();
    setPokemonName(e.target.pokemonName.value);
  }

  useEffect(() => {
    axios
    .get("https://pokeapi.co/api/v2/pokemon?limit=10&offset=0")
    .then(({ data }) => setAllPokemons(data.results))
    .catch((err) => console.log(err))
  }, [])
  
    return (
      <section className="p-4 py-5">
        <form onSubmit={buscarPokemon}>
          <div className="bg-white p-4 rounded-2xl flex text-lg">
            <input 
            className="outline-none flex-1" 
            type="text" 
            autoComplete="off"
            placeholder="Busca tu Pokemon" 
            name="pokemonName"
            />
            <button className="bg-orange-600 p-2 rounded-xl shadow-md shadow-orange-600 hover:bg-orange-400 transition-colors">
              <IconSearch color="white" stroke={3}/>
            </button>
          </div>
        </form>
        <PokemonsList pokemons={pokemonsByName} />
      </section>
  )
}



/* <section> {pokemon && 
      <div>
        <h1>{pokemon.results.map((pokemon) => {
          return (
            <div key={pokemon.name}>{pokemon.name}</div>
          )
        })}</h1>
      </div>
    }
     </section> */
