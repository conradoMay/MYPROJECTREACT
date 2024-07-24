import { createContext, useState } from "react";

const PokemonContext  = createContext();

const PokemonProvider = ({children}) => {
    const [showDetailtPokemon, setShowDetailPokemon] = useState(false);

    /* clic the pokemon id (onClick), then show in screen by details*/
    const showPokemonById = () => {
        setShowDetailPokemon(true);
    }

    /* function for to close the modal */
    const closePokemonDetail = () => {
        setShowDetailPokemon(false);
    }

    return (
        <PokemonContext.Provider value={{showDetailtPokemon, showPokemonById, closePokemonDetail,}}>
            {children}
        </PokemonContext.Provider>
    )
}

export { PokemonContext, PokemonProvider }