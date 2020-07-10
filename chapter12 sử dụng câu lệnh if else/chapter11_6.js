/* Get Programming with JavaScript
 * Listing 12.06
 * A neater else-if block
 */

var getGuesser = function (ranger,offset) {
  var secret = Math.floor(Math.random() * ranger + 1);

  return function (offset) {
    if (offset === secret) {
      return "Well done!";
    } else if (offset > secret) {
      return "Too high!";
    } else {
      return "Too low!";
    }
  };
};

var guess = getGuesser(20,10);



/* Further Adventures
 *
 * Let's change getGuesser to include a parameter
 * for setting the number of possible numbers to guess.
 *
 * e.g. getGuesser(20) will create random numbers
 * from 1 to 20. That's 20 possible numbers.
 *
 * 1) Add a 'range' parameter to the function
 *    definition of getGuesser.
 *
 *    var getGuesser = function (range) {
 *
 * 2) Change the 10 on line 7 to 'range'.
 *
 *    var secret = Math.floor(Math.random() * range + 1);
 *
 * 3) Include an argument when getGuesser is called
 *    on line 20.
 *
 *    var guess = getGuesser(20);
 *
 * 4) Test the game.
 *
 * 5) Now add a second parameter, 'offset'
 *    and update the code to choose random numbers
 *    greater than or equal to the value of offset.
 *
 */