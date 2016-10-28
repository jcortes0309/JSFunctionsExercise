// Implement the following problem without using a while or a for loop unless you were explicitly asked to use loops.
//
//Sum an array
//
// Write a function sum that takes an array of numbers as argument and returns the sum of those numbers. Use the reduce method to do this.
//
function combine(a, b) {
  return a + b;
}

function sum(array) {
  return array.reduce(combine);
}

console.log(sum([1, 2, 3]));
