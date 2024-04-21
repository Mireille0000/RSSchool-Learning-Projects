import Page from '../../templates/page.ts';
// import AuthenticationPage from '../ua-page/ua-page.ts';

export default class MainPage extends Page {
  userName: HTMLDivElement;

  title: HTMLDivElement;

  buttonsContainer: HTMLDivElement;

  infoButtonMain: HTMLButtonElement;

  exitButton: HTMLButtonElement;

  constructor(id: string) {
    super(id);
    this.userName = document.createElement('div');
    this.title = document.createElement('div');
    this.buttonsContainer = document.createElement('div');

    this.infoButtonMain = document.createElement('button');
    this.exitButton = document.createElement('button');
  }

  renderPage() {
    // const authPageItems = new AuthenticationPage('ua-page');
    document.body.append(this.pageWrapper);
    this.pageWrapper.append(this.header, this.main, this.footer);
    this.addElementsToHeader(this.userName, this.title, this.buttonsContainer);
    this.buttonsContainer.className = 'main-buttons'; //
    const name = localStorage.getItem('name');
    const appTitle = document.createElement('h1');
    this.title.append(appTitle);
    this.userName.innerHTML = name;
    appTitle.innerHTML = 'Fun Chat';

    this.buttonsContainer.append(this.infoButtonMain, this.exitButton);
    this.infoButtonMain.className = 'info-button';
    this.infoButtonMain.innerHTML = 'Info';
    this.exitButton.className = 'exit-button';
    this.exitButton.innerHTML = 'Exit';
    return this.pageWrapper;
  }
}
