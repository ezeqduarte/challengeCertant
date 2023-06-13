import React, { useEffect, useMemo, useState } from "react";
import { usePokemonsUser } from "../../store/usePokemonsStore";
import { useParams } from "react-router-dom";
import ButtonEditCreatePokemon from "../../components/ButtonEditCreatePokemon/ButtonEditCreatePokemon";
import PopUpPokemon from "../../components/PopUpPokemon/PopUpPokemon";
import uuid from "react-uuid";

export default function DetailsPokemon() {
  const { id } = useParams();
  const pokemons = usePokemonsUser();
  const [popUp, setPopUp] = useState(false);

  const pokemon = useMemo(() => {
    return pokemons.find((pokemon) => pokemon.id == id);
  }, [pokemons]);

  return (
    <>
      {popUp && !!pokemon && (
        <PopUpPokemon pokemonEdit={pokemon} popUp={popUp} setPopUp={setPopUp} />
      )}
      <div className="container min-h-screen mx-auto pt-[5rem] lg:pt-[0rem] pb-5 flex justify-center items-center flex-wrap content-center gap-5 ">
        <h2 className="text-[4rem] text-center w-full font-bold">
          He is {pokemon.name}!
        </h2>
        <div className="flex flex-col lg:flex-row lg:justify-evenly lg:w-full justify-center items-center">
          <img
            className="inline-block max-w-[475px] max-h-[475px]"
            src={pokemon.image}
            alt={pokemon.id}
          />
          <div className="flex flex-col  divide-y text-[18px] px-[20px] flex-col w-full">
            <div className="pt-5 pb-3">
              <h3 className="font-semibold">Level:</h3>
              <p>- {pokemon.lvl}</p>
            </div>
            <div className="pt-5 pb-3">
              <h3 className="font-semibold">Type:</h3>
              {pokemon.type?.map((type) => (
                <p key={uuid()}>- {type}</p>
              ))}
            </div>
            <div className="pt-5 pb-3">
              <h3 className="font-semibold">Abilities:</h3>
              {pokemon.abilities?.map((ability) => (
                <p key={uuid()}>
                  - {ability.name}: {ability.description}{" "}
                </p>
              ))}
            </div>
            <div className="pt-5 pb-3">
              <h3 className="font-semibold">Evolutions:</h3>
              <div className="flex text-center gap-5 flex-wrap justify-center items-center">
                {pokemon.evolutions?.map((evolution) => (
                  <div key={uuid()}>
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

      <ButtonEditCreatePokemon
        text={"Edit pokemon"}
        popUp={popUp}
        setPopUp={setPopUp}
      />
    </>
  );
}
