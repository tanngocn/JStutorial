/* Get Programming with JavaScript
 * Listing 4.10
 * Calling the showMovieInfo function
 */

var movie1;
var showMovieInfo;
var movie;
var movie2={
	 title: "CSS in dept",
    actors: "pro css",
    directors: "Grid,flex"
};
movie1 = {
    title: "Inside Out",
    actors: "Amy Poehler, Bill Hader",
    directors: "Pete Doctor, Ronaldo Del Carmen"
};

showMovieInfo = function () {
  console.log("Movie information for " + movie.title);
  console.log("------------------------------");
  console.log("Actors: " + movie.actors);
  console.log("Directors: " + movie.directors);
  console.log("------------------------------");
};

movie = movie1;
movie=movie2;
showMovieInfo(); 
// 1 không chạy được vì movie được gán vào 1 biến mới moive2  mà movie2 chỉ là
//  biến rỗng ko phải là đối tượng nên ko có các thuộc tính  title,actors,directors
//2 chương trình chạy được nhưng các thuộc tính là undefired
//3  Thêm các thuộc tính moive2  cần cho việc showMovieInfo() chạy hoàn chỉnh
/* Yều cầu
 * 1) Without declaring a movie2 variable,
 *    assign movie2 to the movie variable
 *    instead of movie1.
 *    i.e. movie = movie2;
 *    What happens when you call showMovieInfo?
 *
 * 2) Create an empty object and
 *    assign it to a movie2 variable.
 *    What happens when you call showMovieInfo now?
 *
 * 3) Fill out movie2 with the properties
 *    needed by showMovieInfo.
 *    What happens when you call showMovieInfo now?
 *
 */