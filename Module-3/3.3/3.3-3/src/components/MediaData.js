import React, { Component } from "react";
import MediaCard from "./MediaCard";
import photo from "../images/catrina.png";
import fernando from "../images/Fernando.jpeg";

class MediaData extends Component {
  render() {
    return (
      <ul className="list">
        <li className="list__item">
          <MediaCard
            name="Yanira Fernández"
            date="03 de noviembre de 2020"
            photo={photo}
            text="laudantium, repudiandae aspernatur esse natus saepe at beatae ipsa
            doloremque, officia ea qui porro vel possimus quo explicabo veniam
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod eos,
            laudantium, repudiandae aspernatur esse natus saepe at beatae ipsa
            doloremque, officia ea qui porro vel possimus quo explicabo veniam
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod eos,
            laudantium, repudiandae aspernatur esse natus saepe at beatae ipsa
            doloremque, officia ea qui porro vel possimus quo explicabo veniam"
            likes={2}
            heart={<i class="fas fa-heart footer__icon"></i>}
          />
        </li>
        <li className="list__item">
          <MediaCard
            name="Estíbaliz barato"
            date="04 de noviembre de 2020"
            photo={photo}
            text="Lorem fistrum me cago en tus muelas de la pradera va usté muy cargadoo ahorarr ahorarr fistro. Fistro qué dise usteer pecador a gramenawer benemeritaar diodenoo me cago en tus muelas llevame al sircoo fistro al ataquerl mamaar. Caballo blanco caballo negroorl mamaar tiene musho peligro torpedo al ataquerl. Caballo blanco caballo negroorl ahorarr a gramenawer la caidita va usté muy cargadoo quietooor hasta luego Lucas qué dise usteer. A gramenawer torpedo me cago en tus muelas benemeritaar a peich torpedo mamaar va usté muy cargadoo. Mamaar amatomaa qué dise usteer papaar papaar está la cosa muy malar ahorarr me cago en tus muelas."
            likes={457}
            heart={<i class="fas fa-heart footer__icon"></i>}
          />
        </li>
        <li className="list__item">
          <MediaCard
            name="Fernando Simón"
            date="15 de marzo de 2020"
            photo={fernando}
            text="Lorem fistrum me cago en tus muelas de la pradera va usté muy cargadoo ahorarr ahorarr fistro. Fistro qué dise usteer pecador a gramenawer benemeritaar diodenoo me cago en tus muelas llevame al sircoo fistro al ataquerl mamaar. Caballo blanco caballo negroorl mamaar tiene musho peligro torpedo al ataquerl. Caballo blanco caballo negroorl ahorarr a gramenawer la caidita va usté muy cargadoo quietooor hasta luego Lucas qué dise usteer. A gramenawer torpedo me cago en tus muelas benemeritaar a peich torpedo mamaar va usté muy cargadoo. Mamaar amatomaa qué dise usteer papaar papaar está la cosa muy malar ahorarr me cago en tus muelas."
            likes={3485702}
            heart={<i class="far fa-heart footer__icon"></i>}
          />
        </li>
      </ul>
    );
  }
}

export default MediaData;
