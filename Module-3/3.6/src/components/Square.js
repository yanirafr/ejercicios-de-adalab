import React, { Component } from "react";
import "../stylesheet/App.scss";

class Square extends Component {
  constructor(props) {
    super(props);

    this.state = {
      color: "blue",
    };

    this.handleColor = this.handleColor.bind(this);
  }

  handleColor(ev) {
    this.setState(() => {
      let currentColor = "";

      if (this.state.color === "blue") {
        currentColor = "red";
      } else {
        currentColor = "blue";
      }

      return { color: currentColor };
    });
  }

  render() {
    return (
      <div
        className={"square " + this.state.color}
        onClick={this.handleColor}
      ></div>
    );
  }
}

export default Square;
