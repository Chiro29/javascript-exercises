const removeFromArray = function(array, ...argArray) {
  for(let i = array.length - 1; i >= 0; i--) {
    for(let j = array.length - 1; j >= 0; j--) {
      if(argArray[i] === array[j]) {
        array = array.toSpliced(j, 1);
      }
    }
  }

  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
