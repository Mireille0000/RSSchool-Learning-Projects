const pageWrapper = document.createElement('div');

export class EntryPage {
  input: HTMLInputElement;
  button: HTMLButtonElement;
  header: HTMLHeadingElement;
  text: HTMLParagraphElement;

  constructor() {
    this.input = document.createElement('input') as HTMLInputElement;
    this.input.className = 'entry-page-input';
    this.input.type = 'required';

    this.header = document.createElement('h1');
    this.header.innerHTML = 'Puzzle (Learn English)';
    this.text = document.createElement('p');
    this.text.innerHTML =
      'Click on words. Collect phrases. Improve your English';

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
    container.append(this.input, this.input.cloneNode(true), this.button);
    const inputText: HTMLInputElement[] = Array.from(
      document.querySelectorAll('.entry-page-input'),
    );
    inputText[0].placeholder = 'First name';
    inputText[1].placeholder = 'Last name';
  }
}
