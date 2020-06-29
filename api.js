import store from "./store.js";
import bookmarks from "./bookmarks.js";

const baseURL = "https://www.googleapis.com/books/v1"
async function listApiFetch(...args) {
  let error;

  const response = await fetch(...args);
 
  const data = await response.json();
  if (error) {
    error.message = data.message;
    store.setError(error);
    bookmarks.renderError();

    return Promise.reject(error);
  }
  return data;
}

function getBookmarks() {
  return listApiFetch(`${baseURL}`);
}

function createBookmark(myBookData) {
  return listApiFetch(`${baseURL}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: myBookData,
  });
}

function deleteBookmark(bookId) {
  return listApiFetch(`${baseURL}/${bookId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
}

function updateBookmark(bookId, newBookData) {
  return listApiFetch(`${baseUrl}/${bookId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: newBookData,
  });
}

export default {
  getBookmarks,
  createBookmark,
  deleteBookmark,
  updateBookmark,
};
