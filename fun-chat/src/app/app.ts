import AuthenticationPage from './user-interface/ua-page/ua-page.ts';
import InfoPage from './user-interface/info-page/info-page.ts';
import Page from './templates/page.ts';

export const PagesIds = {
  AuthPageId: 'ua-page',
  InfoPageId: 'info',
};

export default class App {
  initialPage: AuthenticationPage;

  static renderPage(idPage: string) {
    document.body.innerHTML = '';
    let page: Page | null = null;

    if (idPage === PagesIds.AuthPageId) {
      page = new AuthenticationPage(idPage);
    } else if (idPage === PagesIds.InfoPageId) {
      page = new InfoPage(idPage);
    }

    if (page) {
      const pageToRender = page.renderPage();
      document.body.append(pageToRender);
    }
  }

  constructor() {
    this.initialPage = new AuthenticationPage('ua-page');
  }

  changeRoute() {
    window.addEventListener('hashchange', () => {
      const hash = window.location.hash.slice(1);
      console.log(this);
      return App.renderPage(hash);
    });
  }

  render() {
    // App.renderPage('#ua-page');
    // const infoButton = document.querySelector('.info-button');
    // infoButton.addEventListener('click', () => {
    //   App.renderPage('#info');
    //   const returnBtn = document.querySelector('.return-button');
    //   returnBtn.addEventListener('click', () => {
    //     return App.renderPage('#ua-page');
    //   });
    // });

    const authPage = this.initialPage.renderPage();
    const infoPage = new InfoPage('info');
    const infoButton = document.querySelector('.info-button');
    infoButton.addEventListener('click', () => {
      document.body.innerHTML = '';
      infoPage.renderPage();
      const returnBtn = document.querySelector('.return-button');
      returnBtn.addEventListener('click', () => {
        document.body.innerHTML = '';
        return this.initialPage.renderPage();
      });
    });
    this.changeRoute();
    return authPage;
  }
}
