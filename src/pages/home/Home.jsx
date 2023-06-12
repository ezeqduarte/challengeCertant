import React, { useEffect, useState } from "react";
import { usePokemonsRequest } from "../../hooks/http/pokemons";
import { useUserId } from "../../store/useLoginStore";
import CardPokemons from "../../components/CardPokemons/cardPokemons";
import { useGetPokemons, usePokemonsUser } from "../../store/usePokemonsStore";

export default function Home() {
  const pokemonRequest = usePokemonsRequest();
  const setPokemons = useGetPokemons();
  const userId = useUserId();

  const pokemonsUserGlobal = usePokemonsUser();

  useEffect(() => {
    pokemonRequest(userId).then((res) => {
      setPokemons(res.data.content);
    });
  }, []);

  return (
    <div className="container mx-auto pt-[5rem] pb-5 gap-3 flex justify-center items-center flex-wrap">
      {pokemonsUserGlobal.map((pokemon) => (
        <CardPokemons pokemon={pokemon} />
      ))}
    </div>
  );
}
