const display = document.querySelector("#display img");
const fsImages = document.querySelectorAll("#film-strip img");

// Add a 'click' listener to each 'fsImage'
fsImages.forEach((fsImage) => {
  fsImage.addEventListener("click", (event) => {
    display.src = event.target.src;
    display.alt = event.target.alt;
  });
});
