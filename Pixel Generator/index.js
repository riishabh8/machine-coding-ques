max = 19;
let activeColor = "white";
let mousePress = false;
function createBoard() {
  const parent = document.querySelector("#play-area");
  parent.addEventListener("mousedown", () => {
    console.log("down");
    mousePress = true;
  });
  parent.addEventListener("mouseup", () => {
    console.log("up");
    mousePress = false;
  });
  parent.addEventListener("mouseover", (event) => {
    if (mousePress) {
      event.target.style.backgroundColor = activeColor;
    }
  });
  parent.addEventListener("click", (event) => {
    if (mousePress) {
      mousePress = false;
    }
    mousePress = true;
  });

  for (let i = 0; i < max; i++) {
    for (let j = 0; j < max; j++) {
      const block = document.createElement("div");
      block.classList.add("block");

      parent.appendChild(block);
    }
    parent.innerHTML += "<br>";
  }
}
const getRandomColor = () => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);

  return `#${randomColor}`;
};

const addColorPallete = () => {
  const parent = document.querySelector("#color-area");
  for (let j = 0; j < max; j++) {
    const block = document.createElement("div");
    block.classList.add("block");
    block.style.backgroundColor = getRandomColor();
    parent.appendChild(block);
  }

  parent.addEventListener("click", (event) => {
    console.log((activeColor = event.target.style.backgroundColor));
  });
};

createBoard();
addColorPallete();
