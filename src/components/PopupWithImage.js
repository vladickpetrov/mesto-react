function PopupWithImage(props) {
    return (
        <div className={`popup popup_image ${props.card ? 'popup_opened' : ''}`}>
            <div className="popup__image-window">
               <button className="popup__close-button clearbutton" type="button" onClick={props.onClose}></button>
               <img className="popup__image" src={props.card.link} alt={props.card.name} />
               <h3 className="popup__image-title">{props.card.name}</h3>
            </div>
            <div className="popup__background popup__background_image"></div>
        </div>
    );
}

export default PopupWithImage;