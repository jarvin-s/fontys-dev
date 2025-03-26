const showImage = document.getElementById("main");

showImage.addEventListener("click", (event) => {
  const img = document.createElement("img");
  img.src = "../images/hero-oreo.jpg";
  img.className = "w-60 h-auto max-w-xl rounded-lg";

  img.style.position = "absolute";
  img.style.left = `${event.clientX - img.width / 2}px`;
  img.style.top = `${event.clientY - img.height / 2}px`;

  document.body.appendChild(img);

  img.onload = () => {
    img.style.left = `${event.clientX - img.width / 2}px`;
    img.style.top = `${event.clientY - img.height / 2}px`;
  };
});
