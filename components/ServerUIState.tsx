"use client";

import { useServerUIStore } from "@/components/ServerContext";
export const ServerUIState = () => {
  const state = useServerUIStore((state) => state);

  return <div>{JSON.stringify(state, null, 2)}</div>;
};
