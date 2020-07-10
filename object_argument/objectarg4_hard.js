/* Get Programming with JavaScript
 * Listing 7.06
 * Using Math.min and Math.max to constrain an argument
 */

 var line = function (lineLength) {
 	var line = "========================================";
 	lineLength = Math.max(0, lineLength);
 	lineLength = Math.min(40, lineLength);
 	return line.substr(0, lineLength); 
}; //substr(start,end)//lấy cả end

var spaces=function(len){
	var space= "                                    ";
	len=Math.max(0,len);
	len=Math.min(40,len);
	return space.substr(0,len);
}
var emptyBox =function(num){
	var len="===========================";
	var space="                          ";
	num=Math.max(0,num);
	num=Math.min(20,num);
	var x1= len.substr(0,num);
	console.log(Math.min(x1.length));
	var x2= len.substr(0,num);
	var emtybox= x1+"\n"+len.substr(0,(x1.length-(x1.length-1)))+space.substr(0,Math.max(x1.length)-2)+len.substr(0,(x1.length-(x1.length-1)))+"\n"+len.substr(0,(x1.length-(x1.length-1)))+space.substr(0,Math.max(x1.length)-2)+len.substr(0,(x1.length-(x1.length-1)))+"\n"+len.substr(0,(x1.length-(x1.length-1)))+space.substr(0,Math.max(x1.length)-2)+len.substr(0,(x1.length-(x1.length-1)))+"\n"+len.substr(0,(x1.length-(x1.length-1)))+space.substr(0,Math.max(x1.length)-2)+len.substr(0,(x1.length-(x1.length-1)))+"\n"+len.substr(0,(x1.length-(x1.length-1)))+space.substr(0,Math.max(x1.length)-2)+len.substr(0,(x1.length-(x1.length-1)))+ "\n"+x2 ;
	return emtybox;
}
var hinh= emptyBox(12);
console.log(hinh);

/* Further Adventures
 *
 * 1) Test line lengths from -20 to 60
 *    in steps of 10.
 *
 * 2) Define a spaces function that returns a string
 *    made up of a specified number of space characters.
 *    The line of spaces returned can have a length
 *    between 0 and 40.
 *
 * 3) Add an emptyBox function
 *    that draws an empty box of specified
 *    width and height 5.
 *
 *    emptyBox(12);
 *
 *    > ============
 *    > =          =
 *    > =          =
 *    > =          =
 *    > ============
 *
 */