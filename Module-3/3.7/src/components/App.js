import React, { useState } from "react";

const App = () => {
  const [year, getYear] = useState(32);
  const [gift, getGift] = useState(1);

  const getOlder = () => {
    getYear(year + 1);
  };
  const getPresents = () => {
    getGift(gift + 1);
  };

  return (
    <div>
      <p className="years">Tengo {year} años</p>
      <p className="gifts">Tengo {gift} regalos</p>
      <button onClick={getOlder}>Hazme más vieja</button>
      <button onClick={getPresents}>Dame más regalos</button>
    </div>
  );
};

export default App;
