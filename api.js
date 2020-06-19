const BASE_URL = 'https://thinkful-list-api.herokuapp.com/katie';

function listApiFetch(...args) {
  let error;
  return fetch(...args)
    .then(res => {
      console.log(res);
      if (!res.ok) {
        
        error = { code: res.status };
      }
      
      return res.json();
    })

    .then(data => {
      
      if (error) {
        error.message = data.message;
        return Promise.reject(error);
      }

      
      return data;
    });
}

function getBookmarks() {
  return listApiFetch(`${BASE_URL}/bookmarks`);
}


 /** 
*@param {string} title 
*@param {string} url 
*@param {string} desc 
*@param {number} rating 
 */
function createBookmark(title, url, desc = '', rating) {
  let newBookmark = {
    title: title,
    url: url,
    desc: desc,
    rating: rating
  };
  console.log(newBookmark);
  console.log(typeof title);
  console.log(`${BASE_URL}/bookmarks`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newBookmark)
  });
  return listApiFetch(`${BASE_URL}/bookmarks`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newBookmark)
  });
}
/** 
  @param {string} id 
  @param {string} title 
  @param {string} url 
 @param {string} desc 
  @param {number} rating 
 */
function updateBookmark(id, title, url, desc = '', rating) {
  let updateBookmark = JSON.stringify({
    id: id,
    title: title,
    url: url,
    desc: desc,
    rating: rating
  });
  return listApiFetch(`${BASE_URL}/bookmarks/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: updateBookmark
  });
}

/**
 * 
 * @param {string} id 
 */
function deleteBookmark(id) {
  return listApiFetch(`${BASE_URL}/bookmarks/${id}`, {
    method: 'DELETE'
  });
}

export default {
  getBookmarks,
  createBookmark,
  updateBookmark,
  deleteBookmark
};