import { IconSearch } from "@tabler/icons-react";
import { useState } from "react"
import { useEffect } from "react"
import axios from "axios";
import PokemonsList from "./PokemonsList";


export const Pokemons = () => {

  const [allPokemons, setAllPokemons] = useState([]);
  const[records, setRecords] = useState([]);

  useEffect(() => {
    axios
    .get("https://pokeapi.co/api/v2/pokemon?limit=10&offset=0")
    .then( ({data}) => {
      setAllPokemons(data.results)
      setRecords(data.results)
    })
    .catch((err) => console.log(err))
  }, [])

  const Filter = (event => {
      setRecords(allPokemons.filter(pokemon => pokemon.name.toLowerCase().includes(event.target.value)))
  })
  
    return (
      <section className="p-4 py-5">
        <form>
          <div className="bg-white p-4 rounded-2xl flex text-lg">
            <input 
            className="outline-none flex-1" 
            type="text" 
            autoComplete="off"
            placeholder="Busca tu Pokemon" 
            name="pokemonName"
            onChange={Filter}
            />
            <button className="bg-orange-600 p-2 rounded-xl shadow-md shadow-orange-600 hover:bg-orange-400 transition-colors">
              <IconSearch color="white" stroke={3}/>
            </button>
          </div>
        </form>
        <PokemonsList pokemons={records} />
      </section>
  )
}