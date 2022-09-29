import React, { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup.js";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(null);
  }

  return (
    <div className="page">
      <Header />
      <Main
        onCardClick={setSelectedCard}
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
      />
      <div className="popup popup_sure">
        <div className="popup__main-window">
          <button
            className="popup__close-button clearbutton"
            type="button"
          ></button>
          <form
            className="popup__form"
            noValidate
            method="get"
            name="edit-info"
            autoComplete="off"
            action="#"
          >
            <h2 className="popup__title">Вы уверены?</h2>
            <button className="popup__save-button" type="button">
              Да
            </button>
          </form>
        </div>
        <div className="popup__background"></div>
      </div>
      <PopupWithForm
        name="avatar"
        isOpened={isEditAvatarPopupOpen}
        title="Обновиить аватар"
        onClose={closeAllPopups}
      >
        <input
          className="popup__input popup__profession"
          id="input-avatar"
          type="url"
          name="profession"
          placeholder="Ссылка на аватар"
          required
        />
        <span className="popup__error input-link-error"></span>
      </PopupWithForm>
      <PopupWithForm
        name="add-card"
        isOpened={isAddPlacePopupOpen}
        title="Новое место"
        onClose={closeAllPopups}
      >
        <input
          className="popup__input popup__name"
          id="input-title"
          type="text"
          name="name"
          placeholder="Название"
          maxLength="30"
          minLength="2"
          required
        />
        <span className="popup__error input-title-error"></span>
        <input
          className="popup__input popup__profession"
          id="input-link"
          type="url"
          name="profession"
          placeholder="Ссылка на картинку"
          required
        />
        <span className="popup__error input-link-error"></span>
      </PopupWithForm>
      <PopupWithForm
        name="profile"
        isOpened={isEditProfilePopupOpen}
        title="Редактировать профиль"
        onClose={closeAllPopups}
      >
        <input
          className="popup__input popup__name"
          id="input-name"
          type="text"
          name="name"
          placeholder="Введите имя"
          required
          maxLength="40"
          minLength="2"
        />
        <span className="popup__error input-name-error"></span>
        <input
          className="popup__input popup__profession"
          id="input-profession"
          type="text"
          name="profession"
          placeholder="Введите название профессии"
          required
          maxLength="200"
          minLength="2"
        />
        <span className="popup__error input-profession-error"></span>
      </PopupWithForm>
      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      <Footer />
    </div>
  );
}

export default App;
