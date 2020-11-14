const { default: Form } = require("./Form");

const Form2 = (props) => {
  return (
    <>
      <Form sendForm={props.sendForm} sendAge={props.sendAge} />
    </>
  );
};

export default Form2;
