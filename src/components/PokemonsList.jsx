import { useNavigate } from "react-router-dom";
import PokemonCards from "./PokemonCards";
import { useDispatch } from "react-redux";
import { setURL } from "../services/pokemonDetails";

const PokemonsList = ({ pokemons }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const hanldeClick = (pokemon) => {
    dispatch(setURL(pokemon.url));
    navigate(`/${pokemon.name}`);
  };

  return (
    <section className="pt-14 grid grid-cols-[repeat(auto-fit,_minmax(180px,_1fr))] gap-4 gap-y-14">
      {pokemons.map((pokemon) => (
        <PokemonCards
          key={pokemon.url}
          pokemonURL={pokemon.url}
          onClick={() => hanldeClick(pokemon)}
        />
      ))}
    </section>
  );
};

export default PokemonsList;
