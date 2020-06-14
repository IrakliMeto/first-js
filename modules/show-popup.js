import { findPriceLessThan } from "./find-cars";
import { getDescriptions } from "./car-descriptions";

function showPopup(allCars) {
  let searchBar = document.getElementById("searchInput");
  let price = searchBar.value;
  let cars = findPriceLessThan(allCars, price);
  let description = getDescriptions(cars);
  if (description) {
    alert(description);
  } else {
    alert("We dont have car, in this price");
  }
}

export default showPopup;
///////////////////////////////////
