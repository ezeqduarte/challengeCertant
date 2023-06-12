import { apiClient } from "./index.js";

export const useLoginRequest = () => {
  return (username, password) =>
    apiClient.post("/login", { password, username });
};
