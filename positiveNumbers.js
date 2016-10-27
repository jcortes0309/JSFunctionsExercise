// Implement the following problem without using a while or a for loop unless you were explicitly asked to use loops.
//
// Positive Numbers
//
// Write a function which takes an array of numbers as input and returns a new array containing only the positive numbers in the given array.

var array = [3, 2, -5, -1, 0, 10];

var positiveNumbers = array.filter(function(number) {
  return number >= 0;
});

console.log(positiveNumbers);
