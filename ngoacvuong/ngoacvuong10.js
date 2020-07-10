 /*
 Get Programming with JavaScript
 * Listing 10.11
 * A map with four locations
 */

var Place = function (title, description) {
    this.title = title;
    this.exits = {};
    this.items=[];

    this.addExit = function (direction, exit) {
        this.exits[direction] = exit;
    };

    this.showExits = function () {  
        console.log("Exits from " + this.title + ":");
  
        Object.keys(this.exits).forEach(function (key) {
            console.log(key);
        });
    };
    this.addItem=function(item){
        return this.items.push(item);
    };
    this.showItem=function(){
        console.log(this.title);
        this.items.forEach(function(item,i){
            console.log("("+(i+1)+")" +item)
        })
    }
};

var library = new Place("The Old Library");
var kitchen = new Place("The Kitchen");
var garden = new Place("The Kitchen Garden");
var cupboard = new Place("The Kitchen Cupboard");
    library.addItem("ironspear");
    library.addItem("Magicbook");
    library.showItem();



