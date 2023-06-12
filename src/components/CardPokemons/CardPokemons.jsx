import React from "react";
import { NavLink } from "react-router-dom";

export default function CardPokemons({ pokemon }) {
  console.log(pokemon);
  return (
    <NavLink to={`/details-pokemon/${pokemon.id}`}>
      <article
        role="list"
        className="flex border group/item hover:bg-slate-100 rounded flex-col cursor-pointer hover:scale-1 justify-center bg-white w-[300px] py-2 items-center"
      >
        <div>
          <p className="font-bold text-[35px] uppercase">{pokemon.name}</p>
          <div className="flex justify-center divide-x ">
            {pokemon.type.map((type) => (
              <span className="px-3">{type}</span>
            ))}
          </div>
        </div>
        <img
          className="w-[298px] h-[298px]"
          src={pokemon.image}
          alt={pokemon.id}
        />
        <div className="flex flex-col justify-center  items-center">
          <span>Level</span>
          <p className="text-medium bg-gray-200  border rounded-full px-[15px] text-[30px]">
            {pokemon.lvl}
          </p>
        </div>
      </article>
    </NavLink>
  );
}
