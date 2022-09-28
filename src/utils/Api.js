export class Api {
    constructor(options) {
        this.link = options.baseUrl;
        this.headers = options.headers;
    }

    getUserInfo() {
        return fetch(`${this.link}/users/me`, {
            method: "GET",
            headers: this.headers,
        })
            .then(res => {
                if (res.ok) {
                  return res.json();
                }
                return Promise.reject(`Ошибка: ${res.status}`);
              });
    }

    getAllPictures() {
        return fetch(`${this.link}/cards`, {
            method: "GET",
            headers: this.headers,
        })
            .then(res => {
                if (res.ok) {
                  return res.json();
                }
                return Promise.reject(`Ошибка: ${res.status}`);
              });
    }

    sendUserInfo(name, prof) {
        return fetch(`${this.link}/users/me`, {
            method: "PATCH",
            headers: this.headers,
            body: JSON.stringify({
                name: name,
                about: prof
            })
        })
            .then(res => {
                if (res.ok) {
                  return res.json();
                }
                return Promise.reject(`Ошибка: ${res.status}`);
              })
    }

    sendPicture(name, link) {
        return fetch(`${this.link}/cards`, {
            method: "POST",
            headers: this.headers,
            body: JSON.stringify({
                name: name,
                link: link
            })
        })
            .then(res => {
                if (res.ok) {
                  return res.json();
                }
                return Promise.reject(`Ошибка: ${res.status}`);
              })
    }

    sendAvatarPicture(link) {
        return fetch(`${this.link}/users/me/avatar`, {
            method: "PATCH",
            headers: this.headers,
            body: JSON.stringify({
                avatar: link
            })
        })
            .then(res => {
                if (res.ok) {
                  return res.json();
                }
                return Promise.reject(`Ошибка: ${res.status}`);
              })
    }

    deleteCard(cardId) {
        return fetch(`${this.link}/cards/${cardId}`, {
            method: "DELETE",
            headers: this.headers,
        })
            .then(res => {
                if (res.ok) {
                  return res.json();
                }
                return Promise.reject(`Ошибка: ${res.status}`);
              })
    }

    putLike(cardId) {
        return fetch(`${this.link}/cards/${cardId}/likes`, {
            method: "PUT",
            headers: this.headers,
        })
            .then(res => {
                if (res.ok) {
                  return res.json();
                }
                return Promise.reject(`Ошибка: ${res.status}`);
              })
    }
    
    deleteLike(cardId) {
        return fetch(`${this.link}/cards/${cardId}/likes`, {
            method: "DELETE",
            headers: this.headers,
        })
            .then(res => {
                if (res.ok) {
                  return res.json();
                }
                return Promise.reject(`Ошибка: ${res.status}`);
              })
    }
}

const api = new Api({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-49', 
    headers: {
      authorization: '6de437f0-1a5d-4f78-bdcc-42fde5db78f6',
      'Content-Type': 'application/json'
    }
  });

export default api;