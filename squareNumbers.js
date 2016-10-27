// Implement the following problem without using a while or a for loop unless you were explicitly asked to use loops.
//
// Square the Numbers
//
// Write a function which takes an array of numbers as input and returns a new array containing result of squaring each of the numbers in the given array by two. Example: squareTheNumbers([1, 2, 3]) should give [1, 4, 9].

function squareTheNumbers(number) {
  return number * number;
}

var array = [1, 2, 3];
var squared = array.map(squareTheNumbers);

console.log(squared);
