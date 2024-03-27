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
    const buttonsHeader = document.createElement("div") as HTMLDivElement;
    const gameTitle = document.createElement("h1");
    gameTitle.innerHTML = "ASYNC RACE";

    buttonsHeader.className = "buttons-header";
    this.addElementsToHeader(buttonsHeader, gameTitle);
    buttonsHeader.append(this.garage, this.winners);

    this.garage.innerHTML = "TO GARAGE";
    this.winners.innerHTML = "TO WINNERS";
  }
}
