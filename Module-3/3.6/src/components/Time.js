import React, { Component } from "react";

class Time extends Component {
  constructor(props) {
    super(props);

    const time = new Date();

    this.state = {
      hours: time.getHours(),
      minutes: time.getMinutes(),
      seconds: time.getSeconds(),
    };

    this.handleClock = this.handleClock.bind(this);

    setInterval(this.handleClock, 1000);
  }

  handleClock() {
    const time = new Date();

    this.setState({
      hours: time.getHours(),
      minutes: time.getMinutes(),
      seconds: time.getSeconds(),
    });
  }

  render() {
    return (
      <div className="clock">
        <span className="hours">{this.state.hours + ":"}</span>
        <span className="min">{this.state.minutes + ":"}</span>
        <span className="sec">{this.state.seconds}</span>
      </div>
    );
  }
}

export default Time;
