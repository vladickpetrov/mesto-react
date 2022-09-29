function Card({ card, onCardClick }) {
  function handleImageClick() {
    onCardClick(card);
  }

  return (
    <>
      <button
        className="element__delete-button clearbutton"
        type="button"
      ></button>
      <img
        className="element__photo"
        src={card.link}
        alt={card.name}
        onClick={handleImageClick}
        style={{ cursor: "pointer" }}
      />
      <div className="element__name-container">
        <h3 className="element__title">{card.name}</h3>
        <div className="element__like-button-container">
          <button
            className="element__like-button clearbutton"
            type="button"
          ></button>
          <p className="element__like-counter">{card.likes.length}</p>
        </div>
      </div>
    </>
  );
}

export default Card;
