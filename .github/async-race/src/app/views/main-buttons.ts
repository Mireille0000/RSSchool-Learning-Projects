import Page from "./page.ts";

export default class MainButtons extends Page {
  garage: HTMLButtonElement;

  winners: HTMLButtonElement;

  constructor() {
    super();
    this.garage = document.createElement("button");
    this.garage.className = "to-garage-button";

    this.winners = document.createElement("button");
    this.winners.className = "to-winners-button";
  }

  renderPage() {
    document.body.append(this.container);
    this.container.append(this.header, this.main, this.footer);
    this.addElementsToHeader(this.garage, this.winners);
  }
}
