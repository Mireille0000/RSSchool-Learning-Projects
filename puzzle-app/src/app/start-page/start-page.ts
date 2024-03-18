import Page from '../templates/page.ts';
import validateForm from '../log-in-page/form-validation-rules.ts';
import MainAppPage from '../main-page/main-app-page.ts';
import { fetchFromLocalStorage } from '../local-storage/input-data.ts';
import puzzleIncon from '../../images/puzzle1.svg';
import settingsIcon from '../../images/settings.svg';

export default class StartPage extends Page {
  title: HTMLHeadingElement;

  text: HTMLParagraphElement;

  start: HTMLButtonElement;

  logOut: HTMLButtonElement;

  constructor() {
    super();

    this.title = document.createElement('h1');
    this.title.innerHTML = 'Puzzle (Learn English)';

    this.text = document.createElement('p');
    this.text.innerHTML = 'Click on words. Collect phrases. Improve your English';

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

    const greeting = document.createElement('div') as HTMLDivElement;
    greeting.className = 'greeting-message';
    greeting.innerHTML = fetchFromLocalStorage('userInfo');

    document.body.append(this.pageWrapper);
    const wrapper = document.querySelector('.page-wrapper') as HTMLDivElement;
    wrapper.append(this.header, this.contentWrapper);

    const content = document.querySelector('.page-content') as HTMLDivElement;
    const header = document.querySelector('header') as HTMLElement;
    content.append(this.title, this.text, container);

    const icon = new Image();
    icon.src = puzzleIncon;
    icon.alt = 'puzzle';

    const settings = new Image();
    settings.src = settingsIcon;
    settings.alt = 'settings';
    settings.className = 'settings';

    header.append(icon, settings);

    container.append(greeting, buttonsForm);
    buttonsForm.append(buttonsContainer);
    buttonsContainer.append(this.start, this.logOut);
    this.start.className = 'start-button buttons';
    this.logOut.className = 'log-out-button buttons';

    const logOutButton = document.querySelector('.log-out-button') as HTMLButtonElement;
    logOutButton.addEventListener('click', (e) => {
      e.preventDefault();
      localStorage.clear();
      greeting.innerHTML = '';
      document.body.innerHTML = '';
      validateForm();
    });

    const startButton = document.querySelector('.start-button') as HTMLButtonElement;
    startButton.addEventListener('click', (e) => {
      e.preventDefault();
      console.log('Not yet');
      document.body.innerHTML = '';
      new MainAppPage().renderMainPage();
    });

    return this.pageWrapper;
  }
}

export const startPage = new StartPage();
