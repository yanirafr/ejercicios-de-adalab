import React, { Component } from "react";

class Info extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "",
    };

    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(ev) {
    this.setState({
      text: ev.currentTarget.value,
    });
  }

  render() {
    return (
      <div className="">
        <input type="text" name="info" id="info" onChange={this.handleInput} />
        <p className="info">{this.state.text}</p>
      </div>
    );
  }
}

export default Info;
