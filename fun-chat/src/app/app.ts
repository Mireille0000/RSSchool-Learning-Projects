import AuthenticationPage from './user-interface/ua-page.ts';

export default class App {
  initialPage: AuthenticationPage;

  constructor() {
    this.initialPage = new AuthenticationPage('ua-page');
  }

  render() {
    const authPage = this.initialPage.renderAuthPage();
    return authPage;
  }
}
