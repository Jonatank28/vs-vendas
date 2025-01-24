import { useStorage } from "./useStorage";

interface InitialSettings {
  server: string;
  route: string;
  dynamicRoutePrefix: string;
}

export const useStore = () =>
  useStorage<InitialSettings>("@vision-initial-settings");

export const useInitialSettings = useStore();
