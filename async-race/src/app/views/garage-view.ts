import Page from "./page.ts";
import { garageResponse } from "../cars-server/get-car.ts";

export default class GaragePage extends Page {
  title: HTMLHeadingElement;

  carsNumber: number;

  page: HTMLHeadingElement;

  pageNumber: number;

  constructor() {
    super();
    this.title = document.createElement("h3");
    this.title.className = "garage-header";
    this.carsNumber = garageResponse.length;
    this.title.innerHTML = `Garage (${this.carsNumber})`;
    this.page = document.createElement("h3");
    this.page.className = "page-numbers-header";
    this.pageNumber = 1;
    this.page.innerHTML = `Page #${this.pageNumber}`;
  }
}
