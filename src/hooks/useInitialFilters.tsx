import { useStorage } from "./useStorage";

interface InitialFilter {
  enterprise: string;
  region: string;
  state: string;
  city: string;
}

export const useStore = () =>
  useStorage<InitialFilter>("@vision-initial-filters");

export const useInitialFilter = useStore();
