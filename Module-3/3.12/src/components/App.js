import React, { Component } from "react";
import "../stylesheet/App.scss";
import Counter2 from "./Counter2";
import Relax from "./Relax";
import Text from "./Text";
import { Link, Route, Switch } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Text />
        {/* <Link to="/Counter">Counter</Link>
        <Link to="/Relax">Relax</Link>

        <Switch>
          <Route exact path="/Counter" component={Counter2} />
          <Route exact path="/Relax" component={Relax} />
        </Switch> */}
      </>
    );
  }
}

export default App;
