import { findCardById } from "./find-cars";

export function getDescription(foundCar) {
  return `Car description :
  Manufacturer: ${foundCar.Manufacturer},
  Model: ${foundCar.model},
  Color: ${foundCar.color},
  Year: ${foundCar.year},
  HorsePower: ${foundCar.horsePower},
  Price: ${foundCar.price}$`;
}

///////////////////////////////

export function displayDescription(allCars, carId) {
  let foundCar = findCardById(allCars, carId);
  let description = getDescription(foundCar);

  alert(description);
}

///////////////////////////////////

export function getDescriptions(cars) {
  let descriptions = "";
  for (let i = 0; i < cars.length; i++) {
    descriptions += `
    Manufacturer : ${cars[i].Manufacturer},
    model : ${cars[i].model},
    price : ${cars[i].price} \n `;
  }
  return descriptions;
}

/////////////////////////////////
