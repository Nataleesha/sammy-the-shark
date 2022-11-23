const btn = document.querySelector("button");
const body = document.querySelector("body");

let availableColors = [
  "darkslateblue",
  "midnightblue",
  "teal",
  "tomato",
  "seagreen",
  "royalblue",
  "saddlebrown",
  "indigo",
  "olivedrab",
  "rosybrown",
  "coral",
  "moccasin",
  "darkviolet",
  "purple",
  "aquamarine",
  "turquoise",
  "chocolate",
  "plum"
];

btn.addEventListener("click", function () {
  const randomizeColor = Math.floor(Math.random() * availableColors.length);
  body.style.setProperty("--bg", availableColors[randomizeColor]);
});
