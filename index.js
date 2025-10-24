// Create and append a styled div to the page
document.addEventListener("DOMContentLoaded", () => {
  const mainDiv = createMainDiv();
  document.body.appendChild(mainDiv);
});

function createMainDiv() {
  const main = document.createElement("div");
  main.className = "w-80 h-40 bg-blue-500 text-white flex items-center justify-center rounded-lg shadow-lg";
  main.textContent = "This is the Main Div";
  return main;
}
