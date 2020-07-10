
/* Further Adventures
 *
	//Xây dựng 1 đối tượng car bằng hàm trả về giá trị return
 *
 */
var buildCars= function(name,numberSeat,color,speed){
	return{
		name:name,
		numberSeat:numberSeat,
		color:color,
		spee:speed
	};
};
car1=buildCars("lumbogini",4,"white","300km/h");
car2= buildCars("Mecedes",4,"black","200km/h");
var displayInfoCar =function(car){
	return car.name.toUpperCase() + " --Color: " +car.color +" has speed: " +car.speed
}
console.log(displayInfoCar(car1));
console.log(displayInfoCar(car2));
