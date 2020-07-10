/* Get Programming with JavaScript
 * Listing 7.04
 * Moving a point in 2D
 */

var point1;
var point2;
var move;
var showPoint;

move = function (point, change) {
    return {
        x: point.x + change.x *point.x,
        y: point.y + change.y
    };
};
var reflectX =function(x,y){
	return {
		x:x,
		y:y
	}
}
var rotate90 =function(point){
	point.x=point.x-1;
	point.y=point.y-1;
	return point;
}
showPoint = function (point) {
    console.log("( " + point.x + " , " + point.y + " )");
};

var point1=reflectX(0,10);
console.log(point1);
var xoay=rotate90(point1);
xoay=rotate90(point1);
xoay=rotate90(point1);
xoay=rotate90(point1);
xoay=rotate90(point1);
xoay=rotate90(point1);
xoay=rotate90(point1);
xoay=rotate90(point1);
xoay=rotate90(point1);
xoay=rotate90(point1);

console.log(xoay)



/* Further Adventures
 *
 * 1) Change the amount by which the point is moved
 *    by altering the x and y properties of
 *    the object literal passed to the move function.
 *
 * 2) Write a reflectX function that reflects
 *    a point in the x-axis, returning the new point.
 *
 * 3) How about a rotate90 function that rotates
 *    the point by 90 degrees anticlockwise
 *    around ( 0 , 0 )?
 *
 */