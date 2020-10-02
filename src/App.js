import React from "react";

import "./App.css";
import Home from "./buttonToModal/Home/Home";

function App() {
  const buttonToModal = <Home />;
  return <div className="App">{buttonToModal}</div>;
}

export default App;
