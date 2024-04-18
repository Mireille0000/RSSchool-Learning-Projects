export default abstract class Page {
  pageWrapper: HTMLDivElement;

  header: HTMLElement;

  main: HTMLElement;

  footer: HTMLElement;

  title: HTMLHeadingElement;

  constructor(id: string) {
    this.pageWrapper = document.createElement('div');
    this.pageWrapper.id = id;
    this.pageWrapper.className = 'container';
    this.header = document.createElement('header');
    this.main = document.createElement('main');
    this.footer = document.createElement('footer');
    this.title = document.createElement('h1');
  }

  addElementsToHeader(...elements: Array<HTMLElement>) {
    return this.header.append(...elements);
  }

  addElementsToMain(...elements: Array<HTMLElement>) {
    return this.main.append(...elements);
  }

  addElementsToFooter(...elements: Array<HTMLElement>) {
    return this.footer.append(...elements);
  }
}
