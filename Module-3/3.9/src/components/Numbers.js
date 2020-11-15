import { useLayoutEffect } from "react";

const Numbers = (props) => {
  const numbers = [1, 4, 6, 8, 45, 89];
  const inputNumber = props.number;
  const inputCheck = props.even;

  const filteredList = numbers.filter((n) => n > inputNumber);

  let evenList;
  if (inputCheck === "even") {
    evenList = filteredList.filter((n) => n % 2 === 0);
  } else {
    evenList = filteredList;
  }

  const numberList = evenList.map((n) => {
    return <li>{n}</li>;
  });

  return (
    <div>
      <h2>Lista:</h2>
      <ul>{numberList}</ul>
    </div>
  );
};

export default Numbers;
