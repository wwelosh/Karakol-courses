// // Пример: Сообщение при нажатии на кнопку
// document.querySelectorAll('.btn').forEach((button) => {
//     button.addEventListener('click', () => {
//       alert('Скоро эта функция будет доступна!');
//     });
//   });
  

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });


  // Данные языков
const languages = {
  Английский: 'Английский — международный язык, используемый в бизнесе, путешествиях и образовании. Изучение английского открывает множество возможностей!',
  Корейский: 'Корейский язык — официальный язык Южной и Северной Кореи. Он станет полезным, если вы интересуетесь культурой K-pop или планируете путешествия в Корею.',
  Турецкий: 'Турецкий язык — богатая история и культура. Знание турецкого поможет путешествовать и общаться в Турции.',
  Немецкий: 'Немецкий язык — один из ключевых языков Европы. Это язык науки, технологий и искусства.',
};

// Функция для показа модального окна с языками
function showLanguages() {
  const languageList = document.getElementById('languageList');
  languageList.innerHTML = ''; // Очищаем список перед добавлением

  // Добавляем языки в список
  for (const language in languages) {
    const li = document.createElement('li');
    li.textContent = language;
    li.style.cursor = 'pointer';
    li.onclick = () => showLanguageInfo(language); // Добавляем обработчик клика
    languageList.appendChild(li);
  }

  // Показываем модальное окно
  document.getElementById('languageModal').style.display = 'block';
}

// Функция для показа информации о выбранном языке
function showLanguageInfo(language) {
  const infoContent = document.getElementById('infoContent');
  infoContent.innerHTML = `<h3>${language}</h3><p>${languages[language]}</p>`;
  
  // Закрываем окно с языками
  closeModal();

  // Показываем окно с информацией
  document.getElementById('infoModal').style.display = 'block';
}

// Функция для закрытия окна с языками
function closeModal() {
  document.getElementById('languageModal').style.display = 'none';
}

// Функция для закрытия окна с информацией
function closeInfoModal() {
  document.getElementById('infoModal').style.display = 'none';
}

  