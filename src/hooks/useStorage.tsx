import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface StorageState<T> {
  data: T | null;
  setData: (data: T) => void;
}

export function useStorage<T>(storageName: string) {
  return create<StorageState<T>>()(
    persist(
      (set) => ({
        data: null,
        setData: (data: T) => set({ data }),
      }),
      {
        name: storageName,
        storage: createJSONStorage(() => AsyncStorage),
      },
    ),
  );
}
