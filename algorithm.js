function evclide(a, b) {
  let x;
  while (a % b !== 0) {
    x = a % b;
    a = b;
    b = x;
  }
  return b;
}
console.log(evclide(67, 55));

///////////////////////

function convertCToF(celsius) {
  let farenheit = (celsius * 9) / 5 + 32;

  return farenheit;
}

console.log(convertCToF(55));

///////////////////////

function convertFToC(farenheit) {
  let celsius = ((farenheit - 32) * 5) / 9;

  return celsius;
}

console.log(convertFToC(55));

//////////////////////////

function numberFactorial(num) {
  let sum = 1;
  for (let i = 2; i <= num; i++) {
    sum *= i;
  }
  return sum;
}

console.log(numberFactorial(13));

////////////////////////
