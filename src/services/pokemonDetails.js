import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pokemonURL: "",
};

export const pokemonSlice = createSlice({
  name: "pokemonDetail",
  initialState,
  reducers: {
    setURL: (state, payload) => {
      state.pokemonURL = payload.payload;
    },
  },
});

export const { setURL } = pokemonSlice.actions;

export default pokemonSlice.reducer;
