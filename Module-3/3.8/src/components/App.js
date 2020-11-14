import React, { useState } from "react";
import "../stylesheet/App.scss";
import Card2 from "./Card2";
import Form2 from "./Form2";

const App = () => {
  const [name, setName] = useState("Película");
  const [description, setDescription] = useState("Descripción");
  const [language, setLanguage] = useState("Español");
  const [age, setAge] = useState("Todos los públicos");
  const [poster, setPoster] = useState(
    "https://via.placeholder.com/150x150/808080/fffffff/?text=Poster"
  );

  const handleForm = (inputId, inputValue) => {
    if (inputId === "name") {
      setName(inputValue);
    } else if (inputId === "description") {
      setDescription(inputValue);
    } else if (inputId === "language") {
      setLanguage(inputValue);
    }
  };

  const handleAge = (inputValue) => {
    setAge(inputValue);
  };

  const handlePoster = (poster) => {
    const reader = new FileReader();
    // console.log(poster);

    reader.onload = () => {
      const posterUrl = reader.result;
      // console.log(posterUrl);
      setPoster(posterUrl);
    };

    reader.readAsDataURL(poster);
  };

  return (
    <main>
      <Form2
        sendForm={handleForm}
        sendAge={handleAge}
        sendPoster={handlePoster}
      />
      <Card2
        name={name}
        description={description}
        language={language}
        age={age}
        poster={poster}
      />
    </main>
  );
};

export default App;
