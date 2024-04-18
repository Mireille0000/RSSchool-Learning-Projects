import Page from '../templates/page.ts';

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

  renderInfoPage() {
    document.body.append(this.pageWrapper);
    const pageTemplate = document.querySelector('.container') as HTMLElement;
    pageTemplate.append(this.main);

    this.addElementsToMain(this.formContainer);
    this.formContainer.append(this.title, this.info, this.returnButton);
    this.title.innerHTML = 'Fun Chat';
    this.info.innerHTML = `This is the Fun Chat Application made 
    as a part of RSSchool JavaScript course.`;
    this.returnButton.innerHTML = 'Return';
    this.formContainer.className = 'form-container';
    this.returnButton.className = 'return-button';
    this.returnButton.type = 'button';
  }
}
