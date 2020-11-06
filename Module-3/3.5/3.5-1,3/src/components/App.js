import React, { Component } from "react";
import "../stylesheet/App.scss";
import PepperHater from "./PepperHater";
import PepperHater2 from "./PepperHater2";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <PepperHater2 />;
  }
}

export default App;
