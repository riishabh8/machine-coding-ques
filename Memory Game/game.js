let pcChoice = -1;
let usrChoice = -1;
let max = 16;
let score = 0;
let topScore = 0;
const parent = document.querySelector("#play-area");
const currentScore = document.querySelector("#currentScore");
const highScore = document.querySelector("#highScore");
const btn = document.querySelector("button");

//Adding the event listener to the parent helps to get the hold of the child as well.
parent.addEventListener("click", (event) => {
  usrChoice = event.target.dataset.value;
  checkInput();
});

/********************************************************/
/***************Logic to create Board*******************/
const createBlocks = () => {
  for (let index = 0; index < max; index++) {
    const block = document.createElement("div");
    block.classList.add("block");
    block.dataset.value = index;
    block.setAttribute("id", `block-${index}`);
    parent.appendChild(block);
  }
};
createBlocks();
/**************************************************************/

/********************************************************/
/***************Game Functions*******************/
function getRandomInt() {
  pcChoice = Math.floor(Math.random() * max);
}

const blink = (id, clr) => {
  const blinkBlock = document.querySelector(`#block-${id}`);
  blinkBlock.classList.add(clr);
  setTimeout(() => {
    blinkBlock.classList.remove(clr);
  }, 250);
};

const play = () => {
  getRandomInt();
  blink(pcChoice, "blue");
  btn.disabled = true;
};

const displayScore = (el, score) => {
  el.innerText = score;
};

const checkHighScore = () => {
  if (score > topScore) {
    topScore = score;
    highScore.innerText = topScore;
  }
};

const checkInput = () => {
  if (usrChoice == pcChoice) {
    correctAnswer();
  } else {
    incorrectAnswer();
  }
};

const correctAnswer = () => {
  score++;
  displayScore(currentScore, score);
  checkHighScore();
  play();
};

const shake = () => {
  parent.classList.add("shake");
  blink(usrChoice, "red");
  setTimeout(() => {
    parent.classList.remove("shake");
  }, 500);
  score = 0;
};

const incorrectAnswer = () => {
  shake();
  displayScore(currentScore, score);
  btn.disabled = false;
  pcChoice = -1;
};
