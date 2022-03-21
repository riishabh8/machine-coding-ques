/*
 * Creates star rating functionality
 * @param el DOM Element
 * @param count Number of stars
 * @param callback Returns selected star count to callback
 */
function Star(el, count, callback) {
  // write logic to create star rating utility.
  let active = -1;
  const parent = document.querySelector(el);
  for (let i = 0; i < count; i++) {
    const child = document.createElement("i");
    child.classList.add("fa");
    child.classList.add("fa-star-o");
    child.dataset.num = i;
    parent.appendChild(child);
  }

  parent.addEventListener("mouseover", onMouseOver);
  parent.addEventListener("click", onClick);
  parent.addEventListener("mouseleave", onMouseLeave);

  function onMouseOver(e) {
    const ratingVal = e.target.dataset.num;
    console.log(ratingVal);
    if (!ratingVal) {
      return;
    }
    fill(ratingVal);
  }

  function fill(ratingVal) {
    for (let i = 0; i < count; i++) {
      if (i <= ratingVal) {
        parent.children[i].classList.add("fa-star");
      } else {
        parent.children[i].classList.remove("fa-star");
      }
    }
  }

  function onMouseLeave(e) {
    fill(active);
  }

  function onClick(e) {
    active = e.target.dataset.num;
    fill(active);
    printStar(Number(active) + 1, count);
  }
}

const printStar = (number, count) => {
  const msg = document.querySelector("#display-star-value");
  msg.innerHTML += `<p>You gave ${number} stars out of ${count}</p>`;
};

Star("#star", 10, printStar);
