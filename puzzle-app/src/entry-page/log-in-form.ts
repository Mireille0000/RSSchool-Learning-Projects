export class LogInForm {
  input: HTMLInputElement;
  button: HTMLButtonElement;

  constructor() {
    this.input = document.createElement('input') as HTMLInputElement;
    this.input.className = 'entry-page-input';

    this.button = document.createElement('button') as HTMLButtonElement;
    this.button.className = 'log-in-button';
    this.button.innerHTML = 'Log In';
  }

  renderEntryPage() {
    const container = document.createElement('div') as HTMLElement;
    container.className = 'container';
    document.body.append(container);
    container.append(this.input, this.input.cloneNode(true), this.button);
  }
}
