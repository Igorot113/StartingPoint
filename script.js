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

document.addEventListener("DOMContentLoaded", function() {
  const carouselParceiros = document.getElementById("parceirosCarousel");
  const prevBtnParceiros = document.getElementById("prevBtnParceiros");
  const nextBtnParceiros = document.getElementById("nextBtnParceiros");
  const cardWidthParceiros = 270;
  
  nextBtnParceiros.addEventListener("click", () => {
    carouselParceiros.scrollLeft += cardWidthParceiros;
  });

  prevBtnParceiros.addEventListener("click", () => {
    carouselParceiros.scrollLeft -= cardWidthParceiros;
  });
});