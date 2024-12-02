const tabs = document.querySelectorAll('.faq__tab');

function showTab(tabId) {
  // Скрываем все табы
  const allContents = document.querySelectorAll('.accordion');
  allContents.forEach((content) => {
    content.style.display = 'none'; // Скрываем все аккордеоны
  });

  // Показываем выбранный таб
  const activeTab = document.getElementById(`content-${tabId}`);
  if (activeTab) {
    activeTab.style.display = 'block'; // Показываем выбранный таб
  }

  // Убираем активный класс у всех табов и добавляем к выбранному
  tabs.forEach((tab) => {
    tab.classList.remove('active');
  });
  const activeTabElement = document.getElementById(`tab-${tabId}`);
  if (activeTabElement) {
    activeTabElement.classList.add('active');
  }

  // Закрываем все аккордеоны в текущем табе
  const accordions = activeTab.querySelectorAll('.accordion__item');
  accordions.forEach((accordion) => {
    const extraContent = accordion.querySelector('.accordion__extra');
    extraContent.style.display = 'none'; // Скрываем описание
    extraContent.style.height = '0'; // Убираем высоту для анимации
  });
}

function toggleAccordion(accordion, button) {
  const extraContent = accordion.querySelector('.accordion__extra');
  const isOpen = extraContent.style.display === 'block';

  if (isOpen) {
    extraContent.style.height = '0'; // Закрываем аккордеон
    setTimeout(() => {
      extraContent.style.display = 'none';
    }, 300); // Задержка на время анимации
    button.classList.remove('active');
  } else {
    extraContent.style.display = 'block'; // Покрываем аккордеон
    const height = `${extraContent.scrollHeight}px`;
    extraContent.style.height = '0';
    setTimeout(() => {
      extraContent.style.height = height; // Устанавливаем высоту для анимации
    }, 10);
    button.classList.add('active');
  }
}

function initFAQ() {
  showTab('center'); // Устанавливаем начальное состояние

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const tabId = tab.id.split('-')[1]; // Получаем id таба
      showTab(tabId); // Вызываем функцию showTab
    });
  });

  // Инициализация аккордеонов
  document.querySelectorAll('.accordion__item').forEach((accordion) => {
    const button = accordion.querySelector('.accordion__button');
    button.addEventListener('click', () => {
      toggleAccordion(accordion, button); // Вызываем функцию toggleAccordion
    });
  });
}

// Запускаем инициализацию при загрузке страницы
document.addEventListener('DOMContentLoaded', initFAQ);
