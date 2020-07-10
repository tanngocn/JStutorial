
//1.
	var Place= function(title){
		this.title=title;
	}
//2.
	var kitchen= new Place("The kitchen");
	var dungeon= new Place("The dungeon");
//3.
	var exits={};
	exits["North"]=kitchen;
	exits["Exit dungeon"]=dungeon;
//4
var keys= Object.keys(exits);
keys.forEach(function(key){
	console.log(key+ " goes to " + exits[key].title);
})



