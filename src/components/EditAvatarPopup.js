import React, { useRef } from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  const inputRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateAvatar({
      avatar: inputRef.current.value,
    });
  }

  return (
    <PopupWithForm
      onSubmit={handleSubmit}
      isOpened={isOpen}
      onClose={onClose}
      name="avatar"
      title="Обновиить аватар"
    >
      <input
        ref={inputRef}
        className="popup__input popup__profession"
        id="input-avatar"
        type="url"
        name="profession"
        placeholder="Ссылка на аватар"
        required
      />
      <span className="popup__error input-link-error"></span>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
