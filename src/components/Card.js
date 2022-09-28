function Card(props) {
    function handleClick() {
        props.onCardClick(props.card);
    }

    return (
    <li className="element__item" key={props.index}>
        <button className="element__delete-button clearbutton" type="button"></button>
        <img className="element__photo" src={props.card.link} alt={props.card.name} onClick={handleClick} />
        <div className="element__name-container">
            <h3 className="element__title">{props.card.name}</h3>
            <div className="element__like-button-container">
                <button className="element__like-button clearbutton" type="button"></button>
                <p className="element__like-counter">{props.card.likes.length}</p>
            </div>
        </div>
    </li>
    );
  }
  
  export default Card;
  