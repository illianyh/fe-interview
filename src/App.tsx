import React from "react";

import GlobalContext from "./shared/context/GlobalContext";
import BillList from "./components/BillList";

function App() {
  // The children of GlobalContext will receive whatever is managed by it,
  // however, for an app of this size having global state is not necessary
  // or recommended. This was only added in because it was explicity requested
  return (
    <GlobalContext>
      <BillList />
    </GlobalContext>
  );
}

export default App;
