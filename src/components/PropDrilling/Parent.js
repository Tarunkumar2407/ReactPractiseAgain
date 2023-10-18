import React, { createContext } from "react";
import ChildA from "./ChildA";

const data = createContext();
const data2 = createContext();

const Parent = () => {
  const name = "Tarun";
  const mail = "Tarun@2407"
  return (
    <div>
      <data.Provider value={name}>
         <data2.Provider value= {mail}>
         <ChildA />
         </data2.Provider>
      </data.Provider>
    </div>
  );
};

export default Parent;
export { data, data2};
