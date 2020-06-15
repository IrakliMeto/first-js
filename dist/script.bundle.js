/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./modules/Car.js":
/*!************************!*\
  !*** ./modules/Car.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Car {\r\n  constructor(id, manufacturer, model, color, releaseYear, horsePower, price) {\r\n    this.id = id;\r\n    this.manufacturer = manufacturer;\r\n    this.model = model;\r\n    this.color = color;\r\n    this.releaseYear = releaseYear;\r\n    this.horsePower = horsePower;\r\n    this.price = price;\r\n  }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Car);\r\n\n\n//# sourceURL=webpack:///./modules/Car.js?");

/***/ }),

/***/ "./modules/buy-buttons.js":
/*!********************************!*\
  !*** ./modules/buy-buttons.js ***!
  \********************************/
/*! exports provided: enableAllBuyButtons, disabledBuyButtonsExceptCheapest, disabledBuyButtonsExceptTheExpensive */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"enableAllBuyButtons\", function() { return enableAllBuyButtons; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"disabledBuyButtonsExceptCheapest\", function() { return disabledBuyButtonsExceptCheapest; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"disabledBuyButtonsExceptTheExpensive\", function() { return disabledBuyButtonsExceptTheExpensive; });\n/* harmony import */ var _calc_car_prices__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calc-car-prices */ \"./modules/calc-car-prices.js\");\n\r\n\r\n\r\n\r\nfunction enableAllBuyButtons(allCars) {\r\n  for (let i = 0; i < allCars.length; i++) {\r\n    document.getElementById(allCars[i].id + \"Button\").disabled = false;\r\n  }\r\n}\r\n\r\n//////////////////////////////////////\r\n\r\nfunction disabledBuyButtonsExceptCheapest(allCars) {\r\n  enableAllBuyButtons(allCars);\r\n\r\n  const expensiveCars = [];\r\n  const minPrice = Object(_calc_car_prices__WEBPACK_IMPORTED_MODULE_0__[\"calcMinPrice\"])(allCars);\r\n\r\n  for (let i = 0; i < allCars.length; i++) {\r\n    if (allCars[i].price > minPrice) {\r\n      expensiveCars.push(allCars[i]);\r\n    }\r\n  }\r\n\r\n  for (let i = 0; i < expensiveCars.length; i++) {\r\n    document.getElementById(expensiveCars[i].id + \"Button\").disabled = true;\r\n  }\r\n}\r\n\r\n/////////////////////////////////////////\r\n\r\nfunction disabledBuyButtonsExceptTheExpensive(allCars) {\r\n  enableAllBuyButtons(allCars);\r\n\r\n  let cheapCars = [];\r\n  let maxPrice = Object(_calc_car_prices__WEBPACK_IMPORTED_MODULE_0__[\"calcMaxPrice\"])(allCars);\r\n\r\n  for (let i = 0; i < allCars.length; i++) {\r\n    if (allCars[i].price < maxPrice) {\r\n      cheapCars.push(allCars[i]);\r\n    }\r\n  }\r\n\r\n  for (let i = 0; i < cheapCars.length; i++) {\r\n    document.getElementById(cheapCars[i].id + \"Button\").disabled = true;\r\n  }\r\n}\r\n\r\n/////////////////////////////////////////\r\n\n\n//# sourceURL=webpack:///./modules/buy-buttons.js?");

/***/ }),

/***/ "./modules/calc-car-prices.js":
/*!************************************!*\
  !*** ./modules/calc-car-prices.js ***!
  \************************************/
/*! exports provided: calcAveragePrice, calcMinPrice, calcMaxPrice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"calcAveragePrice\", function() { return calcAveragePrice; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"calcMinPrice\", function() { return calcMinPrice; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"calcMaxPrice\", function() { return calcMaxPrice; });\nfunction calcAveragePrice(allCars) {\r\n  let sum = 0;\r\n\r\n  for (let i = 0; i < allCars.length; i++) {\r\n    sum += allCars[i].price;\r\n  }\r\n\r\n  let result = sum / allCars.length;\r\n  return result;\r\n}\r\n\r\n//////////////////////////////////////////\r\n\r\nfunction calcMinPrice(array) {\r\n  let minPrice = array[0].price;\r\n\r\n  for (let i = 0; i < array.length; i++) {\r\n    if (minPrice > array[i].price) {\r\n      minPrice = array[i].price;\r\n    }\r\n  }\r\n  return minPrice;\r\n}\r\n\r\n/////////////////////////////////////////\r\n\r\nfunction calcMaxPrice(array) {\r\n  let maxPrice = 0;\r\n  for (let i = 0; i < array.length; i++) {\r\n    if (maxPrice < array[i].price) {\r\n      maxPrice = array[i].price;\r\n    }\r\n  }\r\n  return maxPrice;\r\n}\r\n\r\n//////////////////////////////////////////\r\n\n\n//# sourceURL=webpack:///./modules/calc-car-prices.js?");

/***/ }),

/***/ "./modules/car-descriptions.js":
/*!*************************************!*\
  !*** ./modules/car-descriptions.js ***!
  \*************************************/
/*! exports provided: getDescription, displayDescription, getDescriptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getDescription\", function() { return getDescription; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"displayDescription\", function() { return displayDescription; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getDescriptions\", function() { return getDescriptions; });\n/* harmony import */ var _find_cars__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./find-cars */ \"./modules/find-cars.js\");\n\r\n\r\nfunction getDescription(foundCar) {\r\n  return `Car description :\r\n  Manufacturer: ${foundCar.Manufacturer},\r\n  Model: ${foundCar.model},\r\n  Color: ${foundCar.color},\r\n  Year: ${foundCar.year},\r\n  HorsePower: ${foundCar.horsePower},\r\n  Price: ${foundCar.price}$`;\r\n}\r\n\r\n///////////////////////////////\r\n\r\nfunction displayDescription(allCars, carId) {\r\n  let foundCar = Object(_find_cars__WEBPACK_IMPORTED_MODULE_0__[\"findCardById\"])(allCars, carId);\r\n  let description = getDescription(foundCar);\r\n\r\n  alert(description);\r\n}\r\n\r\n///////////////////////////////////\r\n\r\nfunction getDescriptions(cars) {\r\n  let descriptions = \"\";\r\n  for (let i = 0; i < cars.length; i++) {\r\n    descriptions += `\r\n    Manufacturer : ${cars[i].Manufacturer},\r\n    model : ${cars[i].model},\r\n    price : ${cars[i].price} \\n `;\r\n  }\r\n  return descriptions;\r\n}\r\n\r\n/////////////////////////////////\r\n\n\n//# sourceURL=webpack:///./modules/car-descriptions.js?");

/***/ }),

/***/ "./modules/find-cars.js":
/*!******************************!*\
  !*** ./modules/find-cars.js ***!
  \******************************/
/*! exports provided: findCardById, findPriceLessThan */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"findCardById\", function() { return findCardById; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"findPriceLessThan\", function() { return findPriceLessThan; });\n/* harmony import */ var _buy_buttons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buy-buttons */ \"./modules/buy-buttons.js\");\n\r\n\r\nfunction findCardById(allCars, carId) {\r\n  for (let i = 0; i < allCars.length; i++) {\r\n    if (allCars[i].id === carId) {\r\n      return allCars[i];\r\n    }\r\n  }\r\n}\r\n//////////////////////////////////\r\n\r\nfunction disabledBuyButtonForCarsExpensiveThan(allCars, price) {\r\n  const expensiveCars = [];\r\n\r\n  for (let i = 0; i < allCars.length; i++) {\r\n    if (allCars[i].price > price) {\r\n      expensiveCars.push(allCars[i]);\r\n    }\r\n  }\r\n\r\n  for (let i = 0; i < expensiveCars.length; i++) {\r\n    document.getElementById(expensiveCars[i].id + \"Button\").disabled = true;\r\n  }\r\n}\r\n\r\n//////////////////////////////////\r\nfunction findPriceLessThan(allCars, price) {\r\n  Object(_buy_buttons__WEBPACK_IMPORTED_MODULE_0__[\"enableAllBuyButtons\"])(allCars);\r\n\r\n  disabledBuyButtonForCarsExpensiveThan(allCars, price);\r\n\r\n  const cars = [];\r\n\r\n  for (let i = 0; i < allCars.length; i++) {\r\n    if (price > allCars[i].price) cars.push(allCars[i]);\r\n  }\r\n  return cars;\r\n}\r\n\r\n/////////////////////////////////\r\n\n\n//# sourceURL=webpack:///./modules/find-cars.js?");

/***/ }),

/***/ "./modules/login.js":
/*!**************************!*\
  !*** ./modules/login.js ***!
  \**************************/
/*! exports provided: login */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"login\", function() { return login; });\n/* harmony import */ var _users__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./users */ \"./modules/users.js\");\n\r\n\r\nfunction login(username, password, email) {\r\n  const emailRegexPattern = /^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$/;\r\n  let isEmailValid = emailRegexPattern.test(email);\r\n\r\n  const passwordRegexPattern = /^.*(?=.*[A-Z]{1,})(?=.*[^\\w]{1,})(?=.*[0-9]{1,})(?=.*[\\w]).{6,20}$/;\r\n  let isPasswordStrong = passwordRegexPattern.test(password);\r\n\r\n  let possibleUser = Object(_users__WEBPACK_IMPORTED_MODULE_0__[\"getFoundUser\"])(username);\r\n  let possibleEmail = Object(_users__WEBPACK_IMPORTED_MODULE_0__[\"getFoundEmail\"])(email);\r\n\r\n  if (!possibleEmail || !isEmailValid) {\r\n    console.log(\"მომხმარებელი ამ მაილით არ მოიძებნა, ან არასწორად უთითებთ !\");\r\n    alert(\"მომხმარებელი ამ მაილით არ მოიძებნა, ან არასწორად უთითებთ !\");\r\n  } else {\r\n    let isPasswordValid = Object(_users__WEBPACK_IMPORTED_MODULE_0__[\"checkPassword\"])(possibleUser, password);\r\n    if (isPasswordValid) {\r\n      console.log(\"წარმატებით შეხვედით სისტემაში .\");\r\n      alert(\"წარმატებით შეხვედით სისტემაში .\");\r\n      window.location = \"index.html\";\r\n      if (!isPasswordStrong) {\r\n        console.log(\r\n          \"მაგრამ თქვენ გაქვთ მარტივი პაროლი , უსაფრთხოების მიზნით ,  გთხოვთ შეცვალოთ პაროლი\"\r\n        );\r\n        alert(\r\n          \"მაგრამ თქვენ გაქვთ მარტივი პაროლი , უსაფრთხოების მიზნით , გთხოვთ შეცვალოთ პაროლი\"\r\n        );\r\n      }\r\n    } else {\r\n      console.log(\"პაროლი არასწორია\");\r\n      alert(\"პაროლი არასწორია\");\r\n    }\r\n  }\r\n}\r\n\r\n///////////////////////////\r\n\n\n//# sourceURL=webpack:///./modules/login.js?");

/***/ }),

/***/ "./modules/show-popup.js":
/*!*******************************!*\
  !*** ./modules/show-popup.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _find_cars__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./find-cars */ \"./modules/find-cars.js\");\n/* harmony import */ var _car_descriptions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./car-descriptions */ \"./modules/car-descriptions.js\");\n\r\n\r\n\r\nfunction showPopup(allCars) {\r\n  let searchBar = document.getElementById(\"searchInput\");\r\n  let price = searchBar.value;\r\n  let cars = Object(_find_cars__WEBPACK_IMPORTED_MODULE_0__[\"findPriceLessThan\"])(allCars, price);\r\n  let description = Object(_car_descriptions__WEBPACK_IMPORTED_MODULE_1__[\"getDescriptions\"])(cars);\r\n  if (description) {\r\n    alert(description);\r\n  } else {\r\n    alert(\"We dont have car, in this price\");\r\n  }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (showPopup);\r\n///////////////////////////////////\r\n\n\n//# sourceURL=webpack:///./modules/show-popup.js?");

/***/ }),

/***/ "./modules/show-price.js":
/*!*******************************!*\
  !*** ./modules/show-price.js ***!
  \*******************************/
/*! exports provided: showAveragePrice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"showAveragePrice\", function() { return showAveragePrice; });\n/* harmony import */ var _calc_car_prices__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calc-car-prices */ \"./modules/calc-car-prices.js\");\n/* harmony import */ var _buy_buttons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buy-buttons */ \"./modules/buy-buttons.js\");\n\r\n\r\n\r\nfunction showAveragePrice(allCars) {\r\n  Object(_buy_buttons__WEBPACK_IMPORTED_MODULE_1__[\"enableAllBuyButtons\"])(allCars);\r\n  alert(`Average Price is : ` + Object(_calc_car_prices__WEBPACK_IMPORTED_MODULE_0__[\"calcAveragePrice\"])(allCars));\r\n}\r\n\r\n/////////////////////////////////////////\r\n\n\n//# sourceURL=webpack:///./modules/show-price.js?");

/***/ }),

/***/ "./modules/users.js":
/*!**************************!*\
  !*** ./modules/users.js ***!
  \**************************/
/*! exports provided: getFoundUser, getFoundEmail, checkPassword */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getFoundUser\", function() { return getFoundUser; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getFoundEmail\", function() { return getFoundEmail; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"checkPassword\", function() { return checkPassword; });\nlet user1 = {\r\n  username: \"meto55\",\r\n  email: \"metometo@gmail.com\",\r\n  password: \"123\",\r\n};\r\n\r\nlet user2 = {\r\n  username: \"meto11\",\r\n  email: \"metometo11@gmail.com\",\r\n  password: \"1234\",\r\n};\r\n\r\nlet user3 = {\r\n  username: \"meto54\",\r\n  email: \"metoika@gmail.com\",\r\n  password: \"1334\",\r\n};\r\n\r\nlet user4 = {\r\n  username: \"meto77\",\r\n  email: \"ika.meto@gmail.com\",\r\n  password: \"1234567\",\r\n};\r\n\r\nlet user5 = {\r\n  username: \"meto52\",\r\n  email: \"metometo44@gmail.com\",\r\n  password: \"1567\",\r\n};\r\n\r\nlet users = [user1, user2, user3, user4, user5];\r\n\r\nfunction getFoundUser(possibleUsername) {\r\n  for (let i = 0; i < users.length; i++) {\r\n    if (users[i].username === possibleUsername) {\r\n      return users[i];\r\n    }\r\n  }\r\n}\r\n\r\n/////////////////////////////////////////////\r\n\r\nfunction getFoundEmail(possibleEmail) {\r\n  for (let i = 0; i < users.length; i++) {\r\n    if (users[i].email === possibleEmail) {\r\n      return users[i].email;\r\n    }\r\n  }\r\n}\r\n\r\nfunction checkPassword(user, possiblePassword) {\r\n  let isSame = user.password === possiblePassword;\r\n  return isSame;\r\n}\r\n\r\n//////////////////////////////////////////////\r\n\n\n//# sourceURL=webpack:///./modules/users.js?");

/***/ }),

/***/ "./script.js":
/*!*******************!*\
  !*** ./script.js ***!
  \*******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_Car__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/Car */ \"./modules/Car.js\");\n/* harmony import */ var _modules_buy_buttons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/buy-buttons */ \"./modules/buy-buttons.js\");\n/* harmony import */ var _modules_show_price__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/show-price */ \"./modules/show-price.js\");\n/* harmony import */ var _modules_show_popup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/show-popup */ \"./modules/show-popup.js\");\n/* harmony import */ var _modules_car_descriptions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/car-descriptions */ \"./modules/car-descriptions.js\");\n/* harmony import */ var _modules_login__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/login */ \"./modules/login.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst toyota = new _modules_Car__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\r\n  \"item2\",\r\n  \"Toyota\",\r\n  \"Highlender\",\r\n  \"Grey\",\r\n  \"2018\",\r\n  \"370\",\r\n  31777\r\n);\r\n\r\nconst fordMustang = new _modules_Car__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\r\n  \"item1\",\r\n  \"Ford\",\r\n  \"Mustang\",\r\n  \"Black\",\r\n  \"1969\",\r\n  \"340\",\r\n  37777\r\n);\r\n\r\nconst mercedesBenz = new _modules_Car__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\r\n  \"item3\",\r\n  \"Mercedes-Benz\",\r\n  \"CLS-350\",\r\n  \"Grey\",\r\n  \"2014\",\r\n  \"280\",\r\n  12500\r\n);\r\n\r\nconst miniCooper = new _modules_Car__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\r\n  \"item4\",\r\n  \"Mini\",\r\n  \"Cooper\",\r\n  \"Red\",\r\n  \"2013\",\r\n  \"150\",\r\n  11115\r\n);\r\n\r\nconst allCars = [toyota, fordMustang, mercedesBenz, miniCooper];\r\n/////////////////////////////////////\r\n\r\nconst cheapButton = document.querySelector(\"#button-cheapest\");\r\nif (cheapButton) {\r\n  cheapButton.addEventListener(\"click\", function () {\r\n    Object(_modules_buy_buttons__WEBPACK_IMPORTED_MODULE_1__[\"disabledBuyButtonsExceptCheapest\"])(allCars);\r\n  });\r\n}\r\n\r\nconst expensiveButton = document.querySelector(\"#button-expensive\");\r\nif (expensiveButton) {\r\n  expensiveButton.addEventListener(\"click\", function () {\r\n    Object(_modules_buy_buttons__WEBPACK_IMPORTED_MODULE_1__[\"disabledBuyButtonsExceptTheExpensive\"])(allCars);\r\n  });\r\n}\r\n\r\nconst averageButton = document.querySelector(\"#button-average\");\r\nif (averageButton) {\r\n  averageButton.addEventListener(\"click\", function () {\r\n    Object(_modules_show_price__WEBPACK_IMPORTED_MODULE_2__[\"showAveragePrice\"])(allCars);\r\n  });\r\n}\r\n\r\n/////////////////////////////////////\r\n\r\nconst searchButton = document.querySelector(\"#search-button\");\r\nif (searchButton) {\r\n  searchButton.addEventListener(\"click\", function () {\r\n    Object(_modules_show_popup__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(allCars);\r\n  });\r\n}\r\n\r\n///////////////////////////////////\r\nconst carHtmlNodes = Array.from(\r\n  document.querySelectorAll(\".card__image-holder\")\r\n);\r\n\r\nfor (let i = 0; i < carHtmlNodes.length; i++) {\r\n  carHtmlNodes[i].addEventListener(\"click\", function () {\r\n    const carId = carHtmlNodes[i].getAttribute(\"id\");\r\n    Object(_modules_car_descriptions__WEBPACK_IMPORTED_MODULE_4__[\"displayDescription\"])(allCars, carId);\r\n  });\r\n}\r\n\r\n////////////////////////////////////\r\n\r\nconst navigateButton = document.querySelector(\"#navigate-button\");\r\nif (navigateButton) {\r\n  navigateButton.addEventListener(\"click\", function navigateToLogin() {\r\n    window.location = \"login.html\";\r\n  });\r\n}\r\n\r\n///////////////////////////////////\r\n\r\nconst loginButton = document.querySelector(\"#login-button\");\r\nif (loginButton) {\r\n  loginButton.addEventListener(\"click\", function tryLogin() {\r\n    let username = document.getElementById(\"username\").value;\r\n    let password = document.getElementById(\"password\").value;\r\n    let email = document.getElementById(\"email\").value;\r\n\r\n    Object(_modules_login__WEBPACK_IMPORTED_MODULE_5__[\"login\"])(username, password, email);\r\n  });\r\n}\r\n\r\n//////////////////////////////////\r\n\n\n//# sourceURL=webpack:///./script.js?");

/***/ })

/******/ });