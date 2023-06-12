import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const initialState = {
  pokemonsUser: [],
};

const useLoginStore = create(
  persist(
    (set, get) => ({
      ...initialState,

      setPokemonsUser: (pokemonsUser) => {
        set({ pokemonsUser });
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

export const useSetPokemonsUser = () =>
  useLoginStore((store) => store.setPokemonsUser);
