/* Get Programming with JavaScript
 * Listing 8.06
 * Manipulating arrays with push, pop and join
 */

var items = [];
var item = "The Pyramids";
var removed;

items.push(item);
items.push("The Grand Canyon");
items.push("Bondi Beach");
items.push("Thunder","lighting");

items[3]="thunder atack";
console.log(items.splice(0,0, "kkk" ,"l2"));
console.log(items);




/* Further Adventures
 *
 * 1) Push another item onto the array.
 *
 * 2) Log the joined items.
 *
 * You can set an array element by using its index.
 * items[2] = "The Taj Mahal"
 *
 * 3) Set one of the items using square brackets.
 *
 * 4) Can you push more than one item at a time?
 *
 */