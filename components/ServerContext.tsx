"use client";

import { createServerUIStore } from "@/store/server-ui";
import { createContext, useContext, useState } from "react";
import { type StoreApi, useStore } from "zustand";

const ServerUIContext = createContext<StoreApi<unknown> | null>(null);

export const ServerUIProvider = (props: any) => {
  const { children, initialState } = props;
  const [store] = useState(() => createServerUIStore(initialState));
  return (
    <ServerUIContext.Provider value={store}>
      {children}
    </ServerUIContext.Provider>
  );
};

export const useServerUIStore = <T,>(selector: (store: any) => T): T => {
  const serverUIStoreContext = useContext(ServerUIContext);

  if (!serverUIStoreContext) {
    throw new Error(`useServerUIStore must be use within CounterStoreProvider`);
  }

  return useStore(serverUIStoreContext, selector);
};

export const useServerUISlice = (slice: string) => {
  return useServerUIStore((state) => state[slice]);
};

export const useServerUIActions = () => {
  return useServerUIStore((state) => state.actions);
};
export const useServerUI = () => useContext(ServerUIContext);
