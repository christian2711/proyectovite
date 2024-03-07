import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Pokeservice = () => {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=25")
      .then((response) => response.json())
      .then((data) => {
        const formattedPokemonList = data.results.map((pokemon, index) => ({
          id: index + 1,
          name: pokemon.name,
          url: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
            index + 1
          }.png`,
        }));
        setPokemonList(formattedPokemonList);
      })
      .catch((error) => {
        console.error("Error al obtener la lista de Pokémon:", error);
      });
  }, []);

  return (
    <div className="poke">
      {pokemonList.map((pokemon) => (
        <Link to={`/detalle/${pokemon.id}`} key={pokemon.id}>
          <div className="container">
            <h3 className="nombre">{pokemon.name}</h3>
            <img className="imagen" src={pokemon.url} alt={pokemon.name} />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Pokeservice;