////////////////////////////////////////////
// arrays and objects

let allCars = [
  {
    id: "item2",
    marka: "Toyota",
    model: "Highlender",
    color: "Grey",
    year: 2018,
    horsePower: 370,
    price: 31777,
  },
  {
    id: "item1",
    marka: "Ford",
    model: "Mustang",
    color: "Black",
    year: 1969,
    horsePower: 340,
    price: 37000,
  },
  {
    id: "item3",
    marka: "Mercedes-Benz",
    model: "CLS-350",
    color: "Grey",
    year: 2014,
    horsePower: 280,
    price: 13500,
  },
  {
    id: "item4",
    marka: "Mini",
    model: "Cooper",
    color: "Red",
    year: 2013,
    horsePower: 170,
    price: 12200,
  },
];

////////////////////////////////////////////////////////////////////////
//start functions
function createAlert() {
  alert();
}
/////////////////////////
function findCardById(carId) {
  for (let i = 0; i < allCars.length; i++) {
    if (allCars[i].id === carId) {
      return allCars[i];
    }
  }
}

//////////////////////////////////
function getDescription(foundCar) {
  return `Car description :     
  Marka: ${foundCar.marka},
  Model: ${foundCar.model},
  Color: ${foundCar.color}, 
  Year: ${foundCar.year}, 
  HorsePower: ${foundCar.horsePower}, 
  Price: ${foundCar.price}$`;
}

///////////////////////////////
function displayDescription(carId) {
  let foundCar = findCardById(carId);
  let description = getDescription(foundCar);

  alert(description);
}

///////////////////////////////////
function findPriceLessThan(price) {
  let cars = [];
  for (let i = 0; i < allCars.length; i++) {
    if (price > allCars[i].price) cars.push(allCars[i]);
  }
  enableAllBuyButtons();
  disabledBuyButtonForCarsExpensiveThan(price);
  return cars;
}

///////////////////////////////////
function getDescriptions(cars) {
  let descriptions = "";
  for (let i = 0; i < cars.length; i++) {
    descriptions += ` 
    Marka : ${cars[i].marka},
    model : ${cars[i].model}, 
    price : ${cars[i].price} \n `;
  }
  return descriptions;
}

/////////////////////////////////
function showPopup() {
  let searchBar = document.getElementById("searchInput");
  let price = searchBar.value;
  let cars = findPriceLessThan(price);
  let description = getDescriptions(cars);
  if (description) {
    alert(description);
  } else {
    alert("We dont have car, in this price");
  }
}

////////////////////////////////////
function disabledBuyButtonForCarsExpensiveThan(price) {
  let expensiveCars = [];

  for (let i = 0; i < allCars.length; i++) {
    console.log(allCars[i].price > price);
    if (allCars[i].price > price) {
      expensiveCars.push(allCars[i]);
    }
  }
  console.log(expensiveCars);
  for (let i = 0; i < expensiveCars.length; i++) {
    document.getElementById(expensiveCars[i].id + "Button").disabled = true;
  }
}

/////////////////////////////////////
function enableAllBuyButtons() {
  for (let i = 0; i < allCars.length; i++) {
    document.getElementById(allCars[i].id + "Button").disabled = false;
  }
}

////////////////////////////////////
