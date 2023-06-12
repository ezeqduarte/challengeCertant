import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const initialState = {
  loggedIn: false,
  userId: null,
};

const useLoginStore = create(
  persist(
    (set, get) => ({
      ...initialState,

      login: (userId) => {
        set({ loggedIn: true, userId });
      },
      logout: () => {
        set(initialState);
      },
    }),
    {
      name: "login-storage",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export const useLoggedIn = () => useLoginStore((store) => store.loggedIn);
export const useUserId = () => useLoginStore((store) => store.userId);

export const useLogIn = () => useLoginStore((store) => store.login);
export const useLogOut = () => useLoginStore((store) => store.logout);
