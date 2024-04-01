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
    this.selectButton.className = "select-car";
    this.removeButton = document.createElement("button");
    this.removeButton.innerHTML = "REMOVE";
    this.removeButton.className = "remove-car";
    this.carName = document.createElement("div");
    this.carName.className = "car-name";

    this.controllerA = document.createElement("button");
    this.controllerA.innerHTML = "A";
    this.controllerB = document.createElement("button");
    this.controllerB.innerHTML = "B";

    this.road = document.createElement("div");
    this.road.className = "road";
  }
}
