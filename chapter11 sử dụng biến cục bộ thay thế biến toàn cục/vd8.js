/* Get Programming with JavaScript
 * Listing 11.08
 * Hiding the counter variable
 */

var getCounter = function () {
  var counter = 0;
  
  return   function () {
    counter = counter + 1;
    return counter;
  };
  
};

var count = getCounter(); // gán hàm vào biến <=> count=function(){ couter=couter+1; return couter}
var dem= getCounter();



/* Further Adventures
 *
 * 1) At the prompt, type the following commands:
 *
 *    > count()
 *    > count()
 *    > count()
 *
 * Each time count is called, the current value of
 * counter is displayed on the console.
 *
 * 2) At the prompt, type the following commands:
 *
 *    > counter
 *
 * The counter variable is local to the getCounter
 * function; that's where it was declared. It can't
 * be accessed from the console because it is not
 * a global variable.
 *
 */