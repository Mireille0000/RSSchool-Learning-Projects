import { garageResponse } from "./app/cars-server/get-car.ts";
import MainButtons from "./app/views/main-buttons.ts";

console.log(garageResponse.length);
new MainButtons().renderPage();
