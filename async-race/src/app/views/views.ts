import Page from "./page.ts";
import GaragePage from "./garage-view.ts";
import WinnersPage from "./winners-view.ts";
import CommunFunctionality from "./commun-func.ts";

export default class Views extends Page {
  garage: HTMLButtonElement;

  winners: HTMLButtonElement;

  communFunctionality: HTMLDivElement;

  createCar: HTMLDivElement;

  updateCar: HTMLDivElement;

  communGameButtons: HTMLDivElement;

  constructor() {
    super();
    this.garage = document.createElement("button");
    this.garage.className = "to-garage-button";

    this.winners = document.createElement("button");
    this.winners.className = "to-winners-button";

    this.communFunctionality = document.createElement("div");
    this.communFunctionality.className = "commun-functionality";

    this.createCar = document.createElement("div");
    this.createCar.className = "create-car-block";
    this.updateCar = document.createElement("div");
    this.updateCar.className = "update-car-block";
    this.communGameButtons = document.createElement("div");
    this.communGameButtons.className = "commun-game-buttons";
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

    const garagePage = new GaragePage();
    const winnersPage = new WinnersPage();
    const communFun = new CommunFunctionality();
    this.addElemetsToMain(
      this.communFunctionality,
      garagePage.title,
      garagePage.page,
    );

    this.communFunctionality.append(
      this.createCar,
      this.updateCar,
      this.communGameButtons,
    );
    this.createCar.append(
      communFun.createInput,
      communFun.createColor,
      communFun.createButton,
    );
    this.updateCar.append(
      communFun.updateInput,
      communFun.updateColor,
      communFun.updateButton,
    );
    this.communGameButtons.append(
      communFun.raceButton,
      communFun.resetButton,
      communFun.generateCarsButton,
    );

    this.garage.addEventListener("click", () => {
      this.main.innerHTML = "";
      this.addElemetsToMain(
        this.communFunctionality,
        garagePage.title,
        garagePage.page,
      );
    });

    this.winners.addEventListener("click", () => {
      this.main.innerHTML = "";
      this.addElemetsToMain(winnersPage.title);
      console.log("It is working");
    });

    return this.container;
  }
}
