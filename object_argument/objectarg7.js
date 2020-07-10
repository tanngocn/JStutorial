/* Get Programming with JavaScript
 * Listing 7.09
 * Finding a character with indexOf
 */

var message = "We choose to go to the Moon!";

var charIndex = message.indexOf("M");
var char1= message.indexOf("go");
console.log(message.substr(charIndex, 3));
//1
console.log(message.substr(char1));
//2
var char2= message.indexOf("c");
var char3= message.indexOf("se");
console.log(message.substr(char2,char3-1));
var char4= message.lastIndexOf("Moon");
console.log(char4);


/* Further Adventures
 *
 * 1) Use indexOf to find the index of where the
 *    word 'go' starts in the message string.
 *
 * 2) Use indexOf and substr to display the word
 *    'choose' from the message string.
 *
 * There is also a lastIndexOf string method.
 *
 * 3) Use lastIndexOf to find the index of the
 *    'oo' in the word 'Moon' of the message string.
 *
 */