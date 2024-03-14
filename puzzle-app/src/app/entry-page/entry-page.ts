const pageWrapper = document.createElement('div');

export default class EntryPage {
  header: HTMLHeadingElement;

  text: HTMLParagraphElement;

  public form: HTMLFormElement;

  firstName: HTMLInputElement;

  lastName: HTMLInputElement;

  button: HTMLButtonElement;

  constructor() {
    this.form = document.createElement('form') as HTMLFormElement;
    this.form.action = '/';
    this.form.method = 'GET';
    this.form.id = 'entry-page-form';

    this.firstName = document.createElement('input') as HTMLInputElement;
    this.firstName.className = 'entry-page-input';
    this.firstName.type = 'text';

    this.lastName = document.createElement('input') as HTMLInputElement;
    this.lastName.className = 'entry-page-input';
    this.lastName.type = 'text';
    this.firstName = document.createElement('input') as HTMLInputElement;
    this.firstName.className = 'entry-page-input';
    this.firstName.type = 'text';

    this.lastName = document.createElement('input') as HTMLInputElement;
    this.lastName.className = 'entry-page-input';
    this.lastName.type = 'text';

    this.header = document.createElement('h1');
    this.header.innerHTML = 'Puzzle (Learn English)';

    this.text = document.createElement('p');
    this.text.innerHTML = 'Click on words. Collect phrases. Improve your English';

    this.button = document.createElement('button') as HTMLButtonElement;
    this.button.className = 'log-in-button';
    this.button.innerHTML = 'Log In';
    this.button.type = 'submit';
  }

  renderEntryPage() {
    pageWrapper.className = 'page-wrapper';
    document.body.append(pageWrapper);
    pageWrapper.append(this.header, this.text, this.form);

    const container = document.createElement('div') as HTMLElement;
    container.className = 'container';

    const validLen = document.createElement('div');
    validLen.innerHTML = 'Minimum characters number: first name - 3, last name - 4';
    validLen.className = 'validation-hint length';

    const validCap = document.createElement('div');
    validCap.innerHTML = 'The first letter of each field should be in upper case';
    validCap.className = 'validation-hint first-letter';

    const validLang = document.createElement('div');
    validLang.innerHTML = 'Characters of latin alphabet';
    validLang.className = 'validation-hint alphabet';

    this.firstName.placeholder = 'First name';
    this.lastName.placeholder = 'Last name';
    this.firstName.required = true;
    this.lastName.required = true;
    this.form.append(container);
    container.append(this.firstName, this.lastName, validLen, validCap, validLang, this.button);
  }
}
