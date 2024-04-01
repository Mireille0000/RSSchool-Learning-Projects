export default class WinnersPage {
  title: HTMLHeadingElement;

  winnersNumber: number;

  page: HTMLHeadingElement;

  pageNumber: number;

  constructor() {
    this.title = document.createElement("h3");
    this.title.className = "winners-header";
    this.winnersNumber = 1;
    this.title.innerHTML = `Winners (${this.winnersNumber})`;
    this.page = document.createElement("h3");
    this.page.className = "page-numbers-header";
    this.pageNumber = 1;
    this.page.innerHTML = `Page #${this.pageNumber}`;
  }
}
