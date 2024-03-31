import Page from "../templates/page.ts";
import GaragePage from "./garage/garage-view.ts";
import WinnersPage from "./winners/winners-view.ts";
import CommunFunctionality from "./garage/commun-func.ts";
import RaceComponent from "./garage/components/race-component.ts";
import CarComponent from "./garage/components/car-component.ts";
import { garageResponse } from "../cars-server/get-car.ts";

export default class Views extends Page {
  garage: HTMLButtonElement;

  winners: HTMLButtonElement;

  communFunctionality: HTMLDivElement;

  createCar: HTMLDivElement;

  updateCar: HTMLDivElement;

  communGameButtons: HTMLDivElement;

  raceField: HTMLDivElement;

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

    this.raceField = document.createElement("div");
    this.raceField.className = "race-field";
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
    const raceComponent = new RaceComponent();
    const carComponent = new CarComponent();

    const colorInputCreate = document.createElement("input"); // color
    const colorInputUpdate = document.createElement("input");
    colorInputCreate.setAttribute("type", "color");
    colorInputUpdate.setAttribute("type", "color");

    // race field
    const carButtons = document.createElement("div");
    carButtons.className = "car-buttons";
    const controllers = document.createElement("div");
    controllers.className = "car-controllers";
    const roadPart = document.createElement("div");
    roadPart.className = "road-part";
    // race field

    this.addElemetsToMain(
      this.communFunctionality,
      garagePage.title,
      garagePage.page,
      this.raceField,
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
    communFun.createColor.append(colorInputCreate);

    this.updateCar.append(
      communFun.updateInput,
      communFun.updateColor,
      communFun.updateButton,
    );
    communFun.updateColor.append(colorInputUpdate);
    this.communGameButtons.append(
      communFun.raceButton,
      communFun.resetButton,
      communFun.generateCarsButton,
    );

    // race field

    this.race(carButtons, controllers, roadPart);
    this.raceCar.className = "car-item";
    carButtons.append(
      raceComponent.selectButton,
      raceComponent.removeButton,
      raceComponent.carName,
    );

    controllers.append(
      raceComponent.controllerA,
      raceComponent.controllerB,
      carComponent.car,
    );

    carComponent.car.append(carComponent.g);
    carComponent.g.append(
      carComponent.carBody,
      carComponent.wheel1,
      carComponent.wheel2,
    );

    roadPart.append(raceComponent.road);

    // show cars

    for (let i = 0; i < 4; i += 1) {
      this.raceField.appendChild(this.raceCar.cloneNode(true));
    } //

    const gArr = document.querySelectorAll("g");
    const carsNamesArr = document.querySelectorAll(".car-name");
    gArr.forEach((_, index) => {
      gArr[index].setAttributeNS(
        null,
        "fill",
        `${garageResponse[index].color}`,
      );
    });

    carsNamesArr.forEach((_, index) => {
      carsNamesArr[index].innerHTML = `${garageResponse[index].name}`;
    });
    // race field

    this.garage.addEventListener("click", () => {
      this.main.innerHTML = "";
      this.addElemetsToMain(
        this.communFunctionality,
        garagePage.title,
        garagePage.page,
        this.raceField,
      );
    });

    this.winners.addEventListener("click", () => {
      this.main.innerHTML = "";
      this.addElemetsToMain(winnersPage.title, garagePage.page);
    });

    return this.container;
  }
}
