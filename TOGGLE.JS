let modeBtn = document.querySelector("#mode");
let currMode = "light";

let body = document.querySelector("body");

modeBtn.addEventListener("click", (e) => {
  if (currMode === "light") {
    currMode = "dark";
    body.classList.remove("light");
    body.classList.add("dark");
  } else {
    currMode = "light";
    body.classList.remove("dark");
    body.classList.add("light");
  }
  console.log(currMode);
});
