// Implement the following problem without using a while or a for loop unless you were explicitly asked to use loops.
//
// Bonus: forEach
//
// Implement a forEach function which takes two arguments: an array arr and a function fun. It will call fun passing each item in arr to fun as the first argument. Example:
//
var arr = [
  { name: 'Bob' },
  { name:'Alice' },
  { name:'Joe' }];

arr.forEach(function(person) {
  console.log('Hello, ' + person.name + '!');
});
// The above program will print:
//
// Hello, Bob!
// Hello, Alice!
// Hello, Joe!
// You can use a loop in the implementation of this function.

// Implement a forEach function which takes two arguments: an array arr and a function fun. It will call fun passing each item in arr to fun as the first argument.

// VERSION 1
var arr = ["Autumn", "Kevin", "Matt"];

forEach(arr, function(name) {
  console.log("Hello, " + name + "!");
});

function forEach(arr, fun) {
  for (var i = 0; i < arr.length; i++) {
    fun(arr[i]);
  }
}

// VERSION 2
var arr = ["Autumn", "Kevin", "Matt"];

var hello = function(name) {
  console.log("Hello, " + name + "!");
};

forEach(arr, hello);

function forEach(arr, fun) {
  for (var i = 0; i < arr.length; i++) {
    fun(arr[i]);
  }
}
