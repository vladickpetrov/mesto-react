import React, { useState } from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
  const [pictureLink, setPictureLink] = useState("");
  const [pictureName, setPictureName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    onAddPlace({
      pictureLink,
      pictureName,
    });
  }

  function handlePictureLinkChange(e) {
    setPictureLink(e.target.value);
  }

  function handlePictureNameChange(e) {
    setPictureName(e.target.value);
  }

  return (
    <PopupWithForm
      onSubmit={handleSubmit}
      name="add-card"
      isOpened={isOpen}
      title="Новое место"
      onClose={onClose}
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
        onChange={handlePictureNameChange}
      />
      <span className="popup__error input-title-error"></span>
      <input
        className="popup__input popup__profession"
        id="input-link"
        type="url"
        name="profession"
        placeholder="Ссылка на картинку"
        required
        onChange={handlePictureLinkChange}
      />
      <span className="popup__error input-link-error"></span>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
