import React from "react";
import logo from "./logo.svg";
import "./App.css";
import CoolButton from "./components/CoolButton";

function App() {
  return (
    <div className="App">
      <CoolButton isSmall isDanger className="is-rounded my-class">
        Button 1
      </CoolButton>
      <CoolButton isSmall isSuccess>
        Button 2
      </CoolButton>
    </div>
  );
}

export default App;
