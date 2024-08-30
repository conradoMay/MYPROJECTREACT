import { configureStore } from "@reduxjs/toolkit";
import pokemonReducer from "../services/pokemonDetails";
import { pokemonApi } from "../services/pokemon.api";

export const store = configureStore({
  reducer: {
    pokemonDetails: pokemonReducer,
    [pokemonApi.reducerPath]: pokemonApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokemonApi.middleware),
});
