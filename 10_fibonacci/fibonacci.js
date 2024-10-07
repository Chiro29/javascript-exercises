const fibonacci = function(n) {
  const array = [1];
  let sum = 1;

  if (n == 0)
    return 0;  
  if (n < 0) 
    return "OOPS";

  for (let i = 1; i < n ; i++) {
    array.push(sum);
    sum = array[array.length - 2]  + array[array.length - 1];
  }

  return array[array.length - 1];
};

// Do not edit below this line
module.exports = fibonacci;
