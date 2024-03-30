export default class WinnersPage {
  title: HTMLHeadingElement;

  winnersNumber: number;

  constructor() {
    this.title = document.createElement("h3");
    this.title.className = "winners-header";
    this.winnersNumber = 1;
    this.title.innerHTML = `Winners (${this.winnersNumber})`;
  }
}
