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

// artist.js

const eminem = {
  artistId: "AID-01",
  name: "Eminem",
  links: [
    { url: "https://www.eminem.com/", name: "Website" },
    { url: "https://www.instagram.com/eminem/?hl=en", name: "Instagram" },
    {
      url: "https://x.com/Eminem?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor",
      name: "Twitter"
    }
  ]
};

const NF = {
  artistId: "AID-02",
  name: "NF",
  links: [
    { url: "https://www.nfrealmusic.com/#/", name: "Website" },
    { url: "https://www.instagram.com/nfrealmusic/?hl=en", name: "Instagram" },
    { url: "https://x.com/nfrealmusic?lang=en", name: "Twitter" }
  ]
};

const Kendric_Lamar = {
  artistId: "AID-03",
  name: "Kendric Lamar",
  links: [
    { url: "https://interscope.com/pages/kendrick-lamar", name: "Website" },
    { url: "https://x.com/kendricklamar?lang=en", name: "Twitter" },
    { url: "https://open.spotify.com/artist/2YZyLoL8N0Wb9xBt1NhZWg", name: "Spotify" }
  ]
};

window.artists = [eminem, NF, Kendric_Lamar];
