import Card from "./Card";

function Main(props) {
    return (
          <main className="main">
              <section className="profile">
                  <div className="profile__full-info">
                      <div className="profile__avatar">
                          <div className="profile__avatar-blur" onClick={props.onEditAvatar}></div>
                           <img className="profile__avatar-picture" src={props.userAvatar} alt="Аватар пользователя" />
                      </div>
                      <div className="profile__info">
                          <div className="profile__name-edit-button">
                          <h1 className="profile__name">{props.userName}</h1>
                          <button className="profile__edit-button clearbutton" onClick={props.onEditProfile} type="button"></button>
                          </div>
                      <p className="profile__profession">{props.userDescription}</p>
                      </div>
                  </div>
                  <button className="profile__add-button clearbutton" onClick={props.onAddPlace} type="button"></button>
              </section>
              <section className="element">
                  <ul className="element__grid">
                    {props.Cards.map((item, index) => {
                        return (<Card onCardClick={props.onCardClick} card={item} key={index}/>)
                    })}
                  </ul>
              </section>
          </main>
    );
  }
  
  export default Main;
  