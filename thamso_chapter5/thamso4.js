/* Get Programming with JavaScript
 * Listing 5.05
 * Using the square function
 */

var square;

square = function (numberToSquare) {
  var result;
  result = numberToSquare * numberToSquare;
  console.log(numberToSquare + " * " + numberToSquare + " = " + result);
};


var cube=function(number){
		var kq= number*number*number;
		console.log(kq)
}
cube(2);
cube(5);
cube(10);
cube(12);
var squareRoot= function(number){
	var kq=Math.sqrt(number);
	console.log(kq);
}
squareRoot(4);
squareRoot(16);
squareRoot(25);


/* Further Adventures
 *
 * 1) Define a cube function that cubes
 *    any number passed in as an argument.
 *
 * 2) Call your cube function four times
 *    with different arguments to test it.
 *
 * Math.sqrt is a built-in function to find
 * the positive square root of a number.
 * e.g. Math.sqrt(9) finds the square root of 9.
 *
 * 3) Define and test a squareRoot function
 *    to find square roots and display
 *    them on the console.
 *    e.g. The square root of 9 is 3.
 *
 */