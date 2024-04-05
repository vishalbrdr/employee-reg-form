import { create } from "zustand";
import { LoginApiOutput } from "../utils/types/LoginApiOutput";
import { persist } from "zustand/middleware";

type AuthStore = {
  user: LoginApiOutput["user"] | null;
  Tokens: LoginApiOutput["AuthenticationResult"] | null;
  setUser: (data: LoginApiOutput) => void;
  logout: () => void;
};

export const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      user: null,
      Tokens: null,
      setUser: (data) => set({ ...data }),
      logout: () => set({ user: null, Tokens: null }),
    }),
    { name: "auth-store" }
  )
);
