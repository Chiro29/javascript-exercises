const repeatString = function(word, n) {
  let string = '';

  if(n < 0) {
    string = 'ERROR';  
  }
  else {
    for(let i = 1; i <= n; i++) {
      string = string + word;    
    }
  }

  return string;
};

// Do not edit below this line
module.exports = repeatString;
