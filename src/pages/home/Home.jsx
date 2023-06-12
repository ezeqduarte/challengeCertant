import React, { useEffect, useState } from "react";
import { useGetPokemonsUserRequest } from "../../hooks/http/pokemons";
import CardPokemons from "../../components/CardPokemons/cardPokemons";
import {
  useSetPokemonsUser,
  usePokemonsUser,
} from "../../store/usePokemonsStore";
import PopUpPokemon from "../../components/PopUpPokemon/PopUpPokemon";
import ButtonEditCreatePokemon from "../../components/ButtonEditCreatePokemon/ButtonEditCreatePokemon";
import uuid from "react-uuid";

export default function Home() {
  const getPokemonsUserRequest = useGetPokemonsUserRequest();
  const setPokemonsUser = useSetPokemonsUser();
  const [popUp, setPopUp] = useState(false);

  const pokemonsUser = usePokemonsUser();

  useEffect(() => {
    getPokemonsUserRequest().then((res) => {
      setPokemonsUser(res.data.content);
    });
  }, []);

  return (
    <>
      {popUp && <PopUpPokemon popUp={popUp} setPopUp={setPopUp} />}

      <h2 className="text-center font-bold text-[28px] pt-[8rem]">
        Hello Pokémon Trainer!
      </h2>
      <p className="text-center font-thin text-[23px]">
        Here is your list of acquired Pokémon. Feel free to take a look!{" "}
      </p>
      <div className="container mx-auto pt-[5rem] pb-5 gap-3 flex justify-center items-center flex-wrap">
        {pokemonsUser.map((pokemon) => (
          <CardPokemons key={uuid()} pokemon={pokemon} />
        ))}
      </div>
      <ButtonEditCreatePokemon
        text={"New pokemon"}
        popUp={popUp}
        setPopUp={setPopUp}
      />
    </>
  );
}
