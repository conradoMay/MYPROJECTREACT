import { useParams } from "react-router-dom";
import { useGetPokemonByNameQuery } from "../services/pokemon.api";

export default function PokemonDetails() {
  const { name } = useParams();
  const pokemonQuery = useGetPokemonByNameQuery(name, {
    skip: !name,
  });

  console.log(pokemonQuery);

  if (pokemonQuery.isLoading) {
    return <div>....Cargando</div>;
  }

  return <div>detalles</div>;
}
