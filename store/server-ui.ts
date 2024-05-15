import { createStore } from "zustand";

export const createServerUIStore = (initialState: any) =>
  createStore()((set) => ({
    ...initialState,
    actions: {
      setState: (stateId: any, newState: any) =>
        set((state: any) => ({ ...state, [stateId]: newState })),
    },
  }));
