import { calcMaxPrice, calcMinPrice } from "./calc-car-prices";



export function enableAllBuyButtons(allCars) {
  for (let i = 0; i < allCars.length; i++) {
    document.getElementById(allCars[i].id + "Button").disabled = false;
  }
}

//////////////////////////////////////

export function disabledBuyButtonsExceptCheapest(allCars) {
  enableAllBuyButtons(allCars);

  const expensiveCars = [];
  const minPrice = calcMinPrice(allCars);

  for (let i = 0; i < allCars.length; i++) {
    if (allCars[i].price > minPrice) {
      expensiveCars.push(allCars[i]);
    }
  }

  for (let i = 0; i < expensiveCars.length; i++) {
    document.getElementById(expensiveCars[i].id + "Button").disabled = true;
  }
}

/////////////////////////////////////////

export function disabledBuyButtonsExceptTheExpensive(allCars) {
  enableAllBuyButtons(allCars);

  let cheapCars = [];
  let maxPrice = calcMaxPrice(allCars);

  for (let i = 0; i < allCars.length; i++) {
    if (allCars[i].price < maxPrice) {
      cheapCars.push(allCars[i]);
    }
  }

  for (let i = 0; i < cheapCars.length; i++) {
    document.getElementById(cheapCars[i].id + "Button").disabled = true;
  }
}

/////////////////////////////////////////
