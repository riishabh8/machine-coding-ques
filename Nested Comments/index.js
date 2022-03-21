function takeInput(parentTag) {
  let addOlCheck = false;
  if (parentTag == "LI" || parentTag == "#list-items") {
    addOlCheck = true;
  } else if(parentTag=="OL") {
    addOlCheck = false;
  }
  let parentEle = document.querySelector(parentTag);
  const input = document.createElement("input");
  const submit = document.createElement("button");
  input.setAttribute("type", "text");
  submit.innerText = "Submit";
  parentEle.appendChild(input);
  parentEle.appendChild(submit);
  submit.addEventListener("click", () => {
    input.value
      ? onSubmit(parentEle, input, addOlCheck)
      : console.log("Do Provide Some Input");
    if (!(parentTag == "#list-items")) {
      parentEle.removeChild(input);
      parentEle.removeChild(submit);
    }
  });
}

function onSubmit(parentEle, input, addOlCheck) {
  if (addOlCheck) {
    addOl(parentEle, input);
  } else {
    addLi(parentEle, input);
  }
}

function addOl(parentEle, input) {
  console.log("ol");
  const listParent = document.createElement("ol");
  const listItem = document.createElement("li");
  const reply = document.createElement("button");
  listItem.innerText = input.value;
  listItem.innerHTML += "<br><br>";
  reply.innerText = "Reply";
  reply.setAttribute("onclick", "onReply(event)");
  listItem.appendChild(reply);
  listItem.innerHTML += "<br><br>";
  listParent.appendChild(listItem);
  parentEle.appendChild(listParent);
  input.value = "";
}

function addLi(parentEle, input) {
  console.log("li");
  const listItem = document.createElement("li");
  const reply = document.createElement("button");
  listItem.innerText = input.value;
  listItem.innerHTML += "<br><br>";
  reply.innerText = "Reply";
  reply.setAttribute("onclick", "onReply(event)");
  listItem.appendChild(reply);
  listItem.innerHTML += "<br><br>";
  parentEle.appendChild(listItem);
  input.value = "";
}

function onReply(ev) {
  // takeInput(ev.parentElement)
  // console.log(ev.target.parentElement.tagName);
  takeInput(ev.target.parentElement.tagName);
}

takeInput("#list-items");
