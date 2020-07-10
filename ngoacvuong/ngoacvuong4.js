/* Get Programming with JavaScript
 * Listing 10.05
 * Iterating over Object.keys with forEach
 */

var ages = {
    "Kandra Smith" : 56,
    "Dax Aniaku"   : 21,
    "Blinky"       : 36,
    "abc"			:10,
    ["anna"]		:12
};
ages.dark=100;
var keys = Object.keys(ages);
keys.forEach(function (key) {
	console.log(key);
  console.log(ages[key]);
  console.log(key.length);
});



/* Further Adventures
 *
 * 1) Add three more people to the ages object:
 *    One directly to the object,
 *    one using square brackets and
 *    one using dot notation.
 *
 * 2) Update the call to console.log so it
 *    shows the age of each person.
 *    Remember, the key lets you access
 *    the value from the ages object.
 *
 * 3) Update the call to console.log so it
 *    shows the person's name along with
 *    the length of their name.
 *    e.g. Blinky: 6
 
 */