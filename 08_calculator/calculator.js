const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	return array.reduce((total, n) => total + n, 0);
};

const multiply = function(array) {
  return array.reduce((total, n) => total * n);
};

const power = function(a, x) {
	return a ** x;
};

const factorial = function(n) {
  if(n === 0)
    return 1;
  let total = 1;
  for (let i = 1; i < n + 1; i++) {
    total *= i;
  }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
