import Page from './templates/page.ts';
import LogInPage from './log-in-page/log-in-page.ts';
import StartPage from './start-page/start-page.ts';
import validateForm from './log-in-page/form-validation-rules.ts';

export default class App extends Page {
  logInPage: LogInPage;

  startPage: StartPage;

  checkLocalStorage: string;

  render() {
    let page: Page | null = null;
    if (!this.checkLocalStorage) {
      validateForm();
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
    this.checkLocalStorage = localStorage.getItem('userInfo') as string;
    this.logInPage = new LogInPage();
    this.startPage = new StartPage();
  }

  run() {
    this.render();
  }
}
