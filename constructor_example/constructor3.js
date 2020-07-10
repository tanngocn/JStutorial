/* Get Programming with JavaScript
 * Listing 9.03
 * An array of constructed objects
 */

var buildPlanet = function (name, position, type) {
    var planet = {};
  
    planet.name = name;
    planet.position = position;
    planet.type = type;

    planet.showPlanet = function () {
        var info = planet.name;
        info += ": planet " + planet.position;
        info += " - " + planet.type;
        console.log(info);
        console.log("======================================");
      };

    return planet;
};

var planets = [
    buildPlanet( "Jupiter", 5, "Gas Giant" ),
    buildPlanet( "Neptune", 8, "Ice Giant" ),
    buildPlanet( "Mercury", 1, "Terrestrial" ), 
    buildPlanet( "Earth", 3, "Life Giant" ),
    buildPlanet( "Wood", 1, "Death Giant" ),
];

planets.forEach(function (planet) {
    planet.showPlanet();
});



/* Further Adventures
 *
 * 1) Add two more planets to the planets array.
 *
 * 2) Run the program to display them.
 *
 * 3) Add code to visually separate each planet
 *    from the next.
 *
 */