/* Get Programming with JavaScript
 * Listing 5.10
 * Displaying a player's health via object properties
 */

var player1;
var player2;
var showPlayerHealth;

showPlayerHealth = function (playerName, playerHealth,playerHealthMultiplier) {
	var playerHealth=playerHealth*playerHealthMultiplier;
    console.log(playerName + " has health " + playerHealth );
};

player1 = {
    name: "Kandra",
    place: "The Dungeon of Doom",
    health: 50,
    healthMultiplier:100
};

player2 = {
    name: "Dax",
    place: "The Old Library",
    health: 40,
    healthMultiplier:50
};

showPlayerHealth(player1.name, player1.health,player1.healthMultiplier);
showPlayerHealth(player2.name, player2.health,player2.healthMultiplier);



/* Further Adventures
 *
 * 1) Add a new property to the player objects
 *    called healthMultiplier.
 *
 * 2) Add a third parameter to the definition
 *    of the showPlayerHealth function
 *    called playerHealthMultiplier
 *
 * 3) Update the function so that the health
 *    displayed is first multiplied by
 *    the health multiplier.
 *
 * 4) Add the player's healthMultiplier property
 *    as a third argument to the two calls
 *    to the showPlayerHealth function.
 *
 */