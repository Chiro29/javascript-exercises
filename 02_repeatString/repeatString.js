const repeatString = function(word, n) {
  let string = '';

  if(n < 0) {
    string = 'ERROR';  
  }
  else {
    string = word.repeat(n);
  }

  return string;
};

// Do not edit below this line
module.exports = repeatString;
