// Implement the following problem without using a while or a for loop unless you were explicitly asked to use loops.
//
// Acronym
//
// Write a function acronym that takes an array of words as argument and returns the acronym of the words. Use the reduce method to do this.
//
// > acronym(['very', 'important', 'person'])
// 'VIP'
// > acronym(['national', 'aeronautics', 'space', 'administration'])
// 'NASA'

var words = ['very', 'important', 'person'];
var more_words = ['national', 'aeronautics', 'space', 'administration'];

function firstChar(word) {
  return word[0].toUpperCase();
}

function acronym(words) {
  var firstChars = words.map(firstChar);
  return firstChars.reduce(function(a, b) {
    return a + b;
  });
}

console.log(acronym(words));
console.log(acronym(more_words));
