import React from "react";
import { NavBar } from "./components/NavBar";
import { GlobalSituation } from "./components/GlobalSituation";

function App() {
  return (
    <div style={{ background: "#fafafa" }}>
      <NavBar />
      <GlobalSituation />
    </div>
  );
}

export default App;
