// Implement the following problem without using a while or a for loop unless you were explicitly asked to use loops.
//
// Cities 2
//
var cities = [
  { name: 'Los Angeles', temperature: 60.0},
  { name: 'Atlanta', temperature: 52.0 },
  { name: 'Detroit', temperature: 48.0 },
  { name: 'New York', temperature: 80.0 }
];
// Write a function which takes an array of city objects like above as input and return an array of the cities names
//

var cityNames = cities.map(function(city) {
  return city.name;
});

console.log(cityNames);
