const palindromes = function (string) {
  const array = string
    .toLowerCase()
    .split("")
    .filter(element => /^[a-z0-9]$/.test(element))
    .join("");

  const reverseString = array
    .split("")
    .reverse()
    .join("");

  return array === reverseString;

  // for(let i = 0; i < array.length; i++) {
  //   for (let j = array.length - 1; j >= 0; j--) {
  //     if (array[i] !== array[j]) {
  //       return false;
  //     }
  //     else i++;
  //   }
  // }
  // return true;
};

// Do not edit below this line
module.exports = palindromes;
