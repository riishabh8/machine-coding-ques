const createBoard = (n = 8) => {
  const rows = n;
  const cols = n;
  const board = document.querySelector(".container");
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      const block = document.createElement("div");
      block.dataset.row = i;
      block.dataset.col = j;
      if (i % 2 == 0) {
        if (j % 2 != 0) {
          block.setAttribute("class", `black val${i}${j}`);
        } else {
          block.setAttribute("class", `white val${i}${j}`);
        }
      } else {
        if (j % 2 != 0) {
          block.setAttribute("class", `white val${i}${j}`);
        } else block.setAttribute("class", `black val${i}${j}`);
      }
      block.setAttribute("onclick", "clicked(event)");
      board.appendChild(block);
    }
    board.innerHTML += "<br>";
  }
};


function daigonal(cellX, cellY, n = 8) {
  let forward = [],
    backward = [];
  for (y = 0; y < n; y++) {
    let x = cellY - (cellX - y);
    if (x >= 0 && x < n) backward.push([y, x]);
    x = cellX + (cellY - y);
    if (x >= 0 && x < n) {
      forward.push([y, x]);
    }
  }

  return [forward, backward];
}
const clicked = (event) => {
  const cellX = Number(event.target.dataset.row),
    cellY = Number(event.target.dataset.col);
  console.log(cellX, cellY);
  coOrdinates = daigonal(cellX, cellY);
  coOrdinates.forEach((val) => {
    changeBgRed(val);
  });
  setTimeout(changePrev, 3000);
};

const changePrev = (n = 8) => {
  //Problem doesn't change if values are repatedly called;
  // coOrdinates.forEach((val) => {
  //   const selClass = val.join('');
  //   const block = document.querySelector(`.val${selClass}`);
  //   block.classList.remove("red");
  // });
  for (i = 0; i < n; i++) {
    for (j = 0; j < n; j++) {
      const selClass = String(i) + String(j);
      const block = document.querySelector(`.val${selClass}`);
      block.classList.remove("red");
    }
  }
};

const changeBgRed = (coOrdinates) => {
  coOrdinates.forEach((val) => {
    const selClass = val.join("");
    const block = document.querySelector(`.val${selClass}`);
    block.classList.add("red");
  });
};

createBoard();
