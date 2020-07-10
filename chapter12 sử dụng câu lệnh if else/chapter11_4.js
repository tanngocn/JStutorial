/* Get Programming with JavaScript
 * Listing 12.04
 * Guess the random number
 */

var getGuesser = function () {
  var secret = Math.floor(Math.random() * 30 + 30);

  return {
  	function (userNumber) {
    if (userNumber === secret) {
      return "Well done!";
    } else {
      return "Unlucky, try again.";
    }
  },
 between:function(num1, num2){
 	return  Math.floor(0*num2+num1) +" <= whole number " + " <= "+ Math.floor(Math.random()*num1 +num2);
 }
}
};

var guess = getGuesser();



/* Further Adventures
 *
 * 1) Run the program.
 *
 * 2) Play the game a few times on the console.
 *    e.g. guess(2)
 *
 * 3) Change the code so the secret number is
 *    between 30 and 50.
 *
 * 4) Test your changes.
 *
 * CHALLENGE: Create a function called 'between'
 * that returns a random whole number between two
 * numbers passed as arguments.
 *
 * e.g. between(1, 5)      //   1 <= whole number <= 5
 *      between(100, 200)  // 100 <= whole number <= 200
 *
 */