/* Get Programming with JavaScript
 * Listing 8.04
 * Using a variable as an index
 */

var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
var dayInWeek = 5;

var getDay= function(number){
	return	days[number-1];
}
console.log(getDay(2));
console.log(getDay(1));
console.log(getDay(4));
console.log(getDay(5));


/* Further Adventures
 *
 * 1) Change the value of the dayInWeek variable
 *    to display a different day.
 *
 * 2) Write a function that accepts a number for the
 *    day of the week to be displayed and returns
 *    the day as a string. Assign the function to
 *    a getDay variable.
 *
 * 3) Call your function, passing it 4 as the day
 *    of the week, and log the value it returns.
 *
 */