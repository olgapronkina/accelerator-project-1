const form = document.querySelector('.form__fill');
const inputList = Array.from(document.querySelectorAll('.form__input'));
const formErrorElement = document.querySelector('.form__button-error');
const buttonElement = document.querySelector('.form__button');

startValidation();

function startValidation() {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    toggleButton();
    if (hasInvalidInput()) {
      formError();
      inputList.forEach((inputElement) => {
        checkInputValidity(inputElement);
        toggleInputError(inputElement);
      });
    }
    form.submit();
  });
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      checkInputValidity(inputElement);
      toggleButton();
    });
    inputElement.addEventListener('blur', () => {
      toggleInputError(inputElement);
    });
    inputElement.addEventListener('focus', () => {
      toggleErrorSpan(inputElement);
    });
  });
}

function checkInputValidity(inputElement) {
  if (inputElement.validity.patternMismatch) {
    inputElement.setCustomValidity(inputElement.dataset.errorMessage);
  } else {
    inputElement.setCustomValidity(checkLengthMismatch(inputElement));
  }
}

function checkLengthMismatch(inputElement) {
  if (inputElement.type !== 'text') {
    return '';
  }

  return '';
}

function hasInvalidInput() {
  return inputList.some((inputElement) => !inputElement.validity.valid);
}

function toggleErrorSpan(inputElement, errorMessage) {
  const errorElement = document.querySelector(`.${inputElement.id}-error`);
  if (errorMessage) {
    inputElement.classList.add('form__type-input-error');
    errorElement.textContent = errorMessage;
    errorElement.classList.add('form__error-active');
  } else {
    inputElement.classList.remove('form__type-input-error');
    errorElement.textContent = '';
    errorElement.classList.remove('form__error-active');
  }
}

function toggleButton() {
  if (hasInvalidInput()) {
    buttonElement.classList.add('form__button-inactive');
    buttonElement.setAttribute('aria-disabled', 'true');
  } else {
    buttonElement.classList.remove('form__button-inactive');
    buttonElement.setAttribute('aria-disabled', 'false');
  }
}

function formError() {
  const errorMessage = 'Заполните все поля для отправки формы.';
  formErrorElement.textContent = errorMessage;
}

function toggleInputError(inputElement) {
  if (!inputElement.validity.valid) {
    toggleErrorSpan(inputElement, inputElement.validationMessage);
  } else {
    toggleErrorSpan(inputElement);
  }
}

startValidation();
