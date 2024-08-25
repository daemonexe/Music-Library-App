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

// songs.js

const s1 = {
  songId: "SID-01",
  artistId: "AID-01",
  title: "Love the Way You Lie",
  album: "Recovery",
  year: 2010,
  duration: 263,
  isExplicit: true,
  mediaUrl: "https://www.youtube.com/watch?v=uelHwf8o7_U",
  imageURL: "https://i.scdn.co/image/ab67616d0000b27363d5aec8186b37f4404b1d1d"
};

const s2 = {
  songId: "SID-02",
  artistId: "AID-01",
  title: "Houdini ",
  album: "Death of Slim Shady",
  year: 2024,
  duration: 236,
  isExplicit: true,
  mediaUrl: "https://www.youtube.com/watch?v=22tVWwmTie8",
  imageURL: "https://i.scdn.co/image/ab67616d00001e02bb639683da5e1c283a765275"
};

const s3 = {
  songId: "SID-03",
  artistId: "AID-01",
  title: "Tobey",
  album: "Death of Slim Shady",
  year: 2024,
  duration: 283,
  isExplicit: true,
  mediaUrl: "https://www.youtube.com/watch?v=9xn0OHEZZ8Q&ab_channel=EminemMusic",
  imageURL: "https://i.scdn.co/image/ab67616d00001e02bb639683da5e1c283a765275"
};

const s4 = {
  songId: "SID-04",
  artistId: "AID-01",
  title: "Lose Yourself",
  album: "8 Mile",
  year: 2002,
  duration: 326,
  isExplicit: true,
  mediaUrl: "https://www.youtube.com/watch?v=xFYQQPAOz7Y&ab_channel=EminemMusic",
  imageURL: "https://i.scdn.co/image/ab67616d00001e02bb639683da5e1c283a765275"
};

const s5 = {
  songId: "SID-05",
  artistId: "AID-01",
  title: "Stan",
  album: "MMLP 2",
  year: 2000,
  duration: 404,
  isExplicit: true,
  mediaUrl: "https://www.youtube.com/watch?v=gOMhN-hfMtY&ab_channel=EminemVEVO",
  imageURL: "https://i.scdn.co/image/ab67616d0000b273dbb3dd82da45b7d7f31b1b42"
};

const s6 = {
  songId: "SID-06",
  artistId: "AID-01",
  title: "The Real Slim Shady",
  album: "MMLP 2",
  year: 2000,
  duration: 284,
  isExplicit: true,
  mediaUrl: "https://www.youtube.com/watch?v=eJO5HU_7_1w",
  imageURL: "https://i.scdn.co/image/ab67616d0000b273dbb3dd82da45b7d7f31b1b42"
};

const s7 = {
  songId: "SID-07",
  artistId: "AID-01",
  title: "Without Me",
  album: "The Eminem Show",
  year: 2002,
  duration: 290,
  isExplicit: true,
  mediaUrl: "https://www.youtube.com/watch?v=YVkUvmDQ3HY&ab_channel=EminemVEVO",
  imageURL: "https://i.scdn.co/image/ab67616d0000b2736ca5c90113b30c3c43ffb8f4"
};

const s8 = {
  songId: "SID-08",
  artistId: "AID-01",
  title: "Not Afraid",
  album: "Recovery",
  year: 2010,
  duration: 248,
  isExplicit: true,
  mediaUrl: "https://www.youtube.com/watch?v=j5-yKhDd64s&ab_channel=EminemVEVO",
  imageURL: "https://i.scdn.co/image/ab67616d0000b27363d5aec8186b37f4404b1d1d"
};

const s9 = {
  songId: "SID-09",
  artistId: "AID-01",
  title: "Mockingbird",
  album: "Encore",
  year: 2004,
  duration: 251,
  isExplicit: true,
  mediaUrl: "https://www.youtube.com/watch?v=37V3b39_EXw",
  imageURL: "https://i.scdn.co/image/ab67616d0000b273726d48d93d02e1271774f023"
};

const s10 = {
  songId: "SID-10",
  artistId: "AID-01",
  title: "My Name Is",
  album: "The Slim Shady LP",
  year: 1999,
  duration: 276,
  isExplicit: true,
  mediaUrl: "https://www.youtube.com/watch?v=sNPnbI1arSE&ab_channel=EminemVEVO",
  imageURL: "https://i.scdn.co/image/ab67616d0000b2739bef45ee387f274ea3198c55"
};

const s11 = {
  songId: "SID-11",
  artistId: "AID-01",
  title: "Guilty Conscience",
  album: "The Slim Shady LP",
  year: 1999,
  duration: 213,
  isExplicit: true,
  mediaUrl: "https://www.youtube.com/watch?v=Xbw_BxDwdjk",
  imageURL: "https://i.scdn.co/image/ab67616d0000b2739bef45ee387f274ea3198c55"
};

const s12 = {
  songId: "SID-12",
  artistId: "AID-01",
  title: "Venom",
  album: "Kamikaze",
  year: 2018,
  duration: 269,
  isExplicit: true,
  mediaUrl: "https://www.youtube.com/watch?v=8CdcCD5V-d8&ab_channel=EminemVEVO",
  imageURL: "https://i.scdn.co/image/ab67616d0000b273e4073def0c03a91e3fceaf73"
};

const s13 = {
  songId: "SID-13",
  artistId: "AID-01",
  title: "Lucky You",
  album: "Kamikaze",
  year: 2018,
  duration: 246,
  isExplicit: true,
  mediaUrl: "https://www.youtube.com/watch?v=mvSItvjFE1c",
  imageURL: "https://i.scdn.co/image/ab67616d0000b273e4073def0c03a91e3fceaf73"
};

const s14 = {
  songId: "SID-14",
  artistId: "AID-01",
  title: "Rap God",
  album: "MMLP 22",
  year: 2013,
  duration: 363,
  isExplicit: true,
  mediaUrl: "https://www.youtube.com/watch?v=XbGs_qK2PQA&ab_channel=EminemVEVO",
  imageURL: "https://i.scdn.co/image/ab67616d0000b2733c65085a58aae2cccd892cbe"
};

const s15 = {
  songId: "SID-15",
  artistId: "AID-01",
  title: "Mockingbird",
  album: "Encore",
  year: 2004,
  duration: 251,
  isExplicit: true,
  mediaUrl: "https://www.youtube.com/watch?v=S9bCLPwzSC0&ab_channel=EminemVEVO",
  imageURL: "https://i.scdn.co/image/ab67616d0000b273726d48d93d02e1271774f023"
};

const s16 = {
  songId: "SID-16",
  artistId: "AID-01",
  title: "Killshot",
  album: "Single Release",
  year: 2018,
  duration: 253,
  isExplicit: true,
  mediaUrl: "https://www.youtube.com/watch?v=FxQTY-W6GIo&ab_channel=EminemVEVO",
  imageURL: "https://i.scdn.co/image/ab67616d0000b273ebd4158db192228a77d8c2a4"
};

const s17 = {
  songId: "SID-17",
  artistId: "AID-01",
  title: "Cleanin' Out My Closet",
  album: "The Eminem Show",
  year: 2002,
  duration: 293,
  isExplicit: true,
  mediaUrl: "https://www.youtube.com/watch?v=RQ9_TKayu9s&ab_channel=EminemVEVO",
  imageURL: "https://i.scdn.co/image/ab67616d0000b2736ca5c90113b30c3c43ffb8f4"
};

const s18 = {
  songId: "SID-18",
  artistId: "AID-01",
  title: "Beautiful",
  album: "Relapse",
  year: 2009,
  duration: 360,
  isExplicit: true,
  mediaUrl: "https://www.youtube.com/watch?v=lgT1AidzRWM",
  imageURL: "https://i.scdn.co/image/ab67616d0000b27363d5aec8186b37f4404b1d1d"
};

const s19 = {
  songId: "SID-19",
  artistId: "AID-01",
  title: "Stan (feat. Dido)",
  album: "MMLP 2",
  year: 2000,
  duration: 404,
  isExplicit: true,
  mediaUrl: "https://www.youtube.com/watch?v=gOMhN-hfMtY&ab_channel=EminemVEVO",
  imageURL: "https://i.scdn.co/image/ab67616d0000b2733c65085a58aae2cccd892cbe"
};

const s20 = {
  songId: "SID-20",
  artistId: "AID-01",
  title: "The Way I Am",
  album: "MMLP 2",
  year: 2000,
  duration: 291,
  isExplicit: true,
  mediaUrl: "https://www.youtube.com/watch?v=knj2BXWUDIo&ab_channel=EminemVEVO",
  imageURL: "https://i.scdn.co/image/ab67616d0000b2733c65085a58aae2cccd892cbe"
};

const s21 = {
  songId: "SID-21",
  artistId: "AID-02",
  title: "Paralysed",
  album: "Mansion",
  year: 2000,
  duration: 291,
  isExplicit: true,
  mediaUrl: "https://www.youtube.com/watch?v=uF5QE3-ox4o",
  imageURL: "https://i.scdn.co/image/ab67616d0000b27395d5d85909d5deb5cee9f311"
};

const s22 = {
  songId: "SID-22",
  artistId: "AID-02",
  title: "The Search",
  album: "The Search",
  year: 2019,
  duration: 266,
  isExplicit: false,
  mediaUrl: "https://www.youtube.com/watch?v=fnlJw9H0xAM",
  imageURL: "https://i.scdn.co/image/ab67616d0000b273942a0c9ac8f1def7c8805044"
};

const s23 = {
  songId: "SID-23",
  artistId: "AID-02",
  title: "Leave Me Alone",
  album: "The Search",
  year: 2019,
  duration: 312,
  isExplicit: false,
  mediaUrl: "https://www.youtube.com/watch?v=XGGWhOUYObc",
  imageURL: "https://i.scdn.co/image/ab67616d0000b273942a0c9ac8f1def7c8805044"
};

const s24 = {
  songId: "SID-24",
  artistId: "AID-02",
  title: "Let You Down",
  album: "Perception",
  year: 2017,
  duration: 213,
  isExplicit: false,
  mediaUrl: "https://www.youtube.com/watch?v=fbHbTBP_u7U",
  imageURL: "https://i.scdn.co/image/ab67616d0000b273cd733919ee57d0cc466e152f"
};

const s25 = {
  songId: "SID-25",
  artistId: "AID-02",
  title: "Therapy Session",
  album: "Therapy Session",
  year: 2016,
  duration: 264,
  isExplicit: true,
  mediaUrl: "https://www.youtube.com/watch?v=fbHbTBP_u7U",
  imageURL: "https://i.scdn.co/image/ab67616d0000b27314c95b3975386061f46f3983"
};

const s26 = {
  songId: "SID-26",
  artistId: "AID-02",
  title: "When I Grow Up",
  album: "The Search",
  year: 2019,
  duration: 222,
  isExplicit: false,
  mediaUrl: "https://www.youtube.com/watch?v=lxRwEPvL-mQ",
  imageURL: "https://i.scdn.co/image/ab67616d0000b273942a0c9ac8f1def7c8805044"
};

const s27 = {
  songId: "SID-27",
  artistId: "AID-02",
  title: "If You Want Love",
  album: "Perception",
  year: 2017,
  duration: 238,
  isExplicit: false,
  mediaUrl: "https://www.youtube.com/watch?v=r9bp50MHLZM&ab_channel=NFVEVO",
  imageURL: "https://i.scdn.co/image/ab67616d0000b273cd733919ee57d0cc466e152f"
};

const s28 = {
  songId: "SID-28",
  artistId: "AID-02",
  title: "Paid My Dues",
  album: "The Search",
  year: 2019,
  duration: 235,
  isExplicit: false,
  mediaUrl: "https://www.youtube.com/watch?v=LLAgke7QprM&ab_channel=NFVEVO",
  imageURL: "https://i.scdn.co/image/ab67616d0000b273942a0c9ac8f1def7c8805044"
};

const s29 = {
  songId: "SID-29",
  artistId: "AID-02",
  title: "Outcast",
  album: "Perception",
  year: 2017,
  duration: 314,
  isExplicit: true,
  mediaUrl: "https://www.youtube.com/watch?v=J7MYJ8Kxhwc",
  imageURL: "https://i.scdn.co/image/ab67616d0000b273cd733919ee57d0cc466e152f"
};

const s30 = {
  songId: "SID-30",
  artistId: "AID-02",
  title: "Options",
  album: "The Search",
  year: 2019,
  duration: 231,
  isExplicit: true,
  mediaUrl: "https://www.youtube.com/watch?v=eMKCzDcvjfc",
  imageURL: "https://i.scdn.co/image/ab67616d0000b273942a0c9ac8f1def7c8805044"
};

const s31 = {
  songId: "SID-31",
  artistId: "AID-02",
  title: "Intro",
  album: "Mansion",
  year: 2015,
  duration: 185,
  isExplicit: false,
  mediaUrl: "https://www.youtube.com/watch?v=V9dIVtoxIyo&ab_channel=NFVEVO",
  imageURL: "https://i.scdn.co/image/ab67616d0000b27395d5d85909d5deb5cee9f311"
};

const s32 = {
  songId: "SID-32",
  artistId: "AID-02",
  title: "Paralyzed",
  album: "Mansion",
  year: 2015,
  duration: 252,
  isExplicit: false,
  mediaUrl: "https://www.youtube.com/watch?v=DHhHUZsXTBk&ab_channel=NFVEVO",
  imageURL: "https://i.scdn.co/image/ab67616d0000b27395d5d85909d5deb5cee9f311"
};

const s33 = {
  songId: "SID-33",
  artistId: "AID-02",
  title: "Grindin'",
  album: "Therapy Session",
  year: 2016,
  duration: 219,
  isExplicit: true,
  mediaUrl: "https://www.youtube.com/watch?v=zhqvxdx8kIM&ab_channel=NFVEVO",
  imageURL: "https://i.scdn.co/image/ab67616d0000b27314c95b3975386061f46f3983"
};

const s34 = {
  songId: "SID-34",
  artistId: "AID-02",
  title: "Real",
  album: "Therapy Session",
  year: 2016,
  duration: 240,
  isExplicit: true,
  mediaUrl: "https://www.youtube.com/watch?v=Po5zT1krKOc&ab_channel=NFVEVO",
  imageURL: "https://i.scdn.co/image/ab67616d0000b27314c95b3975386061f46f3983"
};

const s35 = {
  songId: "SID-35",
  artistId: "AID-02",
  title: "How Could You Leave Us",
  album: "Therapy Session",
  year: 2016,
  duration: 323,
  isExplicit: true,
  mediaUrl: "https://www.youtube.com/watch?v=wOzQMCyPc8o&ab_channel=NFVEVO",
  imageURL: "https://i.scdn.co/image/ab67616d0000b27314c95b3975386061f46f3983"
};

const s36 = {
  songId: "SID-36",
  artistId: "AID-02",
  title: "10 Feet Down",
  album: "Perception",
  year: 2017,
  duration: 247,
  isExplicit: false,
  mediaUrl: "https://www.youtube.com/watch?v=_y_G9bmzlf8&ab_channel=NF-Topic",
  imageURL: "https://i.scdn.co/image/ab67616d0000b273cd733919ee57d0cc466e152f"
};

const s37 = {
  songId: "SID-37",
  artistId: "AID-02",
  title: "Remember This",
  album: "Perception",
  year: 2017,
  duration: 240,
  isExplicit: false,
  mediaUrl: "https://www.youtube.com/watch?v=SNhOgS3BHjw&ab_channel=NFVEVO",
  imageURL: "https://i.scdn.co/image/ab67616d0000b273cd733919ee57d0cc466e152f"
};

const s38 = {
  songId: "SID-38",
  artistId: "AID-02",
  title: "Intro III",
  album: "Perception",
  year: 2017,
  duration: 274,
  isExplicit: true,
  mediaUrl: "https://www.youtube.com/watch?v=gdLLRj1Ge7g",
  imageURL: "https://i.scdn.co/image/ab67616d0000b273cd733919ee57d0cc466e152f"
};

const s39 = {
  songId: "SID-39",
  artistId: "AID-02",
  title: "Change",
  album: "The Search",
  year: 2019,
  duration: 222,
  isExplicit: false,
  mediaUrl: "https://www.youtube.com/watch?v=j__VYXZ-5Cw&ab_channel=NFVEVO",
  imageURL: "https://i.scdn.co/image/ab67616d0000b273942a0c9ac8f1def7c8805044"
};

const s40 = {
  songId: "SID-40",
  artistId: "AID-02",
  title: "Time",
  album: "The Search",
  year: 2019,
  duration: 244,
  isExplicit: false,
  mediaUrl: "https://www.youtube.com/watch?v=AkmJop2WUQA&ab_channel=NF-Topic",
  imageURL: "https://i.scdn.co/image/ab67616d0000b273942a0c9ac8f1def7c8805044"
};

const s41 = {
  songId: "SID-41",
  artistId: "AID-03",
  title: "DNA",
  album: "DNA",
  year: 2017,
  duration: 244,
  isExplicit: true,
  mediaUrl: "https://www.youtube.com/watch?v=NLZRYQMLDW4&ab_channel=KendrickLamarVEVO",
  imageURL: "https://i.scdn.co/image/ab67616d0000b2738b52c6b9bc4e43d873869699"
};

const s42 = {
  songId: "SID-42",
  artistId: "AID-03",
  title: "HUMBLE.",
  album: "DAMN.",
  year: 2017,
  duration: 177,
  isExplicit: true,
  mediaUrl: "https://www.youtube.com/watch?v=tvTRZJ-4EyI&ab_channel=KendrickLamarVEVO",
  imageURL: "https://i.scdn.co/image/ab67616d0000b2738b52c6b9bc4e43d873869699"
};

const s43 = {
  songId: "SID-43",
  artistId: "AID-03",
  title: "Alright",
  album: "To Pimp a Butterfly",
  year: 2015,
  duration: 221,
  isExplicit: true,
  mediaUrl: "https://www.youtube.com/watch?v=JocAXINz-YE&ab_channel=KendrickLamar-Topic",
  imageURL: "https://i.scdn.co/image/ab67616d0000b273cdb645498cd3d8a2db4d05e1"
};

const s44 = {
  songId: "SID-44",
  artistId: "AID-03",
  title: "LOVE.",
  album: "DAMN.",
  year: 2017,
  duration: 213,
  isExplicit: false,
  mediaUrl: "https://www.youtube.com/watch?v=ox7RsX1Ee34&ab_channel=KendrickLamarVEVO",
  imageURL: "https://i.scdn.co/image/ab67616d0000b2738b52c6b9bc4e43d873869699"
};

const s45 = {
  songId: "SID-45",
  artistId: "AID-03",
  title: "Swimming Pools (Drank)",
  album: "good kid, m.A.A.d city",
  year: 2012,
  duration: 255,
  isExplicit: true,
  mediaUrl: "https://www.youtube.com/watch?v=B5YNiCfWC3A&ab_channel=KendrickLamarVEVO",
  imageURL: "https://i.scdn.co/image/ab67616d0000b273d58e537cea05c2156792c53d"
};

const s46 = {
  songId: "SID-46",
  artistId: "AID-03",
  title: "Money Trees",
  album: "good kid, m.A.A.d city",
  year: 2012,
  duration: 367,
  isExplicit: true,
  mediaUrl: "https://www.youtube.com/watch?v=smqhSl0u_sI&ab_channel=music",
  imageURL: "https://i.scdn.co/image/ab67616d0000b273d58e537cea05c2156792c53d"
};

const s47 = {
  songId: "SID-47",
  artistId: "AID-03",
  title: "King Kunta",
  album: "To Pimp a Butterfly",
  year: 2015,
  duration: 213,
  isExplicit: true,
  mediaUrl: "https://www.youtube.com/watch?v=hRK7PVJFbS8&ab_channel=KendrickLamarVEVO",
  imageURL: "https://i.scdn.co/image/ab67616d0000b273cdb645498cd3d8a2db4d05e1"
};

const s48 = {
  songId: "SID-48",
  artistId: "AID-03",
  title: "The Recipe",
  album: "good kid, m.A.A.d city",
  year: 2012,
  duration: 323,
  isExplicit: true,
  mediaUrl: "https://www.youtube.com/watch?v=YpugK0RpEaU&ab_channel=KendrickLamarVEVO",
  imageURL: "https://i.scdn.co/image/ab67616d0000b273d58e537cea05c2156792c53d"
};

const s49 = {
  songId: "SID-49",
  artistId: "AID-03",
  title: "Bitch, Don't Kill My Vibe",
  album: "good kid, m.A.A.d city",
  year: 2012,
  duration: 338,
  isExplicit: true,
  mediaUrl: "https://www.youtube.com/watch?v=GF8aaTu2kg0&ab_channel=KendrickLamarVEVO",
  imageURL: "https://i.scdn.co/image/ab67616d0000b273d58e537cea05c2156792c53d"
};

const s50 = {
  songId: "SID-50",
  artistId: "AID-03",
  title: "LOYALTY. ft. Rihanna",
  album: "DAMN.",
  year: 2017,
  duration: 214,
  isExplicit: true,
  mediaUrl: "https://www.youtube.com/watch?v=Dlh-dzB2U4Y&ab_channel=KendrickLamarVEVO",
  imageURL: "https://i.scdn.co/image/ab67616d0000b2738b52c6b9bc4e43d873869699"
};

const s51 = {
  songId: "SID-51",
  artistId: "AID-03",
  title: "ELEMENT.",
  album: "DAMN.",
  year: 2017,
  duration: 210,
  isExplicit: true,
  mediaUrl: "https://www.youtube.com/watch?v=glaG64Ao7sM&ab_channel=KendrickLamarVEVO",
  imageURL: "https://i.scdn.co/image/ab67616d0000b2738b52c6b9bc4e43d873869699"
};

const s52 = {
  songId: "SID-52",
  artistId: "AID-03",
  title: "i",
  album: "To Pimp a Butterfly",
  year: 2015,
  duration: 238,
  isExplicit: true,
  mediaUrl: "https://www.youtube.com/watch?v=8aShfolR6w8",
  imageURL: "https://i.scdn.co/image/ab67616d0000b273cdb645498cd3d8a2db4d05e1"
};

const s53 = {
  songId: "SID-53",
  artistId: "AID-03",
  title: "Backseat Freestyle",
  album: "good kid, m.A.A.d city",
  year: 2012,
  duration: 213,
  isExplicit: true,
  mediaUrl: "https://www.youtube.com/watch?v=EZW7et3tPuQ",
  imageURL: "https://i.scdn.co/image/ab67616d0000b273d58e537cea05c2156792c53d"
};

const s54 = {
  songId: "SID-54",
  artistId: "AID-03",
  title: "Money Trees ft",
  album: "good kid, m.A.A.d city",
  year: 2012,
  duration: 357,
  isExplicit: true,
  mediaUrl: "https://www.youtube.com/watch?v=smqhSl0u_sI",
  imageURL: "https://i.scdn.co/image/ab67616d0000b273d58e537cea05c2156792c53d"
};

const s55 = {
  songId: "SID-55",
  artistId: "AID-03",
  title: "XXX. ft. U2",
  album: "DAMN.",
  year: 2017,
  duration: 270,
  isExplicit: true,
  mediaUrl: "https://www.youtube.com/watch?v=dgH-wjP1JPc",
  imageURL: "https://i.scdn.co/image/ab67616d0000b2738b52c6b9bc4e43d873869699"
};

const s56 = {
  songId: "SID-56",
  artistId: "AID-03",
  title: "PRIDE.",
  album: "DAMN.",
  year: 2017,
  duration: 243,
  isExplicit: true,
  mediaUrl: "https://www.youtube.com/watch?v=pRGmFiEyr0A",
  imageURL: "https://i.scdn.co/image/ab67616d0000b2738b52c6b9bc4e43d873869699"
};

const s57 = {
  songId: "SID-57",
  artistId: "AID-03",
  title: "FEAR.",
  album: "DAMN.",
  year: 2017,
  duration: 453,
  isExplicit: true,
  mediaUrl: "https://www.youtube.com/watch?v=jdbQYDkNjfk",
  imageURL: "https://i.scdn.co/image/ab67616d0000b2738b52c6b9bc4e43d873869699"
};

const s58 = {
  songId: "SID-58",
  artistId: "AID-03",
  title: "The Blacker the Berry",
  album: "To Pimp a Butterfly",
  year: 2015,
  duration: 345,
  isExplicit: true,
  mediaUrl: "https://www.youtube.com/watch?v=VdPtVZDspIY",
  imageURL: "https://i.scdn.co/image/ab67616d0000b273cdb645498cd3d8a2db4d05e1"
};

const s59 = {
  songId: "SID-59",
  artistId: "AID-03",
  title: "HiiiPoWeR",
  album: "Section.80",
  year: 2011,
  duration: 253,
  isExplicit: true,
  mediaUrl: "https://www.youtube.com/watch?v=WL9ahHAlPKU",
  imageURL: "https://i.scdn.co/image/ab67616d0000b273eddb2639b74ac6c202032ebe"
};

const s60 = {
  songId: "SID-60",
  artistId: "AID-03",
  title: "DUCKWORTH.",
  album: "DAMN.",
  year: 2017,
  duration: 252,
  isExplicit: true,
  mediaUrl: "https://www.youtube.com/watch?v=ei-5p50w17s",
  imageURL: "https://i.scdn.co/image/ab67616d0000b2738b52c6b9bc4e43d873869699"
};

window.songs = [
  s1,
  s2,
  s3,
  s4,
  s5,
  s6,
  s7,
  s8,
  s9,
  s10,
  s11,
  s12,
  s13,
  s14,
  s15,
  s16,
  s17,
  s18,
  s19,
  s20,
  s21,
  s22,
  s23,
  s24,
  s25,
  s26,
  s27,
  s28,
  s29,
  s30,
  s31,
  s32,
  s33,
  s34,
  s35,
  s36,
  s37,
  s38,
  s39,
  s40,
  s41,
  s42,
  s43,
  s44,
  s45,
  s46,
  s47,
  s48,
  s49,
  s50,
  s51,
  s52,
  s53,
  s54,
  s55,
  s56,
  s57,
  s58,
  s59,
  s60
];
