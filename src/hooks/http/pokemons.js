import { useUserId } from "../../store/useLoginStore.js";
import { apiClient } from "./index.js";

export const useGetPokemonsUserRequest = () => {
  const userId = useUserId();
  return () => apiClient.get(`pokemon?userId=${userId}`);
};

export const usePostPokemonRequest = () => {
  const userId = useUserId();
  return (newPokemon) =>
    apiClient.post(`pokemon`, { pokemon: newPokemon, userId });
};

export const usePatchPokemonRequest = () => {
  const userId = useUserId();
  return (editedPokemon) =>
    apiClient.patch(`pokemon`, { pokemon: editedPokemon, userId });
};
