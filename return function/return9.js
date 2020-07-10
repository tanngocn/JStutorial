document.addEventListener("DOMContentLoaded",function(){

    var player1={
        name:"seoz",
        heath:1000,
        place:"The hell 1",
        items:"Darklong spear,Darklong armor,Darklong shoes"
    }
    var player2={
        name:"Zeus",
        heath:2000,
        place:"The Olympia",
        items:"Thuder sword, Thunder armor,Thunder shoes"
    }
 // 2
 var getPlayerHeath=function(playerName,playerHeath){
     return playerName +" has HP: " +playerHeath;
 }
 var getPlayerPlace = function(playerName,playerPlace){
     return playerName + " is in " + playerPlace;
 }
 var getPlayerItems = function(playerName,playerItems){
     return playerName + " has item: " + playerItems;
 }

 // 3
 var getBorder= function(){
     return "================================================================";
 }
 var showPlayerInfo= function(playerName,playerHeath,playerPlace,playerItems){
     var player;
     player = "\n" +playerName;
     player+= "\n" +getBorder();
     player+= "\n" +getPlayerHeath(playerName,playerHeath);
     player+= "\n" +getPlayerPlace(playerName,playerPlace);
     player+= "\n" +getPlayerItems(playerName,playerItems);
     player+= "\n" + getBorder();
     return player;
 }
 // 4
console.log(showPlayerInfo(player1.name,player1.heath,player1.place,player1.items));
},false)

