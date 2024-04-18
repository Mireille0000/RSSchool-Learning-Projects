import AuthenticationPage from './user-interface/ua-page.ts';
import InfoPage from './user-interface/info-page.ts';

export default class App {
  initialPage: AuthenticationPage;
  //   infoPage: InfoPage;

  constructor() {
    this.initialPage = new AuthenticationPage('ua-page');
    // this.infoPage = new InfoPage('info');
  }

  render() {
    const authPage = this.initialPage.renderAuthPage();
    const infoPage = new InfoPage('info');
    const infoButton = document.querySelector('.info-button');
    infoButton.addEventListener('click', () => {
      document.body.innerHTML = '';
      // const infofmatiobPage = infoPage.renderInfoPage();
      infoPage.renderInfoPage();
      const returnBtn = document.querySelector('.return-button');
      returnBtn.addEventListener('click', () => {
        document.body.innerHTML = '';
        return this.initialPage.renderAuthPage();
      });
    });

    return authPage;
  }
}
