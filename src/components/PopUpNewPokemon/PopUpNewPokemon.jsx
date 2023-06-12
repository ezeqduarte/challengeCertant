import React from "react";

export default function PopUpNewPokemon() {
  return (
    <div className="absolute top-0 left-0 bottom-0 right-0 m-auto w-full h-screen bg-black/50 flex justify-center items-center">
      <div className="flex flex-col border rounded  w-[300px] h-[300px] bg-white items-center ">
        <h3 className="text-[20px]">¡Create a new pokemon!</h3>
        <form>
          <label>
            Name:
            <input type="text" />
          </label>
          <label>
            Nivel:
            <input type="text" />
          </label>
          <fieldset>
            Habilidades:
            <label>
              Nombre
              <input type="text" />
            </label>
            <label>
              Descripcion
              <input type="text" />
            </label>
          </fieldset>
          <label>
            Imagen:
            <input type="text" />
          </label>
        </form>
      </div>
    </div>
  );
}

/* {
    id: 7,
    name: "Ekans",
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
  }, */
