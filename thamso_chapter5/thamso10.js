/* Get Programming with JavaScript
 * Listing 5.11
 * Displaying a player's location
 */

var showPlayerPlace;

showPlayerPlace = function (playerName, playerPlace) {
    console.log(playerName[3] + " is in " + playerPlace);
};

showPlayerPlace("Kandra", "The Dungeon of Doom");
showPlayerPlace("Dax", "The Old Library");
// playerName[] // duyệt từng kí tự
// 1 lấy kí tự đầu tiên của tên nhân vật  playerName[0]
// 2. lấy kí tự thứ của tên nhân vật playerName[1]
// 3. Lấy kí tự thứ 3 còn gọi hàm showPlayerPlace thứ 2  undefiređ vì  tên nhân vật chỉ có 3 kí tự

/* Further Adventures
 *
 * 1) Inside the console.log parentheses,
 *    change playerName to playerName[0]
 *    Run the program.
 *    What effect do the brackets have?
 *
 * 2) Change the number in the brackets to 1.
 *
 * 3) What happens when you change the
 *    number to 3? Why?
 *
 */