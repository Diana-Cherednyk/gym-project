// Отримуємо посилання на форму та кнопку відправки
const form = document.querySelector('form[name="contact-form"]');
const submitBtn = form.querySelector(".form-button");

// Функція для валідації форми
function validateForm() {
  const nameInput = form.querySelector("#user-name");
  const telInput = form.querySelector("#user-tel");
  const emailInput = form.querySelector("#user-email");

  // Перевіряємо, чи всі поля заповнені
  if (
    nameInput.value.trim() === "" ||
    telInput.value.trim() === "" ||
    emailInput.value.trim() === ""
  ) {
    alert("Будь ласка, заповніть всі поля");
    return false;
  }

  // Перевіряємо валідність email
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  if (!emailRegex.test(emailInput.value)) {
    alert("Некоректний email");
    return false;
  }

  return true;
}

// Додаємо обробник події на відправку форми
form.addEventListener("submit", (event) => {
  event.preventDefault(); // Зупиняємо стандартну поведінку форми

  if (validateForm()) {
    // Якщо форма валідна, можна відправити дані на сервер
    // або виконати будь-які інші дії
   alert("Форма відправлена успішно");
    form.reset(); // Очищаємо поля форми
  }
});
