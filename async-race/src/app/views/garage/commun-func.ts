export default class CommunFunctionality {
  createInput: HTMLInputElement;

  createColor: HTMLDivElement;

  createButton: HTMLButtonElement;

  updateInput: HTMLInputElement;

  updateColor: HTMLDivElement;

  updateButton: HTMLButtonElement;

  // buttons
  raceButton: HTMLButtonElement;

  resetButton: HTMLButtonElement;

  generateCarsButton: HTMLButtonElement;

  constructor() {
    this.createInput = document.createElement("input");
    this.createColor = document.createElement("div");
    this.createButton = document.createElement("button");
    this.createButton.innerHTML = "Create";

    this.updateInput = document.createElement("input");
    this.updateColor = document.createElement("div");
    this.updateButton = document.createElement("button");
    this.updateButton.innerHTML = "Update";

    // buttons

    this.raceButton = document.createElement("button");
    this.raceButton.innerHTML = "RACE";
    this.resetButton = document.createElement("button");
    this.resetButton.innerHTML = "RESET";
    this.generateCarsButton = document.createElement("button");
    this.generateCarsButton.innerHTML = "GENERATE CARS";
  }
}
