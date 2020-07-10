/* Get Programming with JavaScript
 * Listing 9.01
 * Using a function to create an object
 */

var buildPlanet = function (name, position, type) {
    var planet = {};
  
    planet.name = name;
    planet.position = position;
    planet.type = type;
  
    return planet;
};

var planet1 = buildPlanet(
    "Jupiter",
    5,
    "Gas Giant"
);
var planet2= buildPlanet("Earth",3,"Life");

console.log(planet2.name);
console.log(planet2.position);
console.log(planet2.type);



/* Further Adventures
 *
 * 1) Build a second planet,
 *    using the buildPlanet function.
 *
 * 2) Log its name and type.
 *
 */