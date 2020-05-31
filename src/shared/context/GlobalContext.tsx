import React, { useState } from "react";

import { TabContext } from "./Context";

// To be used within App.tsx, wrapping all appication elements that should receive state managed by it
// global state is managed here, however as noted in App.tsx, for an app of this size
// it is not requried or recommended to have global state.
const GlobalContext: React.FC<{ children: any }> = (props) => {
  const [tab, setTab] = useState<number>(0);

  const updateTab = (newValue: number) => setTab(newValue);

  return (
    <TabContext.Provider value={{ tab, updateTab }}>
      {props.children}
    </TabContext.Provider>
  );
};

export default GlobalContext;
