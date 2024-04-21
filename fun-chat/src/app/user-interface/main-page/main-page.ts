import Page from '../../templates/page.ts';
import InfoPage from '../info-page/info-page.ts';
import AuthenticationPage from '../ua-page/ua-page.ts';

import githubIcon from '../../../assets/images/github-icon-2.svg';
import rssIcon from '../../../assets/images/rsshool.jpg';

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
    document.body.append(this.pageWrapper);
    this.pageWrapper.append(this.header, this.main, this.footer);

    // header
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

    this.exitButton.addEventListener('click', () => {
      document.body.innerHTML = '';
      new AuthenticationPage('ua-page').renderPage();
    });

    this.infoButtonMain.addEventListener('click', () => {
      document.body.innerHTML = '';
      new InfoPage('info').renderPage();
      const returnToMainBtn = document.querySelector('.return-button');
      returnToMainBtn.addEventListener('click', () => {
        document.body.innerHTML = '';
        new MainPage('main-page').renderPage();
      });
    });

    // main

    // footer

    const footerWrapper = document.createElement('div');
    footerWrapper.className = 'footer-wrapper';
    const authorGithub = document.createElement('span');
    const authorGithubLink = document.createElement('a');
    const appYear = document.createElement('span');
    const rssLogo = document.createElement('span');
    const rssLogoLink = document.createElement('a');

    this.addElementsToFooter(footerWrapper);
    // images
    const ghImg = new Image();
    ghImg.src = githubIcon;
    ghImg.alt = 'Github image';
    ghImg.className = 'image';
    const rssImg = new Image();
    rssImg.src = rssIcon;
    rssImg.alt = 'RSSchool image';
    rssImg.className = 'image';

    footerWrapper.append(authorGithubLink, appYear, rssLogoLink);
    authorGithubLink.append(ghImg, authorGithub);
    rssLogoLink.append(rssLogo, rssImg);

    authorGithub.innerHTML = 'Tamara Gasanova(Mireille0000)';
    authorGithubLink.href = 'https://github.com/Mireille0000';
    authorGithubLink.title = 'My Github';
    authorGithubLink.target = '_blank';
    appYear.innerHTML = '2024';
    rssLogo.innerHTML = 'RSSchool';
    rssLogoLink.href =
      'https://github.com/rolling-scopes-school/tasks/tree/master/stage1';
    rssLogoLink.title = 'RSSchool Link';
    authorGithubLink.target = '_blank';

    return this.pageWrapper;
  }
}
