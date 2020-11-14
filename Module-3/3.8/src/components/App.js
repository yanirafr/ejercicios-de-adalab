import React, { Component, useState } from "react";
import "../stylesheet/App.scss";
import Card2 from "./Card2";
import Form2 from "./Form2";

const App = () => {
  const [name, setName] = useState("Película");
  const [description, setDescription] = useState("Descripción");
  const [language, setLanguage] = useState("Español");
  const [age, setAge] = useState("Todos los públicos");

  const handleForm = (inputId, inputValue) => {
    if (inputId === "name") {
      setName(inputValue);
    } else if (inputId === "description") {
      setDescription(inputValue);
    } else if (inputId === "language") {
      setLanguage(inputValue);
    }
  };

  const selectAge = (inputValue) => {
    setAge(inputValue);
  };

  return (
    <main>
      <Form2 sendForm={handleForm} sendAge={selectAge} />
      <Card2
        name={name}
        description={description}
        language={language}
        age={age}
      />
    </main>
  );
};

export default App;
