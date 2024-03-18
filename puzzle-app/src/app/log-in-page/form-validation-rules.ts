import LogInPage from './log-in-page.ts';
import saveInputInLocalStorage from '../local-storage/input-data.ts';
import StartPage from '../start-page/start-page.ts';
// to do the function as a method
export default function validateForm() {
  const renderEntryPage = new LogInPage();
  renderEntryPage.renderPage();
  const nameInput = Array.from(
    document.querySelectorAll('.entry-page-input'),
  ) as HTMLInputElement[];
  const form = document.querySelector('#entry-page-form') as HTMLFormElement;

  const validateInput = /^[A-Z]([a-z])+/;
  const validateAlphabet = /[^A-z\\-]+/;

  // nameInput.map((input) => input.setAttribute('pattern', validateInput.source));

  const validationHintLength = document.querySelector('.length') as HTMLDivElement;
  const validationHintLetter = document.querySelector('.first-letter') as HTMLDivElement;
  const validateHintLanguage = document.querySelector('.alphabet') as HTMLDivElement;

  form.addEventListener('submit', (el) => {
    const capCheckFirstInput = validateInput.test(nameInput[0].value);
    const capCheckSecInput = validateInput.test(nameInput[1].value);
    const alphabetCheckFirstInput = !validateAlphabet.test(nameInput[0].value);
    const alphabetCheckSecInput = !validateAlphabet.test(nameInput[1].value);
    const inputLengthFirst = nameInput[0].value.length < 3;
    const inputLengthSec = nameInput[1].value.length < 4;

    const colorRight = (validator: HTMLDivElement) =>
      validator.style.setProperty('color', 'rgb(199, 231, 157)');
    const colorWrong = (validator: HTMLDivElement) =>
      validator.style.setProperty('color', 'rgb(228, 22, 22)');

    if (capCheckFirstInput && capCheckSecInput) {
      colorRight(validationHintLetter);
    } else {
      colorWrong(validationHintLetter);
    }

    if (inputLengthFirst || inputLengthSec) {
      colorWrong(validationHintLength);
    } else {
      colorRight(validationHintLength);
    }

    if (alphabetCheckFirstInput && alphabetCheckSecInput) {
      colorRight(validateHintLanguage);
    } else {
      colorWrong(validateHintLanguage);
    }

    const nameValue = nameInput[0];
    const surnameValue = nameInput[1];
    if (
      capCheckFirstInput &&
      capCheckSecInput &&
      !inputLengthFirst &&
      !inputLengthSec &&
      alphabetCheckFirstInput &&
      alphabetCheckSecInput
    ) {
      saveInputInLocalStorage(nameValue, surnameValue);
      document.body.innerHTML = '';
      new StartPage().renderPage();
    }
    el.preventDefault();
  });
}
