import { calcAveragePrice } from "./calc-car-prices";
import { enableAllBuyButtons } from "./buy-buttons";

export function showAveragePrice(allCars) {
  enableAllBuyButtons(allCars);
  alert(`Average Price is : ` + calcAveragePrice(allCars));
}

/////////////////////////////////////////
