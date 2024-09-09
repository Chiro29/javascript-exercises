const reverseString = function(string) {
  const array = string.split('');

  string = array.toReversed();
  string = string.join('');
  return string;  
};

// Do not edit below this line
module.exports = reverseString;
