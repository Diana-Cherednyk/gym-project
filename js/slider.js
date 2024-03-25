
// Отримуємо посилання на елементи слайдера
const slides = document.querySelectorAll(".formats-item");
const prevBtn = document.querySelector(".carousel-button");
const nextBtn = document.querySelector(".carousel-button.next");

let currentSlide = 0;
const slidesPerPage = 3; // Кількість слайдів, що відображаються одночасно
const totalSlides = slides.length;

// Функція для показу слайдів
function showSlides() {
  // Ховаємо всі слайди
  slides.forEach((slide) => {
    slide.style.display = "none";
  });

  // Показуємо потрібні слайди
  let start = currentSlide;
  let end = start + slidesPerPage;
  if (end > totalSlides) {
    end = totalSlides;
    start = totalSlides - slidesPerPage;
  }
  for (let i = start; i < end; i++) {
    slides[i % totalSlides].style.display = "block";
  }
}

// Показуємо перші три слайди при завантаженні сторінки
showSlides();

// Обробники подій для кнопок слайдера
prevBtn.addEventListener("click", () => {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  showSlides();
});

nextBtn.addEventListener("click", () => {
  currentSlide = (currentSlide + 1) % totalSlides;
  showSlides();
});
