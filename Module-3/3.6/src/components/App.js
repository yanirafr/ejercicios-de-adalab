import React, { Component } from "react";
import "../stylesheet/App.scss";
import Info from "./Info";
import Square from "./Square";
import Time from "./Time";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        {/* <Info /> */}
        {/* <Square /> */}
        <Time />
      </>
    );
  }
}

export default App;
