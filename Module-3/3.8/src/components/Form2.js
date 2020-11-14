const { default: Form } = require("./Form");

const Form2 = (props) => {
  return (
    <>
      <Form
        sendForm={props.sendForm}
        sendAge={props.sendAge}
        sendPoster={props.sendPoster}
        age={props.age}
        language={props.language}
      />
    </>
  );
};

export default Form2;
