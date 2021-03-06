import React, { Component } from "react";
import logo from "../catrina.png";
import "../App.scss";

class MediaCard extends Component {
  render() {
    const userName = "Yanira Fernández";
    const date = "Lunes 02 de noviembre de 2020";
    const text = ` Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod eos,
    laudantium, repudiandae aspernatur esse natus saepe at beatae ipsa
    doloremque, officia ea qui porro vel possimus quo explicabo veniam
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod eos,
    laudantium, repudiandae aspernatur esse natus saepe at beatae ipsa
    doloremque, officia ea qui porro vel possimus quo explicabo veniam
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod eos,
    laudantium, repudiandae aspernatur esse natus saepe at beatae ipsa
    doloremque, officia ea qui porro vel possimus quo explicabo veniam`;
    const likes = "02";

    const appHeader = (
      <header className="header">
        <img src={logo} className="header__img" alt="logo" title="Photo" />
        <div className="header__box">
          <h1 className="header__name">{userName}</h1>
          <h2 className="header__date">{date}</h2>
        </div>
      </header>
    );
    const appMain = (
      <main className="main">
        <p>{text}</p>
      </main>
    );
    const appFooter = (
      <footer className="footer">
        <small className="footer__small">Leer más...</small>
        <div className="footer__likes">
          <p>{likes}</p>
          <i class="footer__icon fas fa-heart"></i>
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

export default MediaCard;
