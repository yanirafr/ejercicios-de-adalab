const Form = (props) => {
  const handleForm = (ev) => {
    const id = ev.target.id;
    const value = ev.target.value;
    props.sendForm(id, value);
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
    </form>
  );
};

export default Form;
