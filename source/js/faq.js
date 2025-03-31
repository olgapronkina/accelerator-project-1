const tabLinks = document.querySelectorAll('.tab__button');
const tabContents = document.querySelectorAll('.accordion__list');
const items = document.querySelectorAll('.accordion__list li');

tabLinks.forEach((link) => {
  link.addEventListener('click', () => {
    tabLinks.forEach((link) => link.classList.remove('active'));
    link.classList.add('active');

    tabContents.forEach((content) => content.classList.remove('active'));
    const targetTab = document.getElementById(link.dataset.tab);
    targetTab.classList.add('active');
  });
});

items.forEach((item) => {
  const header = item.querySelector('h4');
  const button = item.querySelector('.accordion__button');
  header.addEventListener('click', () => {
    item.classList.toggle('active');
    button.classList.toggle('accordion__button--close');

    if (button.classList.contains('accordion__button--close')) {
      button.querySelector('span').textContent =
        'Открыть ответ на данный вопрос';
    } else {
      button.querySelector('span').textContent =
        'Закрыть ответ на данный вопрос';
    }
  });
});
