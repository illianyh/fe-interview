import { createContext } from "react";

// creating tab context to be passed to and handled by ./GlobalContext
export const TabContext = createContext({
  tab: 0,
  updateTab: (tab: number) => {},
});
