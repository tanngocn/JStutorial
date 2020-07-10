/* Get Programming with JavaScript
 * Listing 9.06
 * Creating multiple Planets with our constructor
 */

 var Planet = function (name, position, type) {
     this.name = name;
     this.position = position;
     this.type = type;
     this.moons = [];

     this.showPlanet = function () {
         console.log(this.name);
         console.log("Planet " + this.position + " - " + this.type);
         console.log("Moons: " + this.moons.join(', ') + ".");
         this.showMoon();
     };

     this.addMoon = function (moon) {
         this.moons.unshift(moon);
     };

     this.showMoon=function(){
         this.moons.forEach(function(a,i){
             console.log("(" +i + ")" +a);
         })
     };

     this.getMoon= function(index){
         console.log(this.moons[index]);
     };
 }

 var planet1 = new Planet("Jupiter", 5, "Gas Giant");
 planet1.addMoon("Io");
 planet1.addMoon("Europa");

 var planet2 = new Planet("Neptune", 8, "Ice Giant");
 planet2.addMoon("Triton");

 var planet3 = new Planet("Mercury", 1, "Terrestrial");

 [ planet1, planet2, planet3 ].forEach(function (planet) {
     planet.addMoon("Irons");
     planet.showPlanet();
     planet3.getMoon(0);
    console.log(planet1 instanceof Planet);

 });



/* Further Adventures
 *
 * 1) Add a new moon to each planet.
 *
 * 2) Create a showMoons method in the
 *    Planet constructor. It should
 *    show the moons with their index.
 *
 *    (0) Io
 *    (1) Europa
 *
 * 3) Update showPlanet to use showMoons
 *    rather than join for the moons.
 *
 * 4) Create a getMoon method that
 *    returns the moon at a given
 *    index.
 *
 *    > planet1.getMoon(1)
 *      Europa
 *
 */