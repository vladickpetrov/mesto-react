export class Api {
  constructor(options) {
    this.link = options.baseUrl;
    this.headers = options.headers;
  }

  _getResponseData(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getUserInfo() {
    return fetch(`${this.link}/users/me`, {
      method: "GET",
      headers: this.headers,
    }).then(this._getResponseData);
  }

  getAllPictures() {
    return fetch(`${this.link}/cards`, {
      method: "GET",
      headers: this.headers,
    }).then(this._getResponseData);
  }

  sendUserInfo(name, prof) {
    return fetch(`${this.link}/users/me`, {
      method: "PATCH",
      headers: this.headers,
      body: JSON.stringify({
        name: name,
        about: prof,
      }),
    }).then(this._getResponseData);
  }

  sendPicture(name, link) {
    return fetch(`${this.link}/cards`, {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify({
        name: name,
        link: link,
      }),
    }).then(this._getResponseData);
  }

  sendAvatarPicture(link) {
    return fetch(`${this.link}/users/me/avatar`, {
      method: "PATCH",
      headers: this.headers,
      body: JSON.stringify({
        avatar: link,
      }),
    }).then(this._getResponseData);
  }

  deleteCard(cardId) {
    return fetch(`${this.link}/cards/${cardId}`, {
      method: "DELETE",
      headers: this.headers,
    }).then(this._getResponseData);
  }

  changeLikeCardStatus(cardId, likeStatus) {
    return fetch(`${this.link}/cards/${cardId}/likes`, {
      method: `${likeStatus ? "DELETE" : "PUT"}`,
      headers: this.headers,
    }).then(this._getResponseData);
  }
}

const api = new Api({
  baseUrl: "https://mesto.nomoreparties.co/v1/cohort-49",
  headers: {
    authorization: "6de437f0-1a5d-4f78-bdcc-42fde5db78f6",
    "Content-Type": "application/json",
  },
});

export default api;
