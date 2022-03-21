let score = 0;
let pcChoiceRow = -1;
let pcChoiceCol = -1;
let usrChoiceRow = -1;
let usrChoiceCol = -1;
let max = 1;
const parent = document.querySelector(".game-area");
const currScore = document.querySelector("#score");

parent.addEventListener("click", (event) => {
  usrChoiceRow = Number(event.target.dataset.row);
  usrChoiceCol = Number(event.target.dataset.col);
  checkClick();
});

const getRandomColors = function () {
  var ratio = 0.618033988749895;

  var hue = (Math.random() + ratio) % 1;
  var saturation = Math.round(Math.random() * 100) % 85;
  var lightness = Math.round(Math.random() * 100) % 85;

  var color =
    "hsl(" + Math.round(360 * hue) + "," + saturation + "%," + lightness + "%)";
  var oddColor =
    "hsl(" +
    Math.round(360 * hue) +
    "," +
    saturation +
    "%," +
    (lightness + 5) +
    "%)";

  return {
    color,
    oddColor,
  };
};

function getRandomInt() {
  return Math.floor(Math.random() * max);
}

function setOddIndex() {
  pcChoiceRow = getRandomInt();
  pcChoiceCol = getRandomInt();
}

const createBoard = () => {
  parent.innerHTML = "";
  if (max >= 10) {
    parent.classList.add("add-flex");
  }
  const { color, oddColor } = getRandomColors();
  setOddIndex();
  for (let i = 0; i < max; i++) {
    for (let j = 0; j < max; j++) {
      let block = document.createElement("div");
      block.classList.add("block");
      block.style.backgroundColor = color;
      block.dataset.row = i;
      block.dataset.col = j;
      if (i == pcChoiceRow && j == pcChoiceCol) {
        block.style.backgroundColor = oddColor;
      }
      parent.appendChild(block);
    }
    parent.innerHTML += "<br>";
  }
};

function displayScore() {
  currScore.innerText = score;
}

function shakeParent() {
  parent.classList.add("shake");
  setTimeout(() => {
    parent.classList.remove("shake");
  }, 500);
}

function checkClick() {
  if (usrChoiceCol == pcChoiceCol && usrChoiceRow == pcChoiceRow) {
    score++;
    displayScore();
    max++;
    createBoard();
  } else {
    shakeParent();
    score = 0;
    displayScore();
    max = 1;
    createBoard();
  }
}

createBoard(max);
