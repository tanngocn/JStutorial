/* Get Programming with JavaScript
 * Listing 8.10
 * Using the arguments passed by forEach - compact
 */


// [ "Dax", "Jahver", "Kandra" ].forEach(function (item, index, wholeArray) {
//   console.log("Item: " + item);
//   console.log("Index: " + index);
//   console.log("Array: " + wholeArray);
// });
 var rectangle =[
 {length:10,width:20}
 ,{length:20,width:10},
 {length:20,width:30}
 ]

 var assignArea = function (rectangle){
 		rectangle.area= rectangle.length *rectangle.width;
 		return rectangle.area;
 }

 var showInfo= function(rectangle){
 		console.log("Chiều dài: "+ rectangle.length);
 		console.log("Chiều rộng: " +rectangle.width);
 		console.log("Diện tích: " +assignArea(rectangle));
 }
 
rectangle.forEach(function(rect,index){
	console.log("Hình số:" +index)
	showInfo(rect);
})

/* Further Adventures
 *
 * 1) Create an array of rectangle objects.
 *    Each rectangle should have a length
 *    property and a width property.
 *
 * 2) Define an assignArea function that
 *    takes a rectangle as an argument and
 *    assigns an area property holding
 *    the area of the rectangle.
 *
 * 3) Define a showInfo function that
 *    takes a rectangle as an argument and
 *    displays its properties on the console.
 *
 * 4) Use forEach and your two functions
 *    to display info about each of
 *    the rectangles in the array.
 *
 */