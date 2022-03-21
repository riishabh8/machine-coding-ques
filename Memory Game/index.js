let actual;
let user;
let score = 0;

function createBlocks(num) {
  const parent = document.getElementById("play-area");
  for (let i = 0; i < num; i++) {
    const block = document.createElement("span");
    block.setAttribute("class", `block ${i}`);
    // block.setAttribute("onclick", " check(event)");
    parent.appendChild(block);
  }
}




function check(event) {
  console.log(event.target.classList[1]);
  user = event.target.classList[1];
}

const play = () => {
  actual = getRandomInt(12);
  const activeBlock = document.getElementsByClassName(actual);
  
  console.log(user)
  console.log(actual)  
  if (actual === user) {
    const userScore = document.getElementById("score");
    userScore.innerText = score++;
  } else {
    setInterval(() => {
        userBlock[0].style.backgroundColor = "red";
      const userBlock = document.getElementsByClassName(user);
    }, 200);
  }
};

createBlocks(12);
