// Get Programming with JavaScript
// Chapter 13
// Game initialization and controls

(function () {
  var getGame = function () {
    var render = function () {
      console.clear();
      player.getPlace().showInfo();
      player.showInfo();  
    };
    var firstPlace = theCrypt.buildMap();
    var player = new theCrypt.Player("Kandra", 50);
    player.addItem("The Sword of Doom");
    player.setPlace(firstPlace);
    render();
    // Return the public interface
    return {
      go: function (direction) {
        var place = player.getPlace();
        var destination = place.getExit(direction);

        if (destination !== undefined) {
          player.setPlace(destination);
          render();
          return "";
        } else {
          return "*** There is no exit in that direction ***";
        }
      },
      get: function () {
          var place = player.getPlace();
          var item = place.getLastItem();

          if (item !== undefined) {
              player.addItem(item);
              render();
              return "";
          } else {
              return "*** There is no item to get ***";
          }
      }    
    };
  };
  if (window.theCrypt === undefined) {
    window.theCrypt = {};
  }
  theCrypt.getGame = getGame;
})();