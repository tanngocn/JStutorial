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
var player;
var displayPlayer=function(){
	console.log(" Information Player");
	console.log("Tên nhân vật "+ player.name);
	console.log("HP: " +player.heath);
	console.log("Vị trí hiện tại: "+ player.place);
	console.log("Kháng yếu tố tự nhiên: " +player.Res);
	console.log("Vật phẩm đang dùng: " +player.items);
	console.log("")
}
player=player1;
displayPlayer();
player=player2;
displayPlayer();
player=player3;
displayPlayer();