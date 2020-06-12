const bookmarks [];
//building each page of web app
function generateHomePage() {
  return `
      <div class="heading">
      <h1>Bookmarks</h1>
      </div>
      <div class="main-container">               <!--form will add the bookmark and description to the list-->
            <form action="ToDo">
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
              <input type="submit" value="Add" class="button" />
                   <select id = "myList">
                     <option class="label">Rating</option>
                     <option value = "1">&#10084;</option>
                     <option value = "2">&#10084;&#10084;</option>
                     <option value = "3">&#10084;&#10084;&#10084;</option>
                     <option value = "4">&#10084;&#10084;&#10084;&#10084;</option>
                     <option value = "5">&#10084;&#10084;&#10084;&#10084;&#10084;</option>
                    </select>
            </form>
          </div>
        </div>
      </section>`
}

//rendering each page to the main element in css

function renderHomePage() {
  const homepage = generateHomePage();
  $("main").html(homepage);
}

//call functions

renderHomePage();

//document initializer

$(handleBookmarks)