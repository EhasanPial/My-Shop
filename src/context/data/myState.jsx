import React, { useState } from "react";
import MyContext from "./myContext";

function MyState(props) {
  const [mode, setMode] = useState("light");
  const toggle = () => {
    if (mode === "light") {
      setMode("dark");
    } else {
      setMode("light");
    }
  };

  return <MyContext.Provider value={{ mode, toggle }}>{props.children}</MyContext.Provider>;
}

export default MyState;
