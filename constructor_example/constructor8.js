/* Get Programming with JavaScript
 * Listing 9.08
 * A calendar event constructor
 */

var CalendarEvent = function (title, startDate, startTime, endTime) {
    this.title = title;
    this.startDate = startDate;
    this.startTime = startTime;
    this.endTime = endTime;
  
    this.showEvent = function () {
        var dateString = [this.title,": ",this.startDate," - ","(", this.startTime, " - ",this.endTime,")"].join("");
        console.log(dateString);
    };
};

var calEvent = new CalendarEvent(
    "Annual Review",
    "3/5/16",
    "4.00pm",
    "5.00pm"
);
var calEvent1 = new CalendarEvent(
    "Fesival Hue",
    "3/3/19",
    "6.00am",
    "5.00pm"
);

calEvent1.showEvent();



/* Further Adventures
 *
 * 1) Add a second event.
 *
 * 2) Call the showEvent method on your
 *    new calendar event.
 *
 * 3) Update the showEvent method so that
 *    its output looks like this:
 *    Annual Review: 3/5/16 - (4.00pm - 5.00pm)
 *
 */