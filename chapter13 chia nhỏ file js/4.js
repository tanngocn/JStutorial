// Get Programming with JavaScript
// Listings 13.07 and 13.08
// Using spacer and between in the guessing game
// Uses Number Generator and spacer

var getGuesser = function (lowest, highest) {
  var secret = between(lowest, highest);
  var dem=0;
  return function (userNumber) {
    if (userNumber === secret) {
      return spacer.box("Well done!("+dem+") guess", 30, "=");
    } else if (userNumber > secret) {
      dem+=1;
      return spacer.box("Too high!("+dem+") guess", 30, "+");
    } else {
      dem+=1;
      return spacer.box("Too low!("+dem+") guess", 30, "-");
    }
  };
};

var guess = getGuesser(5, 10);



/* Further Adventures
 *
 * 1) Report the number of guesses taken
 *    at each stage.
 *
 *    > guess(6)
 *
 *      ------------------------
 *      - Too low! (2 guesses) -
 *      ------------------------
 *
 * 2) End the game after a certain number
 *    of guesses.
 *
 *    !!!!!!!!!!!!!!!!!!
 *    ! Out Of Guesses !
 *    !!!!!!!!!!!!!!!!!!
 *
 */