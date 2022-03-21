function onSubmit(input, submit) {
  let txt = "";
  submit.addEventListener("click", () => {
    txt = input.value;
    input.value = "";
    console.log(txt);
  });
  console.log(txt);

  return txt;
}
