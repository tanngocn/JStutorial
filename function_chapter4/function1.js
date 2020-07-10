var movie1;
movie1 = {
 title: "Inside Out",
 actors: "Amy Poehler, Bill Hader",
 directors: "Pete Doctor, Ronaldo Del Carmen"
};
var display=function(obj){
	console.log("tên phim là: "+ obj.title +" " +"Đạo diễn là: "+ obj.actors +" "+"Diễn viên: " +obj.directors );
}
display(movie1);