import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';

const DetallePokemon = () => {
  const { pokemonId } = useParams();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
      .then((response) => response.json())
      .then((data) => {
        const pokemonDetails = {
          url: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png`,
          name: data.name,
          height: data.height,
          weight: data.weight,
          abilities: data.abilities.map((ability) => ability.ability.name),
        };
        setPokemon(pokemonDetails);
      })
      .catch((error) => {
        console.error("Error al obtener los detalles del Pokémon:", error);
      });
  }, [pokemonId]);

  if (!pokemon) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
            
        <img className="imagen2" src={pokemon.url} alt={pokemon.name} />
      
      <h2>Detalles del Pokémon</h2>
      <p>Nombre: {pokemon.name}</p>
      <p>Altura: {pokemon.height}</p>
      <p>Peso: {pokemon.weight}</p>
      <p>Habilidades: {pokemon.abilities.join(", ")}</p>
      <Link to={`/pokemon/${pokemonId}/evolucion`}>Ver Evolución</Link>
    </div>
  );
};

export default DetallePokemon;