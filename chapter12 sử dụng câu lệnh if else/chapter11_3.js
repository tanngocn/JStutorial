/* Get Programming with JavaScript
 * Listing 12.03
 * Guess the number - using local scope
 */

var getGuesser = function () {
  var secret = 8;

  return function (userNumber) {
    if (userNumber === secret) {
      console.log("Well done!");
    } else {
      console.log("Unlucky, try again.");
    }
  };
};

var guess = getGuesser();

// 1 Biến getGuesser va guess là biến sẽ được thêm vào phạm vị toàn cục
// 2 trên màn hình prompt gõ getGuesser => hiện thị funtion vì giá trị của
// getGuesser là 1 functuon nên khi gọi giá trị sẽ được hiện thị
// 3 trên màn hình prompt gõ guess thì giá trị guess sẽ được hiển thị
// 4 trên màn hình prompt gõ secret=> error vì secret là biến cục bộ

/* Further Adventures
 *
 * 1) Run the program.
 * 
 * The getGuesser and guess variables will be
 * added to the global scope, the collection of
 * variables avaialable on the console and
 * throughout the program.
 *
 * 2) At the prompt, type 'getGuesser' and
 *    press Enter.
 *
 * The value of the getGuesser variable will be
 * shown on the console. The value is a function
 * so the function will be displayed.
 *
 * Notice, JS Bin has replaced the calls to
 * console.log with its own logging function.
 *
 * 3) At the prompt, type 'guess' and
 *    press Enter.
 *
 * The value of guess is displayed.
 *
 * 4) At the prompt, type 'secret' and
 *    press Enter.
 *
 * secret is not a global variable. It is local
 * to the getGuesser function and cannot be accessed
 * on the console.
 *
 */