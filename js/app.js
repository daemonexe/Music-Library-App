/**
 * WEB222 – Assignment 5
 *
 * I declare that this assignment is my own work in accordance with
 * Seneca Academic Policy. No part of this assignment has been
 * copied manually or electronically from any other source
 * (including web sites) or distributed to other students.
 *
 * Please update the following with your information:
 *
 *      Name:       Thanujan Kapilan
 *      Student ID: 137700233
 *      Date:       6:08:24
 */

// app.js

const { artists, songs } = window;

// Get the elements
const menu = document.getElementById("menu");
const selectedArtistEl = document.getElementById("selected-artist");
const artistLinks = document.getElementById("selected-links");
const artistImage = document.getElementById("artist-image");
const songGrid = document.querySelector(".card-grid"); // Ensure this is the correct class

// Function to convert seconds into mm:ss format (returns string)
function convertToMins(durationInSecs) {
  const mins = Math.floor(durationInSecs / 60);
  const seconds = durationInSecs % 60;
  return `${mins}:${seconds < 10 ? "0" : ""}${seconds}`;
}

// Function to handle menu click events
function handleMenuClick(event, artist) {
  event.preventDefault();
  selectedArtistEl.textContent = artist.name;
  const artistId = artist.artistId;

  // Change artist image based on artist name
  if (artist.name === "NF") {
    console.log("pressed on NF");
    changeArtistImage("nf.jpg");
  } else if (artist.name === "Eminem") {
    changeArtistImage("eminem.jpg");
  } else if (artist.name === "Kendric Lamar") {
    changeArtistImage("kendrick.jpg");
  }

  // Clear existing links to prevent overlap
  artistLinks.innerHTML = "";

  // Add the artist's links right after the name
  artist.links.forEach((link) => {
    const linkEl = document.createElement("a");
    linkEl.textContent = link.name;
    linkEl.href = link.url;
    linkEl.target = "_blank";
    artistLinks.appendChild(linkEl);
  });

  // Generate song cards when an artist is selected
  createSongCards(artistId);
}

// Function to change the artist image
function changeArtistImage(imagePath) {
  if (artistImage) {
    artistImage.src = imagePath;
  }
}

function requestArtistButton() {
  const button = document.createElement("button");
  button.className = "glass-button";
  button.id = "requestArtist";
  button.textContent = "Request A New Artist";

  button.onclick = () => {
    window.open("./form.html", "_blank");
  };

  return button;
}

// Generate menu buttons dynamically
artists.forEach((artist) => {
  const button = document.createElement("button");
  button.textContent = artist.name;
  button.className = "glass-button";
  button.addEventListener("click", (event) => handleMenuClick(event, artist));
  menu.appendChild(button);
});

// Add a request artist button after dynamically generating buttons
menu.appendChild(requestArtistButton());

// Function to open link when card is pressed
function pressedOnCover(event, songUrl) {
  window.open(songUrl, "_blank");
}

function createSongCards(artistId) {
  songGrid.innerHTML = "";
  const artistSongs = songs.filter((song) => song.artistId === artistId);
  artistSongs.forEach((song) => {
    // Create card element
    const card = document.createElement("div");
    card.className = "card";

    let dur = convertToMins(song.duration);

    const cardContent = `
      <img src="${song.imageURL}" alt="${song.title}" class="card-image" />
      <h3 class="card-title">${song.title} (${dur}) </h3>
      <h4 class="card-info">${song.album} (${song.year}) </h4>
    `;

    card.addEventListener("click", (event) => pressedOnCover(event, song.mediaUrl));
    card.innerHTML = cardContent;
    // Add card to grid
    songGrid.appendChild(card);
  });
}

document.getElementById("songsVidsAdd").addEventListener("click", function () {
  const container = document.getElementById("songsVids");
  const newInput = document.createElement("div");
  newInput.classList.add("input-container");
  newInput.innerHTML = `
    <input type="text" name="songsVids[]" placeholder="Enter URL" required />
    <span class="remove-btn">-</span>
  `;
  container.appendChild(newInput);

  // Add event listener to the new "Remove" button
  newInput.querySelector(".remove-btn").addEventListener("click", function () {
    newInput.remove();
  });

  // Show the "Remove" button for all inputs
  document.querySelectorAll(".remove-btn").forEach((btn) => {
    btn.style.display = "inline";
  });
});

// Initial "Remove" button handling
document.querySelectorAll(".remove-btn").forEach((btn) => {
  btn.addEventListener("click", function () {
    this.parentElement.remove();
  });
});

document.getElementById("requestForm").addEventListener("submit", function (event) {
  let hasErrors = false;

  // Clear previous errors
  document.querySelectorAll(".input-group input, .input-group textarea").forEach((input) => {
    input.classList.remove("error");
  });
  document.querySelectorAll(".error-message").forEach((msg) => {
    msg.textContent = "";
  });

  // Validate Artist's Name
  const nameInput = document.getElementById("name");
  if (!nameInput.value.trim()) {
    nameInput.classList.add("error");
    document.getElementById("nameError").textContent = "Artist name is required.";
    hasErrors = true;
  }

  // Validate Genre
  const genreInput = document.getElementById("genre");
  if (!genreInput.value.trim()) {
    genreInput.classList.add("error");
    document.getElementById("genreError").textContent = "Music genre is required.";
    hasErrors = true;
  }

  // Validate Social Media Links
  const socialMediaInput = document.getElementById("social-media-urls");
  const socialMediaURLs = socialMediaInput.value.split(",").map((url) => url.trim());
  const invalidSocialMediaURLs = socialMediaURLs.filter((url) => !url.includes("."));

  // Check if that's not valid and validate the link
  if (invalidSocialMediaURLs.length > 0) {
    socialMediaInput.classList.add("error");
    document.getElementById("socialMediaError").textContent = "Invalid Link";
    hasErrors = true;
  }

  // Validate Songs & Videos URLs
  const songsVidsInputs = document.querySelectorAll("#songsVids input");
  const invalidSongsVidsURLs = Array.from(songsVidsInputs).filter(
    (input) => !input.value.includes(".")
  );

  // Check if that's not valid and validate the link
  if (invalidSongsVidsURLs.length > 0) {
    invalidSongsVidsURLs.forEach((input) => input.classList.add("error"));
    document.getElementById("songsVidsError").textContent = "Invalid Link";
    hasErrors = true;
  }

  if (hasErrors) {
    event.preventDefault();
  }
});
