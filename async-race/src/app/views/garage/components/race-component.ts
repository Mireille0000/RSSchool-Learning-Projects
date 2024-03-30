import { garageResponse } from "../../../cars-server/get-car.ts";

export default class RaceComponent {
  selectButton: HTMLButtonElement;

  removeButton: HTMLButtonElement;

  carName: HTMLDivElement;

  controllerA: HTMLButtonElement;

  controllerB: HTMLButtonElement;

  road: HTMLElement;
  // flag: SVGAElement;

  constructor() {
    this.selectButton = document.createElement("button");
    this.selectButton.innerHTML = "SELECT";
    this.removeButton = document.createElement("button");
    this.removeButton.innerHTML = "REMOVE";
    this.carName = document.createElement("div");
    this.carName.className = "car-name";
    this.carName.innerHTML = `${garageResponse[0].name}`; //

    this.controllerA = document.createElement("button");
    this.controllerA.innerHTML = "A";
    this.controllerB = document.createElement("button");
    this.controllerB.innerHTML = "B";

    this.road = document.createElement("div");
    this.road.className = "road";
  }
}
