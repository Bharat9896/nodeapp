// When DOM is loaded, build interactive divs
document.addEventListener("DOMContentLoaded", () => {
  const container = createContainer();
  document.body.appendChild(container);

  // Generate 5 divs
  for (let i = 0; i < 5; i++) {
    const div = createDynamicDiv(i + 1);
    container.appendChild(div);
  }
});

// Container setup
function createContainer() {
  const container = document.createElement("div");
  container.className =
    "flex flex-wrap gap-6 justify-center items-center min-h-screen bg-gray-100 p-10";
  return container;
}

// Individual div generator
function createDynamicDiv(index) {
  const main = document.createElement("div");
  main.className =
    "w-64 h-40 flex flex-col justify-center items-center rounded-xl shadow-lg cursor-pointer transition-all duration-300";

  // Apply random background
  main.style.backgroundColor = randomColor();

  // Random quote/message
  const quotes = [
    "Keep coding.",
    "Stay curious.",
    "Think logically.",
    "Build something new.",
    "Debug with patience.",
  ];

  main.innerHTML = `
    <h2 class="text-lg font-bold text-white mb-2">Div ${index}</h2>
    <p class="text-white text-sm">${quotes[Math.floor(Math.random() * quotes.length)]}</p>
  `;

  // Hover effect
  main.addEventListener("mouseenter", () => {
    main.style.transform = "scale(1.05)";
    main.style.boxShadow = "0 10px 20px rgba(0,0,0,0.2)";
  });

  main.addEventListener("mouseleave", () => {
    main.style.transform = "scale(1)";
    main.style.boxShadow = "0 4px 10px rgba(0,0,0,0.1)";
  });

  // Click toggles background color
  main.addEventListener("click", () => {
    main.style.backgroundColor = randomColor();
  });

  return main;
}

// Utility: random color generator
function randomColor() {
  const hue = Math.floor(Math.random() * 360);
  return `hsl(${hue}, 70%, 55%)`;
}
console.log("Git with node.js new-feature added");
console.log("new added ");