import React, { useState } from "react";
import "../stylesheet/App.scss";
import Numbers from "./Numbers";
import NumbersInput from "./NumbersInput";

const App = (props) => {
  const [number, setNumber] = useState("");
  const [even, setEven] = useState(localStorage.getItem("check") || "");

  const handleInput = (inputValue) => {
    setNumber(inputValue);
  };
  const handleCheck = (check) => {
    setEven(check);
    localStorage.setItem("check", check);
  };

  return (
    <>
      <NumbersInput
        sendValue={handleInput}
        sendCheck={handleCheck}
        value={even}
      />
      <Numbers number={number} even={even} />
    </>
  );
};

export default App;
