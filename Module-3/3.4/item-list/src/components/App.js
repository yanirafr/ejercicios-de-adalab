import React, { Component } from "react";
import "../stylesheet/App.scss";
import List from "./ItemList";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <List />;
  }
}

export default App;
