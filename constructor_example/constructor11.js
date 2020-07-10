/* Get Programming with JavaScript
 * Listing 9.11
 * A Place constructor part 3
 */

// The spacer namespace

var spacer = {
  blank: function () {
    return "";
  },

  newLine: function () {
    return "\n";
  },

  line: function (length, character) {
    var longString = "****************************************";
    longString += "----------------------------------------";
    longString += "========================================";
    longString += "++++++++++++++++++++++++++++++++++++++++";
    longString += "                                        ";

    length = Math.max(0, length);
    length = Math.min(40, length);
    return longString.substr(longString.indexOf(character), length);
  },
  
  wrap : function (text, length, character) {
    var padLength = length - text.length - 3;
    var wrapText = character + " " + text;      
    wrapText += spacer.line(padLength, " ");
    wrapText += character;
    return wrapText;
  },

  box: function (text, length, character) {
    var boxText = spacer.newLine();
    boxText += spacer.line(length, character) + spacer.newLine();
    boxText += spacer.wrap(text, length, character) + spacer.newLine(); 
    boxText += spacer.line(length, character) + spacer.newLine();
    return boxText;
  }
};


// The Place constructor

var Place = function (title, description) {
    var newLine = spacer.newLine();
  
    this.title = title;
    this.description = description;
    this.items = [];
    this.exits = [];
  
    this.getItemsInfo = function () {
        var itemsString = "Items: " + newLine;
        this.items.forEach(function (item) {
            itemsString += "   - " + item;
            itemsString += newLine;
        });
        return itemsString;
    };
  
    this.getExitsInfo = function () {
        var exitsString = "Exits from " + this.title;
        exitsString += ":" + newLine;
        
        this.exits.forEach(function (exit) {
            exitsString += "   - " + exit.title;
            exitsString += newLine;
        });
      
        return exitsString;
    };

    this.getTitleInfo = function () {
        return spacer.box(
            this.title,
            this.title.length + 4,
            "="
        );
    };

    this.getInfo = function () {
        var infoString = this.getTitleInfo();
        infoString += this.description;
        infoString += newLine + newLine;
        infoString += this.getItemsInfo() + newLine;
        infoString += this.getExitsInfo();
        infoString += spacer.line(40, "=") + newLine;
        return infoString;
    };

  
    this.showInfo = function () {
        console.log(this.getInfo());
    };

    this.addItem = function (item) {
        this.items.push(item);
    };
  
    this.addExit = function (exit) {
        this.exits.push(exit);
    };
};


// Test the Place constructor

var library = new Place(
    "The Old Library",
    "You are in a library. Dusty books line the walls."
);

var kitchen = new Place(
    "The Kitchen",
    "You are in the kitchen. There is a disturbing smell."
);

var hall = new Place(
    "The Main Hall",
    "You are in a large hall. It is strangely empty."
);
var dungeon = new Place(
    "Dungeon 1",
    "You are in a dungeon. It is dark shadow monster."
);

library.addItem("a rusty key");
dungeon.addItem("dungeon key 2");
dungeon.addItem("ironspear");
dungeon.addItem("league spear");
dungeon.addExit(dungeon);
dungeon.addExit(kitchen);

dungeon.showInfo();



/* Further Adventures
 *
 * 1) Add a fourth place.
 *
 * 2) Add some items to your new place.
 *
 * 3) Add some exits to your new place.
 *
 * 4) Use showInfo to display info
 *    about your new place.
 *
 */