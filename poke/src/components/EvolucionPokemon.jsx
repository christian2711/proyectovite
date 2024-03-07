import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const EvolucionPokemon = () => {
  const { pokemonId } = useParams();
  const [evolutionChain, setEvolutionChain] = useState(null);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemonId}`)
      .then((response) => response.json())
      .then((data) => {
        const evolutionChainUrl = data.evolution_chain.url;
        fetch(evolutionChainUrl)
          .then((response) => response.json())
          .then((data) => {
            setEvolutionChain(data.chain);
          })
          .catch((error) => {
            console.error("Error al obtener la cadena de evolución:", error);
          });
      })
      .catch((error) => {
        console.error("Error al obtener los detalles del Pokémon:", error);
      });
  }, [pokemonId]);

  if (!evolutionChain) {
    return <div>Cargando...</div>;
  }

  const renderEvolutions = (evolutionData) => {
    const { species, evolves_to } = evolutionData;
    return (
      <div key={species.name}>
        <img className='imagen3'src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${species.url.split("/")[6]}.png`} alt={species.name} />
        <p>{species.name}</p>
        {evolves_to.length > 0 && (
          <div >
            {evolves_to.map((evolution) => renderEvolutions(evolution))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div>
      <h2>Cadena de Evolución del Pokémon</h2>
      <div >
        {renderEvolutions(evolutionChain)}
      </div>
    </div>
  );
};

export default EvolucionPokemon;