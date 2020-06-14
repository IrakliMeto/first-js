export function calcAveragePrice(allCars) {
  let sum = 0;

  for (let i = 0; i < allCars.length; i++) {
    sum += allCars[i].price;
  }

  let result = sum / allCars.length;
  return result;
}

//////////////////////////////////////////

export function calcMinPrice(array) {
  let minPrice = array[0].price;

  for (let i = 0; i < array.length; i++) {
    if (minPrice > array[i].price) {
      minPrice = array[i].price;
    }
  }
  return minPrice;
}

/////////////////////////////////////////

export function calcMaxPrice(array) {
  let maxPrice = 0;
  for (let i = 0; i < array.length; i++) {
    if (maxPrice < array[i].price) {
      maxPrice = array[i].price;
    }
  }
  return maxPrice;
}

//////////////////////////////////////////
