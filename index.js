/*"use strict";

// API Key and base URL
const apiKey = "";
const searchURL = "";

function formatQueryParams(params) {
  const queryItems = Object.keys(params).map(
    (key) => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`
  );
  return queryItems.join("&");
}

function displayResults(responseJson) {
  // if there are previous results, remove them
  console.log(responseJson);
  $("#results-list").empty();
  // iterate through the items array
  for (let i = 0; i < responseJson.items.length; i++) {
    // for each park object in the items
    //array, add a list item to the results
    //list with the park name, url, and description

    $("#results-list").append(
      `<li><h3>${responseJson.data[i].fullname}</h3>
      <p>${responseJson.data[i].description}</p>
      <p><a href="${responseJson.data[i].url}">${responseJson.data[i].url}</a></p>
      </li>`
    );
  }
  $("#results").removeClass("hidden");
}

function getNationalParks(query, maxResults = 10) {
  const params = {
    key: apiKey,
    q: query,
    maxResults,
  };
  const queryString = formatQueryParams(params);
  const url = searchURL + "?" + queryString;

  console.log(url);

  fetch(url)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(response.statusText);
    })
    .then((responseJson) => displayResults(responseJson))
    .catch((err) => {
      $("#js-error-message").text(`Something went wrong: ${err.message}`);
    });
}

function watchForm() {
  $("form").submit((event) => {
    event.preventDefault();
    const searchTerm = $("#js-search-term").val();
    const maxResults = $("#js-max-results").val();
    getNationalParks(searchTerm, maxResults);
  });
}

$(watchForm);*/
