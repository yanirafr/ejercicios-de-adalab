import React, { Component } from "react";
import "../stylesheet/App.scss";
import Info from "./Info";
import Square from "./Square";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        {/* <Info /> */}
        <Square />
      </>
    );
  }
}

export default App;
