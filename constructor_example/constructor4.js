document.addEventListener("DOMContentLoaded",function(){

	 var Planet= function(name,position,type){
	 	
	 	this.name=name;
	 	this.position=position;
	 	this.type=type;
	 	this.showPlanet =function(){
	 		var info;
	 		info="Tên  hành tinh là : "+ this.name ;
	 		info+=" ở vị trí thứ: " + this.position +" Trong hệ mặt trời ";
	 		info+= " thuộc kiểu hành tinh: " +this.type ;
	 		console.log(info);
	 		console.log("==================");
	 	}
	 }
	 var planet1= new Planet("Earth",3,"Life Gaien");
	 var planet2= new Planet("Wood",2,"Death Gaien");
	 planet1.showPlanet(); 
	 planet2.showPlanet();
	 // this ở đây là đối tượng truyền vào

},false)


