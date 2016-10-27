// Implement the following problem without using a while or a for loop unless you were explicitly asked to use loops.
//
// Sort an array 2
//
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
// Sort the array, but not by alphabetical order, but by how long each name is, shortest name first.
function compare(name1, name2) {
  return name1.length - name2.length;
}

console.log(people.sort(compare));
