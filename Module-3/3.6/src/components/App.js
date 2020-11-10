import React, { Component } from "react";
import "../stylesheet/App.scss";
import Info from "./Info";
class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Info />
      </>
    );
  }
}

export default App;
