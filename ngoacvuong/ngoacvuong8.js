/* Get Programming with JavaScript
 * Listing 10.09
 * Functions to add and show exits
 */

 var Place = function (title) {
 	this.title = title;  
 };


 var olympia = new Place("The Olympia");
 var hell = new Place("The Hell");

 var exits = {};

 var addExit = function (direction, place) {
 	exits[direction] = place;
 };

 var showExits = function () {
 	var keys = Object.keys(exits);

 	keys.forEach(function (key) {
 		console.log(key);
 	});
 };
 var showDestination=function(direction){
 	var key=exits[direction];
 	console.log(key.title);
 }
 addExit("North",olympia);
 addExit("Sount",hell);
 showExits();
 showDestination("North");


 
 // 1) Add a couple more places.
 
 //2) Use the addExit function to add
 //exits to your new places.
 
 // 3) Update the showExits function so
    //it only shows the directions, not
    //the destinations.

   //4) Write a showDestination function
   //    that shows the destination when
   //  a direction is passed to it as
    //an argument.

