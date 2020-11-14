const Form = (props) => {
  const handleForm = (ev) => {
    const id = ev.target.id;
    const value = ev.target.value;
    props.sendForm(id, value);
  };

  const selectAge = (ev) => {
    const age = ev.target.value;
    props.sendAge(age);
  };

  return (
    <form className="form" onChange={handleForm}>
      <label htmlFor="name">Nombre de la película</label>
      <input type="text" name="name" id="name" placeholder="Película" />
      <label htmlFor="description">Descripción</label>
      <textarea
        name="description"
        id="description"
        placeholder="Descripción"
        cols="30"
        rows="10"
      ></textarea>
      <label htmlFor="language">Idioma</label>
      <select name="language" id="language">
        <option value="Español">Español</option>
        <option value="Portugués">Portugués</option>
        <option value="Inglés">Inglés</option>
      </select>
      <label htmlFor="all-age">Todos los públicos</label>
      <input
        type="radio"
        name="age"
        id="all-age"
        onClick={selectAge}
        value="Todos los públicos"
      />
      <label htmlFor="age-18">Mayores de 18</label>
      <input
        type="radio"
        name="age"
        id="age-18"
        onClick={selectAge}
        value="Mayores de 18"
      />
    </form>
  );
};

export default Form;
