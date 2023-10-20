import React, { useState } from "react"
import './App.css';
// import ClassComponent from "./components2/Class/ClassComponent";
import FunctionalComponent from "./components2/Functional/FunctionalComponent";
import ClassState from "./components2/Class/ClassState";
import Parent from "./components2/Functional/Parent";

function App() {

  return (
    <div className="App">
    {/* <ClassComponent /> */}
    {/* <FunctionalComponent /> */}
    {/* < ClassState /> */}
    <Parent />
    </div>
  );
}

export default App;
