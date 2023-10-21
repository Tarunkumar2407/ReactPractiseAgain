import React, { useState } from "react"
import './App.css';
// import ClassComponent from "./components2/Class/ClassComponent";
import FunctionalComponent from "./components2/Functional/FunctionalComponent";
import ClassState from "./components2/Class/ClassState";
import Parent from "./components2/Functional/Parent";
import GetInputBoxValue from "./components2/Functional/GetInputBoxValue";
import UseStatewithObject from "./components2/Hooks/UseStateHook/UseStatewithObject";
import UseStateWithArray from "./components2/Hooks/UseStateHook/UseStateWithArray";
import UseStateWithArray2 from "./components2/Hooks/UseStateHook/UseStateWithArray2";
import UseEffect from "./components2/Hooks/UseEffectHook/UseEffect";
import ParentLiftingState from "./components2/LiftingStateUP/ParentLiftingState";
import ParentProps from "./components2/PropsDrilling/ParentProps";

function App() {

  return (
    <div className="App">
    {/* <ClassComponent /> */}
    {/* <FunctionalComponent /> */}
    {/* < ClassState /> */}
    {/* <Parent /> */}
    {/* <GetInputBoxValue /> */}
    {/* <UseStatewithObject /> */}
    {/* <UseStateWithArray /> */}
    {/* <UseStateWithArray2 /> */}
    {/* <UseEffect /> */}
    {/* <ParentLiftingState /> */}
    <ParentProps />
    </div>
  );
}

export default App;
