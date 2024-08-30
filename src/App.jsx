import { Aside } from "./components/Aside.jsx";
import ModalPokemon from "./components/ModalPokemon.jsx";
import { Pokemons } from "./components/Pokemons.jsx";
import "./index.css";
import usePokemonContext from "./hooks/usePokemonContext.js";

export default function App() {
  const { showDetailPokemon, closePokemonDetail } = usePokemonContext();

  return (
    <section className="bg-[#F6F8FC] h-screen font-outfit overflow-y-auto">
      <main className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_350px]">
        <Pokemons />
        <Aside />
        <ModalPokemon
          showModal={showDetailPokemon}
          onCloseModal={closePokemonDetail}
        />
      </main>
    </section>
  );
}
