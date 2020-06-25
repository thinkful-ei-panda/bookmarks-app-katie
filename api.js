
import store from './store.js';
import bookmarks from '.bookmarks.js';

const BASE_URL = 'https://thinkful-list-api.herokuapp.com/katie/bookmarks';

function listApifecth(..args) {
  let error;

  return fetch(...args)

  .then((response) => {
    if (!response.ok) {
      error = { code: response.status };
      tore.setError(error);
      bookmarks.renderError();

      if (!response.headers.get('content-type').includes('json')) {
        error.message = response.statusText;
        store.setError(error);
        bookmarks.renderError();

        return Promise.reject(error);
      }
    }
    return response.json();
  })

  .then((data) => {
    if (error) {
      error.message = data.message;
      store.setError(error);
      bookmarks.renderError();

      return Promise.reject(error);
    }
    return data;
  });
}

function getBookmarks() {
  return listApiFetch(`${BASE_URL}`);
}

function createBookmark(myBookData) {
  return listApiFetch(`${BASE_URL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: myBookData
  });
}

function deleteBookmark(bookId) {
  return listApifecth(`${BASE_URL}/${bookId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  });
}

function updateBookmark(bookId, newBookData) {
  return listApifecth(`${BASE_URL}/${bookId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: newBookData
  });
}

export default {
  getBookmarks,
  createBookmark,
  deleteBookmark,
  updateBookmark
};
