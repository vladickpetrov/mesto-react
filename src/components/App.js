import React, { useState, useEffect } from 'react';
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import PopupWithForm from "./PopupWithForm";
import PopupWithImage from "./PopupWithImage.js";
import api from "../utils/Api.js";

function App() {

    const [isEditProfilePopupOpen, hadleEditOpen] = useState(false);
    const [isAddPlacePopupOpen, hadlePlaceOpen] = useState(false);
    const [isEditAvatarPopupOpen, hadleAvatarOpen] = useState(false);
    const [selectedCard, handleCardClick] = useState(false);
    const [userName, setUserName] = useState('');
    const [userAvatar, setUserAvatar] = useState('');
    const [userDescription, setUserDescription] = useState('');
    const [cards, setCards] = useState([]);

    function handleEditAvatarClick() {
        hadleAvatarOpen(true);
    }

    function handleEditProfileClick() {
        hadleEditOpen(true);
    }

    function handleAddPlaceClick() {
        hadlePlaceOpen(true);
    } 

    function closeAllPopups() {
        hadleAvatarOpen(false);
        hadleEditOpen(false);
        hadlePlaceOpen(false);
        handleCardClick(false);
    }

    useEffect(() => {
    api.getUserInfo()
    .then(values => {
        setUserAvatar(values.avatar);
        setUserName(values.name);
        setUserDescription(values.about);
     })
    .catch(err => {
        console.log(err);
    })
    }, [])

    useEffect(() => {
        api.getAllPictures()
        .then(values => {
            setCards(values);
         })
        .catch(err => {
            console.log(err);
        })
        }, [])

  return (
    <div className="page">
      <Header />
        <Main onCardClick={handleCardClick} Cards={cards} userName={userName} userAvatar={userAvatar} userDescription={userDescription} onEditAvatar={handleEditAvatarClick} onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick}/>
        <div className="popup popup_sure">
            <div className="popup__main-window">
               <button className="popup__close-button clearbutton" type="button"></button>
               <form className="popup__form" noValidate method="get" name="edit-info" autoComplete="off" action="#">
                   <h2 className="popup__title">Вы уверены?</h2>
                   <button className="popup__save-button" type="button">Да</button>
                </form>  
            </div>
            <div className="popup__background"></div>
        </div>
        <PopupWithForm name='avatar' isOpened={isEditAvatarPopupOpen} title='Обновиить аватар' onClose={closeAllPopups}/>
        <PopupWithForm name='add-card' isOpened={isAddPlacePopupOpen} title='Новое место' onClose={closeAllPopups}/>
        <PopupWithForm name='profile' isOpened={isEditProfilePopupOpen} title='Редактировать профиль' onClose={closeAllPopups}/>
        <PopupWithImage card={selectedCard} onClose={closeAllPopups}/>
        <Footer />
    </div>
  );
}

export default App;
