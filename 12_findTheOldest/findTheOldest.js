// Best solution
const getAge = function (person) {
  person.yearOfDeath ??= new Date().getFullYear();
  return person.yearOfDeath - person.yearOfBirth;
};

const findTheOldest = function (people) {
  const orderedPeople = people.toSorted((person, nextPerson) =>   getAge(nextPerson) - getAge(person));

  return orderedPeople[0];
};

// My solution 
// const findTheOldest = function(array) {
//   const d = new Date();
//   const oldestArray = array.sort((a, b) => {
//     firstGuy = (a.yearOfDeath || d.getFullYear()) - a.yearOfBirth;
//     lastGuy = (b.yearOfDeath || d.getFullYear()) - b.yearOfBirth;
//     return firstGuy > lastGuy ? -1 : 1;
//   });

//   return oldestArray[0];
// };

// Do not edit below this line
module.exports = findTheOldest;
