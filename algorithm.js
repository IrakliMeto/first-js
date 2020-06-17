function evclide(a, b) {
  var x;
  while (a % b !== 0) {
    x = a % b;
    a = b;
    b = x;
  }
  return b;
}
console.log(evclide(67, 55));
