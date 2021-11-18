import React from "react";
import NavMenu from "./Navigator/NavMenu";
import RouterSwitch from "./Navigator/RouterSwitch";

function App() {
  return (
    <div className="wrapper">
        <NavMenu />
        <RouterSwitch />    
    </div>
  );
}

export default App;
