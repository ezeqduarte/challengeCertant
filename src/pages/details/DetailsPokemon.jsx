import React, { useEffect, useState } from "react";
import { usePokemonsUser } from "../../store/usePokemonsStore";
import { useParams } from "react-router-dom";

export default function DetailsPokemon() {
  const { id } = useParams();
  const pokemons = usePokemonsUser();
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    const pokemonDetails = pokemons.filter((pokemon) => pokemon.id == id);
    setPokemon(pokemonDetails[0]);
  }, []);

  console.log(pokemon);

  return (
    <div className="container min-h-screen mx-auto pt-[5rem] lg:pt-[0rem] pb-5 flex justify-center items-center flex-wrap content-center gap-5 ">
      <h2 className="text-[4rem] text-center w-full font-bold">
        He is {pokemon.name}!
      </h2>
      <div className="flex flex-col lg:flex-row lg:justify-evenly lg:w-full justify-center items-center">
        <img className="inline-block max-w-[475px] max-h-[475px]" src={pokemon.image} alt={pokemon.id} />
        <div className="flex flex-col  divide-y text-[18px] px-[20px] flex-col w-full">
          <div className="pt-5 pb-3">
            <h3 className="font-semibold">Level:</h3>
            <p>- {pokemon.lvl}</p>
          </div>
          <div className="pt-5 pb-3">
            <h3 className="font-semibold">Type:</h3>
            {pokemon.type?.map((type) => (
              <p>- {type}</p>
            ))}
          </div>
          <div className="pt-5 pb-3">
            <h3 className="font-semibold">Abilities:</h3>
            {pokemon.abilities?.map((ability) => (
              <p>
                - {ability.name}: {ability.description}{" "}
              </p>
            ))}
          </div>
          <div className="pt-5 pb-3">
            <h3 className="font-semibold">Evolutions:</h3>
            <div className="flex text-center gap-5 flex-wrap justify-center items-center">
              {pokemon.evolutions?.map((evolution) => (
                <div>
                  <p>Name: {evolution.name}</p>
                  <img className="w-[150px]" src={evolution.image}></img>

                  <p>Type: {evolution.type}</p>

                  <p>Level to evolve: {evolution.lvl}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
