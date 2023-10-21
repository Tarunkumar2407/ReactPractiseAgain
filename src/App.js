import React, { useState } from "react"
import './App.css';
import CakeContainer from "./Redux/Cake/CakeContainer";
import { Provider } from "react-redux";
import store from "./Redux/store";

function App() {

  return (
    <div className="App">
    <Provider store = {store}>
         <CakeContainer />
    </Provider>
    </div>

  );
}

export default App;
