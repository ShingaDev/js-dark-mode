const body = document.querySelector("body");
const darkBtn = document.querySelector(".dark-container");
const darkIcon = document.querySelector(".fa-circle-half-stroke");

darkBtn.addEventListener("click", () => {
  darkBtn.classList.toggle("dark");
  if (darkBtn.classList.contains("dark")) {
    body.style = `background-color: #222831; color: #f0f0f0`;
    darkBtn.style.backgroundColor = "#f0f0f0";
    darkIcon.style.color = "#222831";
  } else {
    body.style = `background-color: #fdfdfd; color: black;`;
    darkBtn.style.backgroundColor = "#222831";
    darkIcon.style.color = "#f0f0f0";
  }
});