import { enableAllBuyButtons } from "./buy-buttons";

export function findCardById(allCars, carId) {
  for (let i = 0; i < allCars.length; i++) {
    if (allCars[i].id === carId) {
      return allCars[i];
    }
  }
}
//////////////////////////////////

function disabledBuyButtonForCarsExpensiveThan(allCars, price) {
  const expensiveCars = [];

  for (let i = 0; i < allCars.length; i++) {
    if (allCars[i].price > price) {
      expensiveCars.push(allCars[i]);
    }
  }

  for (let i = 0; i < expensiveCars.length; i++) {
    document.getElementById(expensiveCars[i].id + "Button").disabled = true;
  }
}

//////////////////////////////////
export function findPriceLessThan(allCars, price) {
  enableAllBuyButtons(allCars);

  disabledBuyButtonForCarsExpensiveThan(allCars, price);

  const cars = [];

  for (let i = 0; i < allCars.length; i++) {
    if (price > allCars[i].price) cars.push(allCars[i]);
  }
  return cars;
}

/////////////////////////////////
