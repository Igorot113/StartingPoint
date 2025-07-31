document.addEventListener("DOMContentLoaded", function() {
  const carousel = document.querySelector(".carousel");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const cardWidth = 270;

  nextBtn.addEventListener("click", () => {
    carousel.scrollLeft += cardWidth;
  });

  prevBtn.addEventListener("click", () => {
    carousel.scrollLeft -= cardWidth;
  });
});