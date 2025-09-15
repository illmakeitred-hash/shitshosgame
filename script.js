document.querySelectorAll(".grid img").forEach(img => {
  img.addEventListener("click", () => {
    img.classList.toggle("down"); // toggle the down effect
  });
});
