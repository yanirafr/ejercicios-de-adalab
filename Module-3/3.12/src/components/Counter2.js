import React, { useState, useEffect } from "react";

const Counter2 = () => {
  console.log("me estoy renderizando");
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log("me estoy montando");
    let intervalId = setInterval(() => {
      setCounter(counter + 1);
    }, 1000);

    return () => {
      console.log("me estoy desmontando");
      clearInterval(intervalId);
    };
  });

  return <div>Contador: {counter}</div>;
};

export default Counter2;
