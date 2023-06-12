import React, { useEffect, useState } from "react";
import {
  useNewPokemonRequest,
  usePokemonsRequest,
} from "../../hooks/http/pokemons";
import { useUserId } from "../../store/useLoginStore";
import CardPokemons from "../../components/CardPokemons/cardPokemons";
import {
  useGetPokemons,
  useNewPokemon,
  usePokemonsUser,
} from "../../store/usePokemonsStore";
import PopUpNewPokemon from "../../components/PopUpNewPokemon/PopUpNewPokemon";

export default function Home() {
  const pokemonRequest = usePokemonsRequest();
  const setPokemons = useGetPokemons();
  const userId = useUserId();
  const [refresh, setRefresh] = useState(false);
  const [popUp, setPopUp] = useState(false);

  const pokemonsUserGlobal = usePokemonsUser();

  useEffect(() => {
    pokemonRequest(userId).then((res) => {
      setPokemons(res.data.content);
    });
  }, [refresh]);

  const prueba = {
    id: 8,
    name: "zequiel",
    lvl: 6,
    evolutions: [
      {
        name: "Arbok",
        type: ["Poison"],
        lvl: 22,
        image:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/24.png",
      },
    ],
    abilities: [
      { name: "Intimidate", description: "Lowers the opponent's Attack stat." },
    ],
    type: ["Poison"],
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/23.png",
  };

  const newPokemonRequest = useNewPokemonRequest();
  const newPokemonDispatch = useNewPokemon();

  const newPokemonAction = () => {
    newPokemonRequest({ pokemon: prueba, userId }).then((res) => {
      (res) => {
        const newPokemons = res.data.content;
        if (newPokemons) newPokemonDispatch(newPokemons);
      };
    });
    setRefresh(!refresh);
  };

  return (
    <>
      {popUp && (
        <PopUpNewPokemon
          refresh={refresh}
          setRefresh={setRefresh}
          popUp={popUp}
          setPopUp={setPopUp}
        />
      )}

      <h2 className="text-center font-bold text-[28px] pt-[8rem]">
        ¡Hello Pokémon Trainer!
      </h2>
      <p className="text-center font-thin text-[23px]">
        Here is your list of acquired Pokémon. Feel free to take a look!{" "}
      </p>
      <div className="container mx-auto pt-[5rem] pb-5 gap-3 flex justify-center items-center flex-wrap">
        {pokemonsUserGlobal.map((pokemon) => (
          <CardPokemons pokemon={pokemon} />
        ))}
      </div>
      {popUp ? (
        <button
          /* onClick={newPokemonAction} */
          onClick={() => setPopUp(!popUp)}
          className="sticky hover:bg-red-300 left-[107rem] bottom-5 p-5 bg-red-200 border rounded-full font-bold text-[1rem]"
        >
          Cerrar ventana X
        </button>
      ) : (
        <button
          /* onClick={newPokemonAction} */
          onClick={() => setPopUp(!popUp)}
          className="sticky hover:bg-green-300 left-[107rem] bottom-5 p-5 bg-green-200 border rounded-full font-bold text-[1rem]"
        >
          Nuevo Pokemon +
        </button>
      )}
    </>
  );
}
