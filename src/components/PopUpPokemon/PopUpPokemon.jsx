import React, { Fragment, useState } from "react";
import AddProperty from "../AddProperty/AddProperty";
import {
  usePokemonsUser,
  useSetPokemonsUser,
} from "../../store/usePokemonsStore";
import {
  usePatchPokemonRequest,
  usePostPokemonRequest,
} from "../../hooks/http/pokemons";
import uuid from "react-uuid";

export default function PopUpPokemon({ pokemonEdit, popUp, setPopUp }) {
  const isEdit = !!pokemonEdit;
  const postPokemonRequest = usePostPokemonRequest();
  const patchPokemonRequest = usePatchPokemonRequest();
  const pokemonsUser = usePokemonsUser();
  const setPokemonsUser = useSetPokemonsUser();

  /*/Propiedades de mi pokemon a setear/*/

  const [name, setName] = useState(pokemonEdit?.name ?? "");
  const [lvl, setLvl] = useState(pokemonEdit?.lvl ?? "");
  const [types, setTypes] = useState(pokemonEdit?.type ?? [""]);
  const [abilities, setAbilities] = useState(
    pokemonEdit?.abilities ?? [{ name: "", description: "" }]
  );
  const [evolutions, setEvolutions] = useState(
    pokemonEdit?.evolutions ?? [
      {
        name: "",
        type: "",
        lvl: "",
        image: "",
      },
    ]
  );
  const [image, setImage] = useState(pokemonEdit?.image ?? "");

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

  const submitPokemon = async (event) => {
    event.preventDefault();
    const pokemon = {
      id: pokemonEdit?.id ?? pokemonsUser.length + 1,
      name: name,
      lvl: lvl,
      type: types,
      abilities: abilities,
      evolutions: evolutions,
      image: image,
    };
    const fn = isEdit ? patchPokemonRequest : postPokemonRequest;
    fn(pokemon).then((res) => {
      if (isEdit)
        setPokemonsUser(
          pokemonsUser.map((p) => (p.id === pokemonEdit.id ? pokemon : p))
        );
      else setPokemonsUser([...pokemonsUser, pokemon]);
    });
    setPopUp(!popUp);
  };

  return (
    <div className="flex flex-col border rounded absolute top-10 left-0 bottom-0 overflow-y-scroll right-0 m-auto border-3 py-5 px-3 w-[380px] h-[450px] bg-white  ">
      <h3 className="text-[20px] text-center pb-5">
        {isEdit ? "Edit a pokemon!" : "Create a new pokemon!"}
      </h3>
      <form onSubmit={submitPokemon} className="flex flex-col gap-3">
        <label className="w-full gap-3 flex justify-between items-center">
          Name:
          <input
            onChange={(e) => setName(e.target.value)}
            className="grow border p-1"
            type="text"
            value={name}
            required
          />
        </label>
        <label className="flex flex-col">
          Imagen:
          <input
            onChange={(e) => setImage(e.target.value)}
            className="grow border py-1"
            type="text"
            value={image}
            required
          />
        </label>
        <label className="w-full gap-3 flex justify-between items-center">
          Level:
          <input
            onChange={(e) => setLvl(e.target.value)}
            className="grow border p-1"
            type="number"
            value={lvl}
            required
          />
        </label>
        {/*/types start/*/}

        <p className="text-center justify-center items-center flex gap-3">
          <AddProperty
            text={"-"}
            onClick={() =>
              setTypes((types) => types.slice(0, types.length - 1))
            }
            disabled={types.length === 1}
          ></AddProperty>
          Types
          <AddProperty
            text={"+"}
            onClick={() => setTypes((types) => types.concat([""]))}
          ></AddProperty>
        </p>

        <fieldset className="grow border flex flex-col gap-3 px-1 py-1">
          {types.map((type, index) => (
            <label
              key={uuid()}
              className="w-full flex flex-col justify-between"
            >
              Type {index + 1}:
              <input
                onChange={(e) => handleChangeTypes(e.target.value, index)}
                value={type}
                className="grow border p-1"
                type="text"
                required
              />
            </label>
          ))}
        </fieldset>
        {/*/types finish/*/}

        {/*/Abilities start /*/}
        <p className="text-center justify-center items-center flex gap-3">
          <AddProperty
            text={"-"}
            onClick={() =>
              setAbilities((abilities) =>
                abilities.slice(0, abilities.length - 1)
              )
            }
            disabled={abilities.length === 1}
          ></AddProperty>
          Abilities
          <AddProperty
            text={"+"}
            onClick={() =>
              setAbilities((abilities) =>
                abilities.concat([{ name: "", description: "" }])
              )
            }
          ></AddProperty>
        </p>
        {abilities.map((ability, index) => (
          <Fragment key={uuid()}>
            <fieldset className="grow border flex flex-col gap-3 px-1 py-1">
              <label className="w-full flex flex-col justify-between">
                Name of ability {index + 1}:
                <input
                  onChange={(e) =>
                    handleChangeAbilities(e.target.value, "name", index)
                  }
                  value={ability.name}
                  className="grow border p-1"
                  type="text"
                  required
                />
              </label>
              <textarea
                onChange={(e) =>
                  handleChangeAbilities(e.target.value, "description", index)
                }
                placeholder="Insert the description of the ability"
                value={ability.description}
                required
                className="grow border block resize-none"
                rows="3"
              >
                Description
              </textarea>
            </fieldset>
          </Fragment>
        ))}
        {/*/Abilities finish /*/}

        {/*/Evolutions start /*/}
        <p className="text-center justify-center items-center flex gap-3">
          <AddProperty
            text={"-"}
            onClick={() =>
              setEvolutions((evolutions) =>
                evolutions.slice(0, evolutions.length - 1)
              )
            }
            disabled={evolutions.length === 1}
          ></AddProperty>
          Evolutions
          <AddProperty
            text={"+"}
            onClick={() =>
              setEvolutions((evolutions) => evolutions.concat([""]))
            }
          ></AddProperty>
        </p>

        {evolutions.map((evolution, index) => (
          <Fragment key={uuid()}>
            <fieldset className="grow border flex flex-col gap-3 px-1 py-1">
              <label className="w-full flex flex-col ">
                Name of evolution {index + 1}:
                <input
                  onChange={(e) =>
                    handleChangeEvolutions(e.target.value, "name", index)
                  }
                  value={evolution.name}
                  className="grow border p-1"
                  type="text"
                  required
                />
              </label>
              <label className="w-full flex flex-col ">
                Level of evolution {index + 1}:
                <input
                  onChange={(e) =>
                    handleChangeEvolutions(e.target.value, "lvl", index)
                  }
                  value={evolution.lvl}
                  className="grow border p-1"
                  type="number"
                  required
                />
              </label>
              <label className="w-full flex flex-col ">
                Type of evolution {index + 1}:
                <input
                  onChange={(e) =>
                    handleChangeEvolutions(e.target.value, "type", index)
                  }
                  value={evolution.type}
                  className="grow border p-1"
                  type="text"
                  required
                />
              </label>
              <label className="w-full flex flex-col ">
                Image of evolution {index + 1}:
                <input
                  onChange={(e) =>
                    handleChangeEvolutions(e.target.value, "image", index)
                  }
                  value={evolution.image}
                  className="grow border"
                  type="text"
                  required
                />
              </label>
            </fieldset>
          </Fragment>
        ))}

        {/*/ Evolutions finish  /*/}

        <button
          className="bg-zinc-600 mt-5 hover:bg-zinc-700 mt-[10px] text-white font-bold"
          type="send"
        >
          {isEdit ? "Edit" : "Create"}
        </button>
      </form>
    </div>
  );
}
