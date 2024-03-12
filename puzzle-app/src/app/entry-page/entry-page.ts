const pageWrapper = document.createElement('div');

export default class EntryPage {
  firstName: HTMLInputElement;

  lastName: HTMLInputElement;

  button: HTMLButtonElement;

  header: HTMLHeadingElement;

  text: HTMLParagraphElement;

  constructor() {
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
    const container = document.createElement('div') as HTMLElement;
    container.className = 'container';
    pageWrapper.append(this.header, this.text, container);
    container.append(this.firstName, this.lastName, this.button);
    this.firstName.placeholder = 'First name';
    this.lastName.placeholder = 'Last name';
    this.firstName.required = true;
    this.lastName.required = true;
  }
}
