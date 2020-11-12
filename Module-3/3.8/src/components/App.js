import React, { Component, useState } from "react";
import "../stylesheet/App.scss";
import Card from "./Card";
import Form from "./Form";

const App = () => {
  const [name, setName] = useState("Película");
  const [description, setDescription] = useState("Descripción");
  const [language, setLanguage] = useState("Español");

  const handleForm = (inputId, inputValue) => {
    if (inputId === "name") {
      setName(inputValue);
    } else if (inputId === "description") {
      setDescription(inputValue);
    } else if (inputId === "language") {
      setLanguage(inputValue);
    }
  };

  return (
    <main>
      <Form sendForm={handleForm} />
      <Card name={name} description={description} language={language} />
    </main>
  );
};

export default App;
