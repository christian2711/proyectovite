import React from 'react';
import Headers from "./components/Headers";
import Footer from "./components/Footer";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PokeService from './service/Pokeservice';
import Favoritos from './components/Favoritos'
import EvolucionPokemon from './components/EvolucionPokemon';

function App() {
  const favorites = [];
  
  return (
    <BrowserRouter>
      <Headers />
      <Routes>
      <Route path="/" element={<PokeService />} />
      <Route path="/detalle/:pokemonId" element={<Favoritos />} />
      <Route path="/pokemon/:pokemonId/evolucion" element={<EvolucionPokemon />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
