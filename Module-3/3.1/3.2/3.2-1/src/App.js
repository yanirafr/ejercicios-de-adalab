import React, { Component } from "react";
import catrina from "./catrina.png";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={catrina} className="App-img" alt="logo" title="Photo" />
          <div className="header__box">
            <h1 className="App-name">Yanira Fernández</h1>
            <h2 className="App-date">Lunes 02 de noviembre de 2020</h2>
          </div>
        </header>
        <main className="App-main">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod eos,
            laudantium, repudiandae aspernatur esse natus saepe at beatae ipsa
            doloremque, officia ea qui porro vel possimus quo explicabo veniam
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod eos,
            laudantium, repudiandae aspernatur esse natus saepe at beatae ipsa
            doloremque, officia ea qui porro vel possimus quo explicabo veniam
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod eos,
            laudantium, repudiandae aspernatur esse natus saepe at beatae ipsa
            doloremque, officia ea qui porro vel possimus quo explicabo veniam
          </p>
        </main>
        <footer className="App-footer">
          <small className="App-small">Leer más...</small>
          <div className="App-likes">
            <p>37</p>
            <i class="fas fa-heart"></i>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
