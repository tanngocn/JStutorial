/* Get Programming with JavaScript
 * Listing 8.05
 * Passing an array to a function
 */

var getVisitorReport = function (visitorArray, dayInWeek) {
 
	var days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
  ];

	var index = dayInWeek - 1;
	var visitorReport;
  visitorReport = "There were ";
  visitorReport += visitorArray[index];
  visitorReport += " visitors ";
  visitorReport += "on " + days[index];

  return visitorReport;
};

var visitors = [ 354, 132, 210, 221, 481,500,900 ];
   var month =["week1","week2","week3","week4"];

var newfunction=function(month,dayInweek,week){
    var weekChoose=month[week-1];
    var dayInWeek=[
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
    ];
      var index=dayInweek.length-1;
     return " In  " + weekChoose +" "+ getVisitorReport(visitors,dayInweek);
}
  var x= newfunction(month,7,3);
console.log(x);
/* Further Adventures
 *
 * 1) Run the report for Friday.
 *
 * 2) Update the function to include Saturday and Sunday.
 *
 * A month of visitor info could be represented as an
 * array of arrays: [ week1, week2, week3, week4 ]
 * where each week could be an array of visitor numbers.
 *
 * 3) Write a new function with three parameters,
 *    the month array, the week wanted and the day wanted.
 *    The new function should return the visitor report specified.
 *    You can call getVisitorReport from your function if you want.
 *
 * 4) Create four arrays of week visitor numbers
 *    and a month array of the four weeks.
 *    Test your function from 3) for different weeks and days.
 *
 */