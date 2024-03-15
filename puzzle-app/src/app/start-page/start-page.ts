// Title
// Info abt the app
// Settings?
// Start button
// Log out button
import Page from '../templates/page';

export default class StartPage extends Page {
  title: HTMLHeadingElement;
  text: HTMLParagraphElement;
  settings: HTMLUListElement;
  start: HTMLButtonElement;
  logOut: HTMLButtonElement;

  constructor() {
    super();
    this.title = document.createElement('h1');
    this.title.innerHTML = 'Puzzle (Learn English)';

    this.text = document.createElement('p');
    this.title.innerHTML = 'Click on words. Collect phrases. Improve your English';

    this.settings = document.createElement('ul');

    this.start = document.createElement('button');
    this.start.innerHTML = 'Start';

    this.logOut = document.createElement('button');
    this.logOut.innerHTML = 'Log out';
  }

  renderPage() {
    const container = document.createElement('div') as HTMLElement;
    container.className = 'container';

    const buttonsForm = document.createElement('form');
    const buttonsContainer = document.createElement('div');

    document.body.append(this.pageWrapper);
    const wrapper = document.querySelector('.page-wrapper') as HTMLDivElement;
    wrapper.append(this.title, this.settings, container);

    container.append(this.text, this.settings, buttonsForm);
    buttonsForm.append(buttonsContainer);
    buttonsContainer.append(this.start, this.logOut);
    return this.pageWrapper;
  }
}

export const startPage = new StartPage();
