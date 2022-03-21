let count = 0;
const countVal = document.getElementById("countVal");

const fill = () => {
  const bar = document.querySelector(".progress-bar");
  bar.classList.add("fill-bar");
  setTimeout(() => {
    bar.classList.remove("fill-bar");
  }, 2000);
};

function increaseCount() {
  count++;
  countVal.innerText = count;
}

function decreaseCount() {
  count--;
  countVal.innerText = count;
}

setInterval(() => {
  if (count) {
    fill();
    decreaseCount();
  }
  console.log("Called");
}, 2050);
