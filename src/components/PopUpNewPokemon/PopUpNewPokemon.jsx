import React, { useState } from "react";
import AddProperty from "../AddProperty/AddProperty";
import { usePokemonsUser } from "../../store/usePokemonsStore";
import { useNewPokemonRequest } from "../../hooks/http/pokemons";
import { useUserId } from "../../store/useLoginStore";

export default function PopUpNewPokemon({
  refresh,
  setRefresh,
  popUp,
  setPopUp,
}) {
  const newPokemonRequest = useNewPokemonRequest();
  const pokemonsUserGlobal = usePokemonsUser();
  const userId = useUserId();

  /*/Propiedades de mi pokemon a setear/*/

  const [name, setName] = useState("");
  const [lvl, setLvl] = useState(null);
  const [types, setTypes] = useState([""]);
  const [abilities, setAbilities] = useState([{ name: "", description: "" }]);
  const [evolutions, setEvolutions] = useState([
    {
      name: "",
      type: "",
      lvl: null,
      image: "",
    },
  ]);
  const [image, setImage] = useState("");

  /*/evento manejador de la edicion de las habilidades/*/

  const handleChangeAbilities = (value, field, index) => {
    setAbilities((abilities) =>
      abilities.map((ability, i) =>
        i === index ? { ...ability, [field]: value } : ability
      )
    );
  };

  /*/evento manejador de la edicion de los tipos/*/

  const handleChangeTypes = (value, index) => {
    setTypes((types) => types.map((type, i) => (i === index ? value : type)));
  };

  /*/evento manejador de la edicion de las evoluciones/*/

  const handleChangeEvolutions = (value, field, index) => {
    setEvolutions((evolutions) =>
      evolutions.map((evolution, i) =>
        i === index ? { ...evolution, [field]: value } : evolution
      )
    );
  };

  /*/funcion para cargar el pokemon /*/

  const submiteNewPokemon = async (event) => {
    event.preventDefault();
    const newPokemon = {
      id: pokemonsUserGlobal.length + 1,
      name: name,
      lvl: lvl,
      type: types,
      abilities: abilities,
      evolutions: evolutions,
      image: image,
    };
    newPokemonRequest(newPokemon, userId);
    setRefresh(!refresh);
    setPopUp(!popUp);
  };

  return (
    <div className="flex flex-col border rounded absolute top-10 left-0 bottom-0 overflow-y-scroll right-0 m-auto border-3 py-5 px-3 w-[380px] h-[450px] bg-white  ">
      <h3 className="text-[20px] text-center pb-5">¡Create a new pokemon!</h3>
      <form onSubmit={submiteNewPokemon} className="flex flex-col gap-3">
        <label className="w-full gap-3 flex justify-between items-center">
          Name:
          <input
            onChange={(e) => setName(e.target.value)}
            className="grow border p-1"
            type="text"
          />
        </label>
        <label className="flex flex-col">
          Imagen:
          <input
            onChange={(e) => setImage(e.target.value)}
            className="grow  py-1"
            type="text"
          />
        </label>
        <label className="w-full gap-3 flex justify-between">
          Level:
          <input
            onChange={(e) => setLvl(e.target.value)}
            className="grow border p-1"
            type="number"
          />
        </label>
        {/*/types start/*/}

        <p className="text-center justify-center items-center flex gap-3">
          Types
          <AddProperty
            text={"-"}
            set={() => setTypes((types) => types.slice(0, types.length - 1))}
          ></AddProperty>
          <AddProperty
            text={"+"}
            set={() => setTypes((types) => types.concat([""]))}
          ></AddProperty>
        </p>

        <fieldset className="grow border flex flex-col gap-3 px-1 py-1">
          {types.map((type, index) => (
            <label key={index} className="w-full flex flex-col justify-between">
              Type {index + 1}:
              <input
                onChange={(e) => handleChangeTypes(e.target.value, index)}
                value={type}
                className="grow border p-1"
                type="text"
              />
            </label>
          ))}
        </fieldset>
        {/*/types finish/*/}

        {/*/Abilities start /*/}
        <p className="text-center justify-center items-center flex gap-3">
          Abilities
          <AddProperty
            text={"-"}
            set={() =>
              setAbilities((abilities) =>
                abilities.slice(0, abilities.length - 1)
              )
            }
          ></AddProperty>
          <AddProperty
            text={"+"}
            set={() =>
              setAbilities((abilities) =>
                abilities.concat([{ name: "", description: "" }])
              )
            }
          ></AddProperty>
        </p>
        {abilities.map((ability, index) => (
          <>
            <fieldset className="grow border flex flex-col gap-3 px-1 py-1">
              <label
                key={index}
                className="w-full flex flex-col justify-between"
              >
                Name of ability {index + 1}:
                <input
                  onChange={(e) =>
                    handleChangeAbilities(e.target.value, "name", index)
                  }
                  value={ability.name}
                  className="grow border p-1"
                  type="text"
                />
              </label>
              <textarea
                onChange={(e) =>
                  handleChangeAbilities(e.target.value, "description", index)
                }
                placeholder="Insert the description of the ability"
                value={ability.description}
                className="grow border"
              >
                Description
              </textarea>
            </fieldset>
          </>
        ))}
        {/*/Abilities finish /*/}

        {/*/Evolutions start /*/}
        <p className="text-center justify-center items-center flex gap-3">
          Evolutions
          <AddProperty
            text={"-"}
            set={() =>
              setEvolutions((evolutions) =>
                evolutions.slice(0, evolutions.length - 1)
              )
            }
          ></AddProperty>
          <AddProperty
            text={"+"}
            set={() => setEvolutions((evolutions) => evolutions.concat([""]))}
          ></AddProperty>
        </p>

        {evolutions.map((evolution, index) => (
          <>
            <fieldset className="grow border flex flex-col gap-3 px-1 py-1">
              <label
                key={index}
                className="w-full flex flex-col justify-between"
              >
                Name of evolution {index + 1}:
                <input
                  onChange={(e) =>
                    handleChangeEvolutions(e.target.value, "name", index)
                  }
                  value={evolution.name}
                  className="grow border p-1"
                  type="text"
                />
              </label>
              <label
                key={index}
                className="w-full flex flex-col justify-between"
              >
                Level of evolution {index + 1}:
                <input
                  onChange={(e) =>
                    handleChangeEvolutions(e.target.value, "lvl", index)
                  }
                  value={evolution.lvl}
                  className="grow border p-1"
                  type="number"
                />
              </label>
              <label
                key={index}
                className="w-full flex flex-col justify-between"
              >
                Type of evolution {index + 1}:
                <input
                  onChange={(e) =>
                    handleChangeEvolutions(e.target.value, "type", index)
                  }
                  value={evolution.type}
                  className="grow border p-1"
                  type="text"
                />
              </label>
              <label
                key={index}
                className="w-full flex flex-col justify-between"
              >
                Image of evolution {index + 1}:
                <input
                  onChange={(e) =>
                    handleChangeEvolutions(e.target.value, "image", index)
                  }
                  value={evolution.image}
                  className="grow "
                  type="text"
                />
              </label>
            </fieldset>
          </>
        ))}

        {/*/ Evolutions finish  /*/}

        <button
          className="bg-zinc-600 mt-5 hover:bg-zinc-700 mt-[10px] text-white font-bold"
          type="send"
        >
          Create
        </button>
      </form>
    </div>
  );
}
