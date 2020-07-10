// Bai toan tong quat hien thi thong tin cua nguoi choi
var player1= {
	name:"zseoz",
	heath:1000,
	place:"dungeon1",
	Res:"50%",
	items: "DragonSworld"
}
var player2= {
	name:"Zeus",
	heath:2000,
	place:"dungeon10",
	Res:"100%",
	items: "LightingSworld"
}
var player3= {
	name:"Hades",
	heath:2000,
	place:"dungeon10",
	Res:"100%",
	items: "HellSworld"
}
var displayPlayer=function(obj){
	console.log(" Information Player");
	console.log("Tên nhân vật "+ obj.name);
	console.log("HP: " +obj.heath);
	console.log("Kháng yếu tố tự nhiên: " +obj.Res);
	console.log("Vật phẩm đang dùng: " +obj.items);
	console.log("")
}
var displayInfo= function(name,place,heath){
	console.log(name+place+heath)
}
displayInfo("Kandra","The Dungeon of Doom",50)
displayPlayer(player1);
displayPlayer(player2);