import React from "react";
import { GlobalProvider } from "./context/GlobalContext";
import { NavBar } from "./components/NavBar";
import { GlobalSituation } from "./components/GlobalSituation";

function App() {
  return (
    <GlobalProvider>
      <div style={{ background: "#fafafa" }}>
        <NavBar />
        <GlobalSituation />
      </div>
    </GlobalProvider>
  );
}

export default App;
