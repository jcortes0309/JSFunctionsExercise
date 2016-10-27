// Implement the following problem without using a while or a for loop unless you were explicitly asked to use loops.
//
// n times
//
// You will write a function callNTimes that takes two arguments: times as a number, and fun as a function. It will call that function for that many times. Example:
//
// > callNTimes(5, hello)
// Hello, world!
// Hello, world!
// Hello, world!
// Hello, world!
// Hello, world!
// You are allowed to use a loop in the implementation of callNTimes.
//
function callNTimes(times, fun) {
  for (var i = 0; i < times; i++) {
    fun();
  }
}

var hello = function() {
  console.log('Hello, world!');
};

callNTimes(5, hello);
