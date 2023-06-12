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
    }),
    {
      name: "login-storage",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export const usePokemonsUser = () => useLoginStore((store) => store.pokemonsUser);

export const useGetPokemons = () => useLoginStore((store) => store.getPokemons);
