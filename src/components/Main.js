import React, { useState, useEffect } from "react";
import Card from "./Card";
import api from "../utils/Api.js";

function Main(props) {
  const [userName, setUserName] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api
      .getUserInfo()
      .then((values) => {
        setUserAvatar(values.avatar);
        setUserName(values.name);
        setUserDescription(values.about);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    api
      .getAllPictures()
      .then((values) => {
        setCards(values);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const cardsElements = cards.map((item, index) => {
    return (
      <li className="element__item" key={index}>
        <Card onCardClick={props.onCardClick} card={item} />
      </li>
    );
  });

  return (
    <main className="main">
      <section className="profile">
        <div className="profile__full-info">
          <div className="profile__avatar">
            <div
              className="profile__avatar-blur"
              onClick={props.onEditAvatar}
            ></div>
            <img
              className="profile__avatar-picture"
              src={userAvatar}
              alt="Аватар пользователя"
            />
          </div>
          <div className="profile__info">
            <div className="profile__name-edit-button">
              <h1 className="profile__name">{userName}</h1>
              <button
                className="profile__edit-button clearbutton"
                onClick={props.onEditProfile}
                type="button"
              ></button>
            </div>
            <p className="profile__profession">{userDescription}</p>
          </div>
        </div>
        <button
          className="profile__add-button clearbutton"
          onClick={props.onAddPlace}
          type="button"
        ></button>
      </section>
      <section className="element">
        <ul className="element__grid">{cardsElements}</ul>
      </section>
    </main>
  );
}

export default Main;
