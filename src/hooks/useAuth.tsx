import { create } from "zustand";
import { router } from "expo-router";
import { createJSONStorage, persist } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Toast from "react-native-toast-message";
import { useInitialSettings } from "./useInitialSettings";
import { handleError } from "../utils/handleError";
import authService from "../services/authService";

export interface UserType {
  cD_DISPOSITIVO_VSVENDAS: number;
  cd_empresa_mobile: number;
  cd_usuario: number;
  cd_usuario_sistema: number;
  dS_LOGIN_VSVENDAS: string;
  ds_usuario: string;
  token: string;
}

interface AuthState {
  user: UserType | null;
  resetUser: () => void;
  updateUser: (user: UserType) => void;
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
}

export const useAuth = create<AuthState>()(

  persist(
    (set) => ({
      user: null,
      resetUser() {
        set({ user: null });
      },
      updateUser: (user: UserType) => {
        set((state) => ({ user: { ...state.user, ...user } }));
      },

      login: async (username, password) => {
        const { data } = useInitialSettings.getState();

        if (!data) {
          Toast.show({ type: "error", text1: "Configuracoes de conexão não encontradas!" });
          return;
        }

        try {
          const user = await authService.login(username, password, data.dynamicRoutePrefix);
          set({ user });
          router.push("/(public)/home-filters");
        } catch (error: unknown) {
          handleError(error, {
            showToast: true,
            login: true
          });
        }
      },
      logout: async () => {
        set({ user: null });
        router.push("/(public)");
      },
    }),
    {
      name: "@vision-vendas-auth",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
