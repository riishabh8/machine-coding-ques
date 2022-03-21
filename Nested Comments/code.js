const add = () => {
    const liTxt = document.querySelector("#li-txt");
    const listItems = document.querySelector("#list-items");
    const listItem = document.createElement("li");
    const button = document.createElement("button");
    listItem.innerText = liTxt.value;
    listItem.innerHTML += "<br><br>";
    button.innerText = "Reply";
    button.classList.add("reply");
    listItem.appendChild(button);
    listItem.innerHTML += "<br><br>";
    liTxt.value ? listItems.appendChild(listItem) : (liTxt.value = "");
    liTxt.value = "";
    call();
  };
  
  call = () => {
    const reply = document.querySelectorAll(".reply");
    for (let i = 0; i < reply.length; i++) {
      reply[i].addEventListener("click", (event) => {
        console.log(event.target.parentElement);
      });
    }
  };
  