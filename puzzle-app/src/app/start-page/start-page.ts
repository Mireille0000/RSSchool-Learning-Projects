// Title
// Info abt the app
// Settings?
// Start button
// Log out button
import Page from '../templates/page';
import puzzleIncon from '../../images/puzzle1.svg';
import settingsIcon from '../../images/settings.svg';

export default class StartPage extends Page {
  title: HTMLHeadingElement;

  text: HTMLParagraphElement;

  // settings: HTMLUListElement;
  start: HTMLButtonElement;

  logOut: HTMLButtonElement;

  constructor() {
    super();
    // this.image = document.querySelector('div') as HTMLDivElement;
    // this.image.className = 'puzzle-image';
    this.title = document.createElement('h1');
    this.title.innerHTML = 'Puzzle (Learn English)';

    this.text = document.createElement('p');
    this.text.innerHTML = 'Click on words. Collect phrases. Improve your English';

    // this.settings = document.createElement('ul');

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
    buttonsContainer.className = 'buttons-container';

    document.body.append(this.pageWrapper);
    const wrapper = document.querySelector('.page-wrapper') as HTMLDivElement;
    wrapper.append(this.header, this.contentWrapper);
    const content = document.querySelector('.page-content') as HTMLDivElement;
    const header = document.querySelector('header') as HTMLElement;
    content.append(this.title, container);
    const icon = new Image();
    // icon.src =  require('../../images/puzzle1.svg');
    icon.src = puzzleIncon;
    icon.alt = 'puzzle';

    const settings = new Image();
    settings.src = settingsIcon;
    // settings.src = require('../../images/settings.svg');
    settings.alt = 'settings';
    settings.className = 'settings';

    header.append(icon, settings);

    container.append(this.text, buttonsForm);
    buttonsForm.append(buttonsContainer);
    buttonsContainer.append(this.start, this.logOut);
    this.start.className = 'start-button buttons';
    this.logOut.className = 'log-out-button buttons';
    return this.pageWrapper;
  }

  logIn() {
    // clear local storage and return on log in page
  }
}

export const startPage = new StartPage();
