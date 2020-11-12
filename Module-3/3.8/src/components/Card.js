import React, { Component } from "react";

const Card = (props) => {
  return (
    <div className="card">
      <h2 className="card__name">{props.name}</h2>
      <p className="card__description">{props.description}</p>
      <p className="card__language">{props.language}</p>
    </div>
  );
};

export default Card;
