/* Get Programming with JavaScript
 * Listing 5.06
 * A function with two arguments
 */

var showSum;

showSum = function (number1, number2) {
	var total = number1 * number2;
	console.log("Tích là " + total);
};
var showProduct =function(num1,num2){
	var total= num1/num2;
	console.log("Thương 2 số: " +total);
}
showProduct(10,20);
var showProduct =function(num1,num2,num3){
	var total= num1+num2*num3;
	console.log("tổng là: " +total);
}


showProduct(19,29,10);
showSum(56,74);


/* Further Adventures
 *
 * 1) Use the showSum function to add 56 and 74.
 *
 * To multiply two numbers, use the * symbol.
 * e.g. 3 * 5 is 3 multiplied by 5.
 *
 * 2) Create a showProduct function to multiply two numbers.
 *
 * 3) Use your function to multiply three pairs of numbers.
 *
 * To divide one number by another, use /.
 * e.g. 10 / 2 is 10 divided by 2.
 *
 * 4) What about showDifference and showQuotient
 *    for subtraction and division?
 *
 */