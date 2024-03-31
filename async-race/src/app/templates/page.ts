export default abstract class Page {
  container: HTMLDivElement;

  header: HTMLElement;

  main: HTMLElement;

  footer: HTMLElement;

  raceCar: HTMLDivElement;

  constructor() {
    this.container = document.createElement("div");
    this.container.className = "container";
    this.header = document.createElement("header");
    this.main = document.createElement("main");
    this.footer = document.createElement("footer");
    this.raceCar = document.createElement("div");
  }

  addElementsToHeader(...elements: Array<HTMLElement>) {
    return this.header.append(...elements);
  }

  addElemetsToMain(...elements: Array<HTMLElement>) {
    return this.main.append(...elements);
  }

  addElemetsToFooter(...elements: Array<HTMLElement>) {
    return this.footer.append(...elements);
  }

  race(...elements: Array<HTMLElement>) {
    return this.raceCar.append(...elements);
  }

  renderPage() {
    return this.container;
  }
}
