const { default: Card } = require("./Card");

const Card2 = (props) => {
  return (
    <>
      <Card
        name={props.name}
        description={props.description}
        language={props.language}
        age={props.age}
      />
    </>
  );
};

export default Card2;
