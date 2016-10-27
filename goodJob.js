// Implement the following problem without using a while or a for loop unless you were explicitly asked to use loops.
//
// Good Job!
//
// Given an array of people's names:
//
var people = [
  'Dom',
  'Lyn',
  'Kirk',
  'Autumn',
  'Trista',
  'Jesslyn',
  'Kevin',
  'John',
  'Eli',
  'Juan',
  'Robert',
  'Keyur',
  'Jason',
  'Che',
  'Ben'
];
// Print out 'Good Job, {{name}}!' for each person's name, one on a line.
//

var congrats = people.map(function(person) {
  return 'Good Job, ' + person;
});

console.log(congrats);
