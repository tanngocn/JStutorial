/* Get Programming with JavaScript
 * Listing 7.07
 * Converting a string to upper case
 */

var planet = "Jupiter";
var bigPlanet = planet.toUpperCase();

console.log(planet + " becomes " + bigPlanet);
var getBig= function(str){
	return str.toUpperCase();
}
var getSmall= function(str){
	return str.toLowerCase();
}
console.log(getBig("kamezoko"));
console.log(getSmall("ẤDÂDDDDD"));

/* Further Adventures
 *
 * 1) Create a getBig function that accepts a
 *    string as an argument and returns it
 *    converted to upper case.
 *
 * There is also a toLowerCase string method.
 *
 * 2) Create a getSmall function that accepts a
 *    string as an argument and returns it
 *    converted to lower case.
 *
 */