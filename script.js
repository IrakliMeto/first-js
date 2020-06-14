import Car from "./modules/Car";
import {
  disabledBuyButtonsExceptCheapest,
  disabledBuyButtonsExceptTheExpensive,
} from "./modules/buy-buttons";
import { showAveragePrice } from "./modules/show-price";
import showPopup from "./modules/show-popup";
import { displayDescription } from "./modules/car-descriptions";
import { login } from "./modules/login";

const toyota = new Car(
  "item2",
  "Toyota",
  "Highlender",
  "Grey",
  "2018",
  "370",
  31777
);

const fordMustang = new Car(
  "item1",
  "Ford",
  "Mustang",
  "Black",
  "1969",
  "340",
  37777
);

const mercedesBenz = new Car(
  "item3",
  "Mercedes-Benz",
  "CLS-350",
  "Grey",
  "2014",
  "280",
  12500
);

const miniCooper = new Car(
  "item4",
  "Mini",
  "Cooper",
  "Red",
  "2013",
  "150",
  11115
);

const allCars = [toyota, fordMustang, mercedesBenz, miniCooper];
/////////////////////////////////////

const cheapButton = document.querySelector("#button-cheapest");
if (cheapButton) {
  cheapButton.addEventListener("click", function () {
    disabledBuyButtonsExceptCheapest(allCars);
  });
}

const expensiveButton = document.querySelector("#button-expensive");
if (expensiveButton) {
  expensiveButton.addEventListener("click", function () {
    disabledBuyButtonsExceptTheExpensive(allCars);
  });
}

const averageButton = document.querySelector("#button-average");
if (averageButton) {
  averageButton.addEventListener("click", function () {
    showAveragePrice(allCars);
  });
}

/////////////////////////////////////

const searchButton = document.querySelector("#search-button");
if (searchButton) {
  searchButton.addEventListener("click", function () {
    showPopup(allCars);
  });
}

///////////////////////////////////
const carHtmlNodes = Array.from(
  document.querySelectorAll(".card__image-holder")
);

for (let i = 0; i < carHtmlNodes.length; i++) {
  carHtmlNodes[i].addEventListener("click", function () {
    const carId = carHtmlNodes[i].getAttribute("id");
    displayDescription(allCars, carId);
  });
}

////////////////////////////////////

const navigateButton = document.querySelector("#navigate-button");
if (navigateButton) {
  navigateButton.addEventListener("click", function navigateToLogin() {
    window.location = "login.html";
  });
}

///////////////////////////////////

const loginButton = document.querySelector("#login-button");
if (loginButton) {
  loginButton.addEventListener("click", function tryLogin() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let email = document.getElementById("email").value;

    login(username, password, email);
  });
}

//////////////////////////////////
