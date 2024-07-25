import { IconSearch } from "@tabler/icons-react";
import { useRef, useState } from "react"
import { useEffect } from "react"
import axios from "axios";
import PokemonsList from "./PokemonsList";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

const initial_limit = 50;
const increase_limit = 50;


export const Pokemons = () => {

  const [allPokemons, setAllPokemons] = useState([]);
  const [pokemonName, setPokemonName] = useState("");
  const [limit, setLimit] = useState(initial_limit);

  /* in this code, useRef only is ussed to do reference scroll */
  const targetObserver = useRef(null)
  const entry = useIntersectionObserver(targetObserver, {})
  const isVisible = !!entry?.isIntersecting

  const pokemonsByName = allPokemons.filter(pokemon => pokemon.name.includes(pokemonName))
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setPokemonName(e.target.pokemonName.value.toLowerCase());
  }

  const handleChangePokemonName = (e) => 
    setPokemonName(e.target.value.toLowerCase())

  useEffect(() => {
    axios
    .get("https://pokeapi.co/api/v2/pokemon?limit=1400&offset=0")
    .then( ({data}) => {
      setAllPokemons(data.results)
    })
    .catch((err) => console.log(err))
  }, [])

  /* useEffect by scroll and variable */
 useEffect(() => {
  const maxPokemons = pokemonsByName.length
    if(isVisible && maxPokemons != 0){
      /* limit with pokemons filters by name */
      const newLimit = limit + increase_limit;
      newLimit > maxPokemons ? setLimit(maxPokemons) : setLimit(newLimit);
    }
  }, [isVisible])

  useEffect(() =>{
    setLimit(initial_limit);
  }, [pokemonName])
  
    return (
      <section className="p-4 py-5">
        <form onSubmit={handleSubmit}>
          <div className="bg-white p-4 rounded-2xl flex text-lg">
            <input 
            className="outline-none flex-1" 
            type="text" 
            autoComplete="off"
            placeholder="Search Pokemon" 
            name="pokemonName"
            onChange={handleChangePokemonName}
            />
            <button type="button" className="bg-orange-600 p-2 rounded-xl shadow-md shadow-orange-600 hover:bg-orange-400 transition-colors">
              <IconSearch color="white" stroke={3}/>
            </button>
          </div>
        </form>
        <PokemonsList pokemons={pokemonsByName.slice(0, limit)} />
        
        {/* OBSERVER SCROLL*/}
        <span ref={targetObserver}></span>
      </section>
  )
}