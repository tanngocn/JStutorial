/* Get Programming with JavaScript
 * Listing 4.05
 * Two more function definitions and assignments
 */

var findTotal;
var displayMenu;
	var number1=2;
  	var number2=0;
findTotal = function () {
	result = number1 + number2;
	console.log(result);
};

displayMenu = function () {
	console.log("Please choose an option:");
	console.log("(1) Print log");
	console.log("(2) Upload file");
	console.log("(9) Quit");
};
findTotal();
displayMenu();


/* Further Adventures
 *
 * How to run a function, also called calling
 * or invoking the function, is explained in
 * Section 4.2.3.
 * If these exercises are too hard, you
 * can always come back to them later.
 *
 * 1) Declare number1, number2 and result variables.
 *
 * 2) Assign values to the number1 and 
 *    number2 variables.
 *
 * 3) Run the findTotal function by writing its name
 *    followed by parentheses: findTotal();
 *
 * 4) Display the result on the console.
 *
 * 5) Run the displayMenu function.
 *
 */