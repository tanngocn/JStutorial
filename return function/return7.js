/* Get Programming with JavaScript
 * Listing 6.08
 * Getting strings for a player’s health and location
 */

var getPlayerHealth;
var getPlayerPlace;

getPlayerHealth = function (playerName, playerHealth) {
    return playerName + " has health " + playerHealth;
};

getPlayerPlace = function (playerName, playerPlace) {
    return playerName + " is in " + playerPlace;
};



var showPlayerInfo=function(playerName,playerHealth,playerPlace){
	var heath= getPlayerHealth(playerName,playerHealth);
	var place=getPlayerPlace(playerName,playerPlace);
	return heath +"\n"+place;
}



/* Further Adventures
 *
 * 1) Create a showPlayerInfo function with three
 *    parameters, playerName, playerHealth and
 *    playerPlace.
 *
 * 2) Call getPlayerHealth and getPlayerPlace
 *    from your new showPlayerInfo function.
 *
 *    e.g. showPlayerInfo("Dax", 50, "The Bath")
 *    should produce the output
 *
 *    Dax has health 50
 *    Dax is in The Bath
 *
 */