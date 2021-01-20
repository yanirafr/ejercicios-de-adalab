const NumbersInput = (props) => {
  const getInput = (ev) => {
    const value = ev.target.value;
    props.sendValue(value);
  };

  const getChecked = (ev) => {
    const value = ev.target.value;
    console.log(ev.target.checked);
    if (ev.target.checked === true) {
      props.sendCheck(value);
    } else {
      props.sendCheck("");
    }
  };

  return (
    <div>
      <label htmlFor="number">Número: </label>
      <input onChange={getInput} type="number" name="number" id="number" />
      <label htmlFor="even"> Pares</label>
      <input
        type="checkbox"
        onChange={getChecked}
        name="even"
        id="even"
        value="even"
        checked={props.value === "even" ? true : false}
      />
    </div>
  );
};

export default NumbersInput;
