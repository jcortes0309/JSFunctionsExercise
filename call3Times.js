// Implement the following problem without using a while or a for loop unless you were explicitly asked to use loops.
//
// 3 times
//
// Given this function:
//
function call3Times(fun) {
  fun();
  fun();
  fun();
}
// Use the call3Times function to print "Hello, world!" 3 times.
//

var hello = function() {
  console.log('Hello, world!');
};

call3Times(hello);
