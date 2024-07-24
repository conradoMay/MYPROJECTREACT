import { useContext } from 'react'
import { Aside } from './components/Aside.jsx'
import ModalPokemon from './components/ModalPokemon.jsx'
import { Pokemons } from './components/Pokemons.jsx'
import './index.css'
import { PokemonContext } from './context/PokemonContext.jsx'

export default function App() {

  const {showDetailPokemon} = useContext(PokemonContext);
  console.log(showDetailPokemon);

  return (
    <section className='bg-[#F6F8FC] h-screen font-outfit overflow-y-auto'>
      <main className='max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_350px]'>
        <Pokemons />
        <Aside />
        <ModalPokemon />
      </main>
    </section>
  )
}
