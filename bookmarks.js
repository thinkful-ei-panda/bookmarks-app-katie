import api from "./api.js";
import store from "./store";



function generateBookmarkString(bookmarks) {
  const items = bookmarks.map((item) => generateBookmarkElement(item));
  return items.join(" ");
}

let bookmarks = [...store.bookmarks];

const bookmarkListString = generateBookmarkString(bookmarks);

$("main").html(form + bookmarkListString);

//event handlers

function handleSubmit() {
  $("bookmarks-item").on("click", "button", () => {
    event.preventDefault();
    console.log($("input:rating"));
    if ($('input[class="bookmark-url"]:rating').val() === undefined) {
    // console.log("choose one");
    //} else {
    // renderCorrect();
    // }
  });
}

function handleBookmarks() {
  renderHomePage();
  renderFooter();
}

export default {
  render,
  handleBookmarks,
};
