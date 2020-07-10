/* Get Programming with JavaScript
 * Listing 7.08
 * Finding substrings
 */

var message = "We choose to go to the Moon!";
console.log(message.length);
console.log(message.substr(23,message.length));
console.log(message.substr(14,13 ));
console.log(message.substr(0, 9));
console.log(message.substr(4));
console.log(message.substr(-9));

//2. 

/* Further Adventures
 *
 * 1) Use substr to log the following parts of
 *    the message string to the console:
 *
 *    > Moon!
 *    > go to the
 *    > We choose
 *
 * 2) Investigate what happens if you omit the
 *    second argument when calling substr.
 *
 * 3) What happens if you use negative numbers
 *    as arguments?
 *
 */