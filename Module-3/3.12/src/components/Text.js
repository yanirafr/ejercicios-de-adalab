import React, { Component } from "react";

class Text extends Component {
  constructor(props) {
    super(props);

    this.state = "";

    this.handleInput = this.handleInput.bind(this);
  }

  componentDidMount() {}

  handleInput(ev) {
    const value = ev.target.value;
    localStorage.setItem("inputValue", value);
  }

  render() {
    return (
      <div>
        <input type="text" name="text" id="text" onChange={this.handleInput} />
      </div>
    );
  }
}

export default Text;
