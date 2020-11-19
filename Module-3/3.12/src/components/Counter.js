import React from "react";

class Counter extends React.Component {
  constructor(props) {
    console.log("constructor");
    super(props);
    this.state = {
      counter: 0,
    };
    this.incrementCounter = this.incrementCounter.bind(this);
  }
  componentDidMount() {
    console.log("Mount");
    this.intervalId = setInterval(this.incrementCounter, 1000);
  }
  componentWillUnmount() {
    console.log("Unmount");
    clearInterval(this.intervalId);
  }
  incrementCounter() {
    console.log("counter");
    this.setState((prevState) => {
      return { counter: prevState.counter + 1 };
    });
  }
  render() {
    console.log("render");
    return <div>Contador: {this.state.counter}</div>;
  }
}

export default Counter;
