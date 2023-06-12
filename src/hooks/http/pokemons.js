import { apiClient } from "./index.js";

export const usePokemonsRequest = () => {
  return (userId) => apiClient.get(`pokemon?userId=${userId}`);
};

export const useNewPokemonRequest = () => {
  return (newPokemon, userId) =>
    apiClient.post(`pokemon`, { pokemon: newPokemon, userId });
};
