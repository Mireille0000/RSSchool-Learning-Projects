import Page from './templates/page';
import LogInPage from './log-in-page/log-in-page';
import StartPage from './start-page/start-page';
import validateForm from './log-in-page/form-validation-rules';

export default class App extends Page {
  logInPage: LogInPage;
  startPage: StartPage;
  static render() {
    const isNotEmpty = localStorage.getItem('userInfo') as string;
    let page: Page | null = null;
    if (!isNotEmpty) {
      validateForm();
      console.log('false');
    } else {
      page = new StartPage();
    }

    if (page) {
      const pageHTML = page.renderPage();
      document.body.append(pageHTML);
    }
  }

  constructor() {
    super();
    this.logInPage = new LogInPage();
    this.startPage = new StartPage();
  }

  run() {
    App.render();
  }
}
