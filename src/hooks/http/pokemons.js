import { apiClient } from "./index.js";

export const usePokemonsRequest = () => {
  return (userId) => apiClient.get(`pokemon?userId=${userId}`);
};
