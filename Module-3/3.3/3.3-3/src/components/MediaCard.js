import React, { Component } from "react";
import logo from "../catrina.png";
import "../App.scss";

const MediaCard = (props) => {
  return (
    <div className="box">
      <header className="header">
        <img
          src={props.photo}
          className="header__img"
          alt="Photo"
          title="Photo"
        />
        <div className="header__box">
          <h1 className="header__name">{props.name}</h1>
          <h2 className="header__date">{props.date}</h2>
        </div>
      </header>

      <main className="main">
        <p>{props.text}</p>
      </main>

      <footer className="footer">
        <small className="footer__small">Leer más...</small>
        <div className="footer__likes">
          <p>{props.likes}</p>
          <i class="footer__icon fas fa-heart"></i>
        </div>
      </footer>
    </div>
  );
};

export default MediaCard;
