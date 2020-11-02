import React, { Component } from "react";
import catrina from "./catrina.png";
import "./App.scss";

class App extends Component {
  render() {
    const appHeader = (
      <header className="header">
        <img src={catrina} className="header__img" alt="logo" title="Photo" />
        <div className="header__box">
          <h1 className="header__name">Yanira Fernández</h1>
          <h2 className="header__date">Lunes 02 de noviembre de 2020</h2>
        </div>
      </header>
    );
    const appMain = (
      <main className="main">
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
    );
    const appFooter = (
      <footer className="footer">
        <small className="footer__small">Leer más...</small>
        <div className="footer__likes">
          <p>37</p>
          <i class="fas fa-heart"></i>
        </div>
      </footer>
    );
    const appBox = (
      <div className="box">
        {appHeader}
        {appMain}
        {appFooter}
      </div>
    );
    return appBox;
  }
}

export default App;
