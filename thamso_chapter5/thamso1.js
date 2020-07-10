/* Get Programming with JavaScript
 * Listing 5.02
 * Breaking a function by changing a variable name
 */

var msg;
var showMessage;

msg = "It's full of stars!";
var msg1="khai bao moi ne";
var msg2= msg+msg1

showMessage = function () {
	console.log(msg2)
};

showMessage();


/* Further Adventures
 *
 * 1) Update the console.log so the program works.
 *
 * 2) Declare another message variable
 *    and assign it a value.
 *
 * 3) Display the new message as well as the old one.
 *
 * 4) Display a single message created by joining
 *    the two strings.
 *
 */