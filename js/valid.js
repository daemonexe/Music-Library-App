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

// valid.js

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
    btn.addEventListener("click", function () {
      this.parentElement.remove();
    });
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

  // check if that's not valid and validate the link
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

  // check if that's not valid and validate the link
  if (invalidSongsVidsURLs.length > 0) {
    invalidSongsVidsURLs.forEach((input) => input.classList.add("error"));
    document.getElementById("songsVidsError").textContent = "Invalid Link";
    hasErrors = true;
  }

  if (hasErrors) {
    event.preventDefault();
  }
});
