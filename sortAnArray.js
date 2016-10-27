// Implement the following problem without using a while or a for loop unless you were explicitly asked to use loops.
//
// Sort an array
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
// Given an array of strings such the array of names shown above, sort them by alphabetically order.
//

// All names are converted to lower case otherwise a the sorting would not work correctly
var lowerCasePeople = people.map(function(name) {
  return name.toLowerCase();
});
// All names are capitalized before they are sortedPeople
var capitalize = lowerCasePeople.map(function(name) {
  return name.charAt(0).toUpperCase() + name.slice(1);
});
// Sort all names
var sortedPeople = capitalize.sort();
