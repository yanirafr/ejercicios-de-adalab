/* eslint-disable no-useless-constructor */
import React, { Component } from "react";
import "../stylesheet/App.scss";

class PepperHater extends Component {
  constructor(props) {
    super(props);
    this.class = "";
    this.HateHandler = this.HateHandler.bind(this);
  }

  HateHandler = (ev) => {
    if (ev.target.value.toLowerCase().includes("pimiento")) {
      this.class = "red";
      alert("ODIO EL PIMIENTO!!!");
    } else {
      this.class = "";
    }
    this.forceUpdate();
  };

  render() {
    return (
      <textarea
        className={this.class}
        onChange={this.HateHandler}
        name="hate"
        id="hate"
        cols="30"
        rows="10"
      ></textarea>
    );
  }
}

export default PepperHater;
