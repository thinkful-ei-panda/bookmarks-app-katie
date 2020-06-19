import api from "./api.js";
import store from "./store";

generateBookmarkElement(); {
  return` <section>
  <div class="heading"><h1>Bookmarks</h1></div>
  <div class="main-container">             
    <form>
        <input
          type="url"
          id="url"
          name="url"
          placeholder="http://example.com"
        />
        <label for="descr"></label>
        <input
          type="text"
          id="descr"
          name="descr"
          placeholder="Give a short description here!"
        />
             <select id = "myList">
               <option class="label">Rating</option>
               <option value = "1">&#10084;</option>
               <option value = "2">&#10084;&#10084;</option>
               <option value = "3">&#10084;&#10084;&#10084;</option>
               <option value = "4">&#10084;&#10084;&#10084;&#10084;</option>
               <option value = "5">&#10084;&#10084;&#10084;&#10084;&#10084;</option>
              </select>
              <input type="submit" value="Add" class="button" />
      </form>
    </div>
  </div>
</section>`
}
function generateBookmarkString(bookmarks) {
  const items = bookmarks.map((item) => generateBookmarkElement(item));
  return items.join(" ");
}

let bookmarks = [...store.bookmarks];

const bookmarkListString = generateBookmarkString(bookmarks);

$("main").html(generateBookmarkElement+ bookmarkListString);



function handleSubmit() {
  $("bookmarks-item").on("click", "button", () => {
    event.preventDefault();},
    console.log($("input:rating"));
}

function handleBookmarks() {
  handleSubmit();
  generateBookmarkString();
  generateBookmarkElement();
}

$(handleBookmarks)
