import React, { useContext } from "react";
import Card from "./Card";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Main(props) {
  const currentUser = useContext(CurrentUserContext);

  const cardsElements = props.cards.map((item, index) => {
    return (
      <li className="element__item" key={index}>
        <Card
          onCardClick={props.onCardClick}
          card={item}
          onCardLike={props.onCardLike}
          onCardDelete={props.onCardDelete}
        />
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
              src={currentUser.avatar}
              alt="Аватар пользователя"
            />
          </div>
          <div className="profile__info">
            <div className="profile__name-edit-button">
              <h1 className="profile__name">{currentUser.name}</h1>
              <button
                className="profile__edit-button clearbutton"
                onClick={props.onEditProfile}
                type="button"
              ></button>
            </div>
            <p className="profile__profession">{currentUser.about}</p>
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
