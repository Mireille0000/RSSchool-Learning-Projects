import Page from '../templates/page.ts';

export default class AuthenticationPage extends Page {
  formContainer: HTMLDivElement;

  form: HTMLFormElement;

  nameDiv: HTMLDivElement;

  inputName: HTMLInputElement;

  passwordDiv: HTMLDivElement;

  inputPassword: HTMLInputElement;

  submitButton: HTMLButtonElement;

  infoButton: HTMLButtonElement;

  constructor() {
    super();
    this.formContainer = document.createElement('div');
    this.form = document.createElement('form');
    this.nameDiv = document.createElement('div');
    this.nameDiv.className = 'form-input';
    this.inputName = document.createElement('input');
    this.passwordDiv = document.createElement('div');
    this.passwordDiv.className = 'form-input';
    this.inputPassword = document.createElement('input');
    this.submitButton = document.createElement('button');
    this.infoButton = document.createElement('button');
  }

  renderAuthPage() {
    // page
    document.body.append(this.pageWrapper);
    const pageTemplate = document.querySelector('.container');
    pageTemplate.append(this.header, this.main);

    // header
    this.addElementsToHeader(this.title);
    this.title.innerHTML = 'Fun Chat Authorisation';

    // main
    this.addElementsToMain(this.formContainer);
    this.formContainer.className = 'form-container';
    this.formContainer.append(this.form, this.submitButton, this.infoButton);
    this.submitButton.className = 'submit-button';
    this.submitButton.innerHTML = 'Submit';
    this.infoButton.className = 'info-button';
    this.infoButton.innerHTML = 'Info';
    // main-form
    this.form.append(this.nameDiv, this.passwordDiv);
    this.nameDiv.append(this.inputName);
    this.inputName.type = 'text';
    this.inputName.placeholder = 'Name';
    this.passwordDiv.append(this.inputPassword);
    this.inputPassword.type = 'password';
    this.inputPassword.placeholder = 'Password';

    // footer
  }
}
