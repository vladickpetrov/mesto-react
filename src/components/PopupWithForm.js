function PopupWithForm(props) {
  return (
    <div
      className={`popup popup_${props.name} ${
        props.isOpened ? "popup_opened" : ""
      }`}
    >
      <div className="popup__main-window">
        <button
          className="popup__close-button clearbutton"
          type="button"
          onClick={props.onClose}
        ></button>
        <form
          className="popup__form"
          noValidate
          method="get"
          name={props.name}
          autoComplete="off"
          action="#"
        >
          <h2 className="popup__title">{props.title}</h2>
          {props.children}
          <input
            className="popup__input popup__profession"
            id="input-avatar"
            type="url"
            name="profession"
            placeholder="Ссылка на аватар"
            required
          />
          <span className="popup__error input-link-error"></span>
          <button className="popup__save-button" type="submit">
            Сохранить
          </button>
        </form>
      </div>
      <div className="popup__background"></div>
    </div>
  );
}

export default PopupWithForm;
