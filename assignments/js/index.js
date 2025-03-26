const showImage = document.getElementById("body");
const body = document.getElementById("body");
const colours = [
  "#FF5733",
  "#33FF57",
  "#3357FF",
  "#F3FF33",
  "#FF33F3",
  "#33FFF3",
  "#A233FF",
  "#FF8C33",
  "#33FFD4",
];
const catImages = [
  "../images/cats/oreo.jpg",
  "../images/cats/poema.jpg",
  "../images/cats/lily.jpg",
  "../images/cats/muffin.jpg",
  "../images/cats/ziggy.jpg",
];

body.addEventListener("click", () => {
  randomColourAnimationLoop();
});

const randomColourAnimationLoop = () => {
  const randomColour = colours[Math.floor(Math.random() * colours.length)];
  body.style.backgroundColor = randomColour;
  body.style.transition = "background-color 0.3s ease-in-out";
  setTimeout(randomColourAnimationLoop, 1000);
};

showImage.addEventListener("click", (event) => {
  const img = document.createElement("img");
  img.src = catImages[Math.floor(Math.random() * catImages.length)];
  img.className = "w-60 h-auto max-w-xl rounded-lg";

  img.style.position = "absolute";
  img.style.left = `${event.clientX - img.width / 2}px`;
  img.style.top = `${event.clientY - img.height / 2}px`;

  img.style.animation = "bounce 1.5s ease infinite";

  const style = document.createElement("style");
  style.id = "bounce-animation";
  style.textContent = `
      @keyframes bounce {
        0% { transform: translateY(0); }
        50% { transform: translateY(-40px); }
      }
    `;
  document.head.appendChild(style);

  document.body.appendChild(img);

  img.onload = () => {
    img.style.left = `${event.clientX - img.width / 2}px`;
    img.style.top = `${event.clientY - img.height / 2}px`;
    img.style.rotate = `${Math.random() * 360}deg`;
  };
});
