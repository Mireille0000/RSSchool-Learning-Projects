import EntryPage from './entry-page';

export default function validateForm() {
  const renderEntryPage = new EntryPage();
  renderEntryPage.renderEntryPage();

  const validateInput = /^[A-Z]+/;
  const validateAlphabet = /[^A-z\\-]+/;

  const logInBtn = document.querySelector('.log-in-button') as HTMLButtonElement;
  const nameInput = Array.from(document.querySelectorAll('.entry-page-input')) as HTMLInputElement[];

  nameInput.map((input) => input.setAttribute('pattern', validateInput.source));

  const validationHintLength = document.querySelector('.length') as HTMLDivElement;
  const validationHintLetter = document.querySelector('.first-letter') as HTMLDivElement;
  const validateHintLanguage = document.querySelector('.alphabet') as HTMLDivElement;

  logInBtn.addEventListener('click', (el) => {
    if (validateInput.test(nameInput[0].value) && validateInput.test(nameInput[1].value)) {
      validationHintLetter.style.setProperty('color', 'rgb(199, 231, 157)');
    } else {
      validationHintLetter.style.setProperty('color', 'rgb(228, 22, 22)');
    }

    if (nameInput[0].value.length < 3 || nameInput[1].value.length < 4) {
      validationHintLength.style.setProperty('color', 'rgb(228, 22, 22)');
    } else {
      validationHintLength.style.setProperty('color', 'rgb(199, 231, 157)');
    }

    if (!validateAlphabet.test(nameInput[0].value) && !validateAlphabet.test(nameInput[1].value)) {
      validateHintLanguage.style.setProperty('color', 'rgb(199, 231, 157)');
    } else {
      validateHintLanguage.style.setProperty('color', 'rgb(228, 22, 22)');
    }

    el.preventDefault();
  });
}
