// Implement the following problem without using a while or a for loop unless you were explicitly asked to use loops.
//
// Sort an array, 3
//
// Given an array of array of numbers like:
//
var arr = [
  [1, 3, 4],
  [2, 4, 6, 8],
  [3, 6]
];
// Sort the array by the sum of each inner array. For the above example, the respective sums for each inner array is 8, 20, and 9. Therefore, the solution should be:
//
// [
//   [1, 3, 4],
//   [3, 6],
//   [2, 4, 6, 8]
// ]

function sum(array) {
  return array.reduce(function(a, b) {
    return a + b;
  });
}

function compare(array1, array2) {
  return sum(array1) - sum(array2);
}

console.log(arr.sort(compare));
