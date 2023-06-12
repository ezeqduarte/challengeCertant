import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const initialState = {
  pokemonsUser: [],
};

const useLoginStore = create(
  persist(
    (set, get) => ({
      ...initialState,

      getPokemons: (pokemonsUser) => {
        set({ pokemonsUser });
      },

      newPokemons: (newPokemons) => {
        set({ pokemonsUser: newPokemons });
      },
    }),
    {
      name: "pokemon-storage",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export const usePokemonsUser = () =>
  useLoginStore((store) => store.pokemonsUser);

export const useGetPokemons = () => useLoginStore((store) => store.getPokemons);
export const useNewPokemon = () => useLoginStore((store) => store.newPokemons);
