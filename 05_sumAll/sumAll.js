const sumAll = function(num1, num2) {
  let sum = 0;
  if ((Number.isInteger(num1) && Number.isInteger(num2)) && (num1 > 0 && num2 > 0)) {
    if (num1 === num2) {
      return num1;
    }
    else if (num1 > num2) {
      let x = num2;
      sum = num2;
  
      do {
        x = x + 1;
        sum = sum + x;
      } while (x !== num1);
    }
    else {
      let x = num1;
      sum = num1;
  
      do {
        x = x + 1;
        sum = sum + x;
      } while (x !== num2);
    }    
  }
  else {
    return "ERROR";
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
