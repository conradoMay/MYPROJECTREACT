import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { PokemonProvider } from "./context/PokemonContext.jsx";
import { Provider } from "react-redux";
import { store } from "./config/store.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PokemonDetails from "./pages/PokemonDetails";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PokemonProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />}></Route>
            <Route path="/:name" element={<PokemonDetails />}></Route>
          </Routes>
        </BrowserRouter>
      </PokemonProvider>
    </Provider>
  </React.StrictMode>
);
