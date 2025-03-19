const showImage = document.getElementById("main");

showImage.addEventListener("click", () => {
  const img = document.createElement("img");
  img.src = "../images/hero-oreo.jpg";
  img.className = "w-full h-auto max-w-xl rounded-lg";
  const existingImg = document.querySelector("#main img");
  if (existingImg) {
    existingImg.remove();
  } else {
    showImage.appendChild(img);
  }
});
