// Implement the following problem without using a while or a for loop unless you were explicitly asked to use loops.
//
// Cities 1
//
// Write a function which takes an array of city objects like such:
//
var cities = [
  { name: 'Los Angeles', temperature: 60.0},
  { name: 'Atlanta', temperature: 52.0 },
  { name: 'Detroit', temperature: 48.0 },
  { name: 'New York', temperature: 80.0 }
];
// as input and returns a new array containing the cities whose temperature is cooler than 70 degrees.
//

var tempUnder70 = cities.filter(function(city) {
  return city.temperature < 70;
});

console.log(tempUnder70);
