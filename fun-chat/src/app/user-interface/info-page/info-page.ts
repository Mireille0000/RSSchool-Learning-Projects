import Page from '../../templates/page.ts';
import { PagesIds } from '../../app.ts';

export default class InfoPage extends Page {
  title: HTMLHeadingElement;

  info: HTMLElement;

  returnButton: HTMLButtonElement;

  constructor(id: string) {
    super(id);
    this.title = document.createElement('h1');
    this.info = document.createElement('div');
    this.returnButton = document.createElement('button');
  }

  renderPage() {
    document.body.append(this.pageWrapper);
    const pageTemplate = document.querySelector('.container') as HTMLElement;
    pageTemplate.append(this.main);

    this.addElementsToMain(this.formContainer);
    const userAuthPage = document.createElement('a');
    userAuthPage.href = `#${PagesIds.AuthPageId}`;
    this.formContainer.append(this.title, this.info, userAuthPage);
    userAuthPage.append(this.returnButton);
    this.title.innerHTML = 'Fun Chat';
    this.info.innerHTML = `This is the Fun Chat Application made 
    as a part of RSSchool JavaScript course.`;
    this.returnButton.innerHTML = 'Return';
    this.formContainer.className = 'form-container';
    this.returnButton.className = 'return-button';
    this.returnButton.type = 'button';

    return this.pageWrapper;
  }
}
