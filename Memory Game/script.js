function createBlocks(num) {
  const parent = document.getElementById("play-area");
  for (let i = 0; i < num; i++) {
    const block = document.createElement("span");
    block.setAttribute("class", `block ${i}`);
    parent.appendChild(block);
  }
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

let score = 0;
let highScore = 0;
let continuePlay = true;
let time = 0;

function blink(actual, color) {
  const blinkBlock = document.getElementsByClassName(actual);
  blinkBlock[0].style.backgroundColor = color;
  setTimeout(() => {
    blinkBlock[0].style.backgroundColor = "#ccc";
  }, 200);
}

function shake() {
  const shakeBlock = document.getElementById("play-area");
  shakeBlock.classList.add("shake");
  setTimeout(() => {
    shakeBlock.classList.remove("shake");
  }, 200);
}

function checkInput(user, actual, score) {
  console.log(user, actual);
  if (user == actual) {
    blink(user, "#48DF49");
    updateScore();
  } else if (user != actual) {
    blink(user, "red");
    console.log("Red");
    resetScore();
  }
}

function setTimer() {
  const timeLeft = document.getElementById("timeLeft");
  time = 5;
  timeLeft.innerText = time;
}

function updateTimer() {
  if (time) {
    const timeLeft = document.getElementById("timeLeft");
    time--;
    timeLeft.innerText = time;
  } else {
    resetScore();
  }
}

function updateScore() {
  console.log("update");
  score += 1;
  const currentScore = document.getElementById("currentScore");
  currentScore.innerText = score;
}

function resetScore() {
  console.log("reset");
  score = 0;
  continuePlay = false;
  const currentScore = document.getElementById("currentScore");
  currentScore.innerText = score;
}

function play() {
  let maxInt = 12;
  let actual = getRandomInt(maxInt);
  blink(actual, "#266FF1");
  const playArea = document.getElementById("play-area");
  playArea.addEventListener("click", (event) => {
    let user = event.target.classList[1];
    checkInput(user, actual, score);
  });
}

setInterval(() => {
  if (continuePlay) {
    play();
  }
}, 6000);

createBlocks(12);
