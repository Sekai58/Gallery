const current = document.querySelector("#current");
const images = document.querySelectorAll(".images img");
const opacity = 0.6;
images[0].style.opacity = opacity;
images.forEach((img) => img.addEventListener("click", imagClick));

function imagClick(e) {
  current.src = e.target.src;

  current.classList.add("fadeIn");
  setTimeout(() => current.classList.remove("fadeIn"), 500);
  e.target.style.opacity = opacity;
}
