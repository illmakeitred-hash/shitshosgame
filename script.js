document.querySelectorAll(".card img").forEach(img => {
  img.addEventListener("click", () => {
    img.classList.toggle("down");
  });
});

document.querySelectorAll(".back-btn").forEach(btn => {
  btn.addEventListener("click", (e) => {
    e.stopPropagation(); // prevent triggering img click
    btn.previousElementSibling.classList.remove("down");
  });
});
    const button = document.querySelector('.click-me');
    const overlay = document.getElementById('overlay');

    button.addEventListener('click', () => {
      overlay.classList.add('show');
    });

    // optional: click the overlay to hide it again
    overlay.addEventListener('click', () => {
      overlay.classList.remove('show');
    });
