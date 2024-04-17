import Page from '../templates/page.ts';

export default class AuthenticationPage extends Page {
  // page - wrapper, header/main/footer, wrappers for each part of the main page
  // form, inputs with placeholder or with lable, two buttons
  formContainer: HTMLDivElement;

  form: HTMLFormElement;

  nameDiv: HTMLDivElement;

  inputName: HTMLInputElement;

  passwordDiv: HTMLDivElement;

  inputPassword: HTMLInputElement;

  submitButton: HTMLButtonElement;

  constructor() {
    super();
    this.formContainer = document.createElement('div');
    this.form = document.createElement('form');
    this.nameDiv = document.createElement('div');
    this.inputName = document.createElement('input');
    this.passwordDiv = document.createElement('div');
    this.inputPassword = document.createElement('input');
    this.submitButton = document.createElement('button');
  }

  renderAuthPage() {
    // page
    document.body.append(this.pageWrapper);
    const pageTemplate = document.querySelector('.container');
    pageTemplate.append(this.header, this.main, this.footer);

    // header
    this.addElementsToHeader(this.title);
    this.title.innerHTML = 'Fun Chat';

    // main
    this.addElementsToMain(this.formContainer);
    this.formContainer.append(this.form, this.submitButton);
    this.submitButton.innerHTML = 'Submit';
    // main-form
    this.form.append(this.nameDiv, this.passwordDiv);
    this.nameDiv.append(this.inputName);
    this.passwordDiv.append(this.inputPassword);

    // footer
  }
}
