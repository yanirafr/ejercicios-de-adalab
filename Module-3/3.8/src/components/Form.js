import React from "react";

const Form = (props) => {
  // Text & select Input
  const handleForm = (ev) => {
    const id = ev.target.id;
    const value = ev.target.value;
    props.sendForm(id, value);
  };

  // Radio Input
  const selectAge = (ev) => {
    const age = ev.target.value;
    props.sendAge(age);
  };

  // Image Input
  const posterInput = React.createRef();
  const selectPoster = () => {
    const poster = posterInput.current.files[0];
    console.log(poster);
    props.sendPoster(poster);
  };

  return (
    <form className="form" onChange={handleForm}>
      {/* Text & select Input */}
      <label htmlFor="name">Nombre de la película</label>
      <input
        type="text"
        name="name"
        id="name"
        placeholder="Película"
        value={localStorage.getItem("name") || ""}
      />
      <label htmlFor="description">Descripción</label>
      <textarea
        name="description"
        id="description"
        placeholder="Descripción"
        cols="30"
        rows="10"
        value={localStorage.getItem("description") || ""}
      ></textarea>
      <label htmlFor="language">Idioma</label>
      <select name="language" id="language">
        <option
          value="Español"
          selected={props.language === "Español" ? true : false}
        >
          Español
        </option>
        <option
          value="Portugués"
          selected={props.language === "Portugués" ? true : false}
        >
          Portugués
        </option>
        <option
          value="Inglés"
          selected={props.language === "Inglés" ? true : false}
        >
          Inglés
        </option>
      </select>

      {/* Radio Input */}
      <label htmlFor="all-age">Todos los públicos</label>
      <input
        type="radio"
        name="age"
        id="all-age"
        onClick={selectAge}
        value="Todos los públicos"
        checked={props.age === "Todos los públicos" ? true : false}
      />
      <label htmlFor="age-15">Mayores de 15</label>
      <input
        type="radio"
        name="age"
        id="age-15"
        onClick={selectAge}
        value="Mayores de 15"
        checked={props.age === "Mayores de 15" ? true : false}
      />
      <label htmlFor="age-18">Mayores de 18</label>
      <input
        type="radio"
        name="age"
        id="age-18"
        onClick={selectAge}
        value="Mayores de 18"
        checked={props.age === "Mayores de 18" ? true : false}
      />

      {/* Image Input */}
      <label htmlFor="poster">
        Carátula
        <input
          type="file"
          name="poster"
          id="poster"
          accept="image/*"
          ref={posterInput}
          onChange={selectPoster}
        />
      </label>
    </form>
  );
};

export default Form;
