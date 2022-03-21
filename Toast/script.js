const show = () => {
  const snackbar = document.querySelector("#snackbar");
  snackbar.classList.add("show");
  setInterval(() => {
  snackbar.classList.remove("show");
  }, 5000);
};
