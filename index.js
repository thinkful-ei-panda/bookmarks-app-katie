import store from './store.js';
import bookmarks from '/.bookmarks.js';
import api from './api';

const main = function () {
  api.getBookmarks()
  .then((items) => {
    console.log(items);
    items.forEach((item) => store.addItem(item));
    bookmarks.render();
});

bookmarks.bindEventListeners();
bookmarks.render();
};

$(main);




